import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { apiReference } from "@scalar/express-api-reference";
import { generateOpenApiSpec, WhatsAppRequestSchema, formatZodError } from "@desert-safari/utils";
import { isAdmin } from "./middleware/auth";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "script-src": ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
            "style-src": ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://fonts.googleapis.com"],
            "img-src": ["'self'", "data:", "https://cdn.jsdelivr.net"],
            "font-src": ["'self'", "https://fonts.gstatic.com"],
        },
    },
}));

// Strict CORS for production
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_APP_URL // e.g., https://desert-safari.com
        : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(morgan("dev"));
app.use(express.json());

// OpenAPI Spec Endpoint
app.get("/openapi.json", (req, res) => {
    const isProduction = process.env.NODE_ENV === 'production';
    const isDocsEnabled = process.env.ENABLE_API_DOCS === 'true';

    if (isProduction && !isDocsEnabled) {
        return res.status(404).send('Not Found');
    }

    const spec = generateOpenApiSpec();
    res.json(spec);
});

// Documentation Route
app.use(
    "/api/v1/docs",
    isAdmin, // Protected middleware
    (req, res, next) => {
        const isProduction = process.env.NODE_ENV === 'production';
        const isDocsEnabled = process.env.ENABLE_API_DOCS === 'true';

        if (isProduction && !isDocsEnabled) {
            return res.status(404).send('Not Found');
        }
        next();
    },
    apiReference({
        spec: {
            content: generateOpenApiSpec(),
        },
        theme: 'deepSpace',
        layout: 'modern',
        // Security: Disable proxy in production to prevent abuse
        proxy: process.env.NODE_ENV === 'production' ? '' : undefined,
        isEditable: false,
    })
);

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
    res.send("Desert Safari API");
});

app.post("/whatsapp", (req, res) => {
    // Single Source of Truth Validation
    const result = WhatsAppRequestSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json(formatZodError(result.error));
    }

    const { tourId, date, guests } = result.data;

    // In a real app, we would look up the tour details from the DB
    const tourMapping: Record<string, string> = {
        "safari": "Desert Safari",
        "buggy": "Dune Buggy",
        "camp": "Overnight Camp"
    };

    const tourName = tourMapping[tourId] || "Desert Adventure";
    const phone = process.env.WHATSAPP_PHONE || "97412345678";

    const text = `Hello, I would like to book ${tourName} on ${date} for ${guests} guests.`;
    const encoded = encodeURIComponent(text);
    const link = `https://wa.me/${phone}?text=${encoded}`;

    res.json({ link });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
