import { OpenAPIRegistry, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

const bearerAuth = registry.registerComponent('securitySchemes', 'bearerAuth', {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
});

// ----------------------------------------------------------------------------
// Reusable Components (Schemas)
// ----------------------------------------------------------------------------

export const UserSchema = registry.register(
    'User',
    z.object({
        id: z.string().uuid().openapi({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Unique identifier' }),
        name: z.string().min(2).openapi({ example: 'John Doe', description: 'Full Name' }),
        email: z.string().email().openapi({ example: 'john@example.com', description: 'Email address' }),
        role: z.enum(['ADMIN', 'USER', 'DOCTOR']).openapi({ example: 'USER', description: 'User Role' }),
        createdAt: z.string().datetime().openapi({ example: '2024-01-01T00:00:00Z' }),
        updatedAt: z.string().datetime().openapi({ example: '2024-01-01T00:00:00Z' }),
    })
);

export const WhatsAppRequestSchema = registry.register(
    'WhatsAppRequest',
    z.object({
        tourId: z.string().openapi({ example: 'safari', description: 'ID of the tour' }),
        date: z.string().openapi({ example: '2023-12-25', description: 'Date of booking' }),
        guests: z.number().openapi({ example: 2, description: 'Number of guests' }),
    })
);

export const WhatsAppResponseSchema = registry.register(
    'WhatsAppResponse',
    z.object({
        link: z.string().openapi({ example: 'https://wa.me/97412345678?text=...', description: 'Generated WhatsApp link' }),
    })
);

export const ErrorSchema = registry.register(
    'Error',
    z.object({
        code: z.string().openapi({ example: 'INTERNAL_SERVER_ERROR' }),
        message: z.string().openapi({ example: 'Something went wrong' }),
        issues: z.array(z.object({
            path: z.array(z.string()),
            message: z.string()
        })).optional().openapi({ description: 'Validation issues if any' })
    })
);

// ----------------------------------------------------------------------------
// Paths
// ----------------------------------------------------------------------------

registry.registerPath({
    method: 'post',
    path: '/whatsapp',
    description: 'Generate WhatsApp booking link',
    summary: 'Create WhatsApp Link',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: WhatsAppRequestSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'WhatsApp link generated successfully',
            content: {
                'application/json': {
                    schema: WhatsAppResponseSchema,
                },
            },
        },
    },
});
