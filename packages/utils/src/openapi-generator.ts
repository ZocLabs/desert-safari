import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { registry } from './schemas/registry';

export const generateOpenApiSpec = () => {
    const generator = new OpenApiGeneratorV3(registry.definitions);

    return generator.generateDocument({
        openapi: '3.1.0',
        info: {
            version: '1.0.0',
            title: 'Desert Safari API',
            description: 'API Documentation for Desert Safari Application. Secure, single source of truth.',
        },
        servers: [
            { url: '/api' },
        ],
        security: [{ bearerAuth: [] }],
    });
};
