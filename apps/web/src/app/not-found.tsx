import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-center">
      <h2 className="text-6xl font-heading font-bold text-primary mb-2">404</h2>
      <h3 className="text-2xl font-semibold mb-4">Page Not Found</h3>
      <p className="text-muted-foreground mb-8">
        The desert mirage has faded. We couldn't find the page you are looking for.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-primary text-primary-foreground font-bold">
          Return to Oasis
        </Button>
      </Link>
    </div>
  );
}
