import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center bg-navy-50">
        <div className="text-center px-4">
          <div className="text-8xl font-serif font-bold text-gold-400 mb-4">404</div>
          <h1 className="text-3xl font-serif font-bold text-navy-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-navy-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            Perhaps you were looking for accountants in a specific location?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go to Homepage
            </Link>
            <Link href="/#locations" className="btn-secondary">
              Browse Locations
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
