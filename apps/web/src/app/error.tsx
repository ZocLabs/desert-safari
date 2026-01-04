'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-center">
      <h2 className="text-4xl font-heading font-bold text-destructive mb-4">
         Something went wrong!
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
         We encountered an error processing your request. Our team has been notified.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="outline">
          Try again
        </Button>
        <Button onClick={() => window.location.href = '/'} className="bg-primary text-primary-foreground">
           Return Home
        </Button>
      </div>
    </div>
  );
}
