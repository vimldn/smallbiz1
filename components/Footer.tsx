import Link from 'next/link';
import { cities } from '@/data/cities';

export default function Footer() {
  const englandCities = cities.filter(c => c.country === 'England').slice(0, 12);
  const scotlandCities = cities.filter(c => c.country === 'Scotland').slice(0, 6);
  const walesCities = cities.filter(c => c.country === 'Wales').slice(0, 6);
  const niCities = cities.filter(c => c.country === 'Northern Ireland').slice(0, 6);

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold">
                SmallBiz<span className="text-gold-400">Accountants</span>
              </span>
            </Link>
            <p className="text-navy-300 text-sm mb-4">
              Connecting small businesses with trusted local accountants across the UK since 2024.
            </p>
          </div>

          {/* England */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">England</h4>
            <ul className="space-y-2 text-sm">
              {englandCities.map(city => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="text-navy-300 hover:text-white transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Scotland */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Scotland</h4>
            <ul className="space-y-2 text-sm">
              {scotlandCities.map(city => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="text-navy-300 hover:text-white transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wales */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Wales</h4>
            <ul className="space-y-2 text-sm">
              {walesCities.map(city => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="text-navy-300 hover:text-white transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Northern Ireland */}
          <div>
            <h4 className="text-gold-400 font-semibold mb-4">Northern Ireland</h4>
            <ul className="space-y-2 text-sm">
              {niCities.map(city => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="text-navy-300 hover:text-white transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} SmallBizAccountants. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-navy-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-navy-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
