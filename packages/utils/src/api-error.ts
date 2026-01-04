import { z } from 'zod';

export interface ApiErrorResponse {
    code: string;
    message: string;
    issues?: Array<{
        path: string[];
        message: string;
    }>;
}

export function formatZodError(error: z.ZodError): ApiErrorResponse {
    return {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed',
        issues: error.errors.map((issue) => ({
            path: issue.path.map(String),
            message: issue.message,
        })),
    };
}
