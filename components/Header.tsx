import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
              <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xl font-serif font-bold text-navy-900">
              SmallBiz<span className="text-gold-500">Accountants</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/#services" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
              Services
            </Link>
            <Link href="/#how-it-works" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/#locations" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
              Locations
            </Link>
          </nav>
          
          <a href="#quote-form" className="btn-primary hidden sm:inline-flex">
            Get Free Quotes
          </a>
        </div>
      </div>
    </header>
  );
}
