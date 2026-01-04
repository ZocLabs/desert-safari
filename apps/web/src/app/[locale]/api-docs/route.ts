import { ApiReference } from '@scalar/nextjs-api-reference';
import { generateOpenApiSpec } from '@desert-safari/utils';
import { currentUser } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    // 1. Environment Guard
    const isProduction = process.env.NODE_ENV === 'production';
    const isDocsEnabled = process.env.ENABLE_API_DOCS === 'true';

    if (isProduction && !isDocsEnabled) {
        return new Response('Not Found', { status: 404 });
    }

    // 2. Auth Guard (Admin Only)
    const user = await currentUser();
    const metadata = user?.publicMetadata as { role?: string } | undefined;

    // Allow Access if user is Admin
    if (metadata?.role !== 'ADMIN') {
        return new Response('Forbidden: Admins Only. please log in with an admin account.', { status: 403 });
    }

    // 3. Generate Spec
    const spec = generateOpenApiSpec();

    // 4. Create Scalar Handler
    const handler = ApiReference({
        spec: {
            content: spec,
        },
        theme: 'deepSpace',
        layout: 'modern',
        defaultHttpClient: {
            targetKey: 'js',
            clientKey: 'fetch',
        },
    });

    // 5. Execute Handler and Add Headers
    const response = await (handler as any)(request);
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');

    return response;
}
