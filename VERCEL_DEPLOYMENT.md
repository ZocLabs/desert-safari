# Vercel Deployment Guide

## ✅ Fixed Vercel Configuration

The `vercel.json` has been updated to remove the `unoptimized` property which is not supported by Vercel.

## Vercel Project Settings

Use these exact settings when deploying to Vercel:

### **General Settings**
- **Repository**: `ZocLabs/desert-safari`
- **Branch**: `main`
- **Framework**: Next.js
- **Root Directory**: `apps/web`

### **Build & Development Settings**

#### Build Command:
```bash
cd ../.. && turbo run build --filter={apps/web}...
```

#### Output Directory:
```
Next.js default (.next)
```

#### Install Command:
```bash
npm install --prefix=../..
```

#### Development Command:
```bash
npm run dev
```

### **Environment Variables**

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL=your_postgres_connection_string

# Optional: API URL (if using separate API deployment)
NEXT_PUBLIC_API_URL=https://your-api.onrender.com
```

### **Important Notes**

1. **Local Images**: All Doha images are in `public/images/doha/` and will be deployed automatically
2. **No External Dependencies**: No Unsplash API calls - everything is local
3. **Turbo Build**: The build command uses Turborepo to build only the web app and its dependencies
4. **Monorepo Structure**: Vercel will install dependencies from the root and build from `apps/web`

### **Deployment Steps**

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click "Import Project"
3. Select `ZocLabs/desert-safari` repository
4. Use the settings above
5. Add environment variables
6. Click "Deploy"

### **After Deployment**

- ✅ All images will load from `/images/doha/`
- ✅ No 404 errors
- ✅ Fast loading (local images)
- ✅ Production-ready

### **Troubleshooting**

If build fails:
1. Check that `turbo` is in root `package.json` dependencies
2. Verify `apps/web/package.json` has all required dependencies
3. Check environment variables are set correctly

### **Custom Domain**

After successful deployment, you can add a custom domain in:
Vercel Dashboard → Project → Settings → Domains
