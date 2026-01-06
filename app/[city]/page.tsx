import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import { cities, getCityBySlug, getCitiesByCountry, City } from '@/data/cities';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `Small Business Accountants in ${city.name} | Get Free Quotes`,
    description: `Find trusted small business accountants in ${city.name}, ${city.region}. Compare quotes from local ${city.name} accounting firms for bookkeeping, tax returns, and business advisory services.`,
    keywords: `accountant ${city.name}, small business accountant ${city.name}, ${city.name} bookkeeper, tax accountant ${city.name}, ${city.region} accountants`,
    openGraph: {
      title: `Small Business Accountants in ${city.name}`,
      description: `Connect with experienced accountants in ${city.name}. Get free quotes for bookkeeping, tax returns, and more.`,
    },
  };
}

function getNearbyCities(currentCity: City): City[] {
  const sameCityCities = cities.filter(
    c => c.region === currentCity.region && c.slug !== currentCity.slug
  );
  const sameCountryCities = cities.filter(
    c => c.country === currentCity.country && c.region !== currentCity.region && c.slug !== currentCity.slug
  );
  return [...sameCityCities.slice(0, 4), ...sameCountryCities.slice(0, 4)].slice(0, 8);
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const nearbyCities = getNearbyCities(city);
  const countryCities = getCitiesByCountry(city.country).filter(c => c.slug !== city.slug).slice(0, 12);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="gradient-bg pattern-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 to-navy-800/90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-sm text-navy-300 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href={`/#locations`} className="hover:text-white transition-colors">{city.country}</Link>
                <span>/</span>
                <span className="text-gold-400">{city.name}</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Small Business Accountants in <span className="text-gold-400">{city.name}</span>
              </h1>
              <p className="text-xl text-navy-200 mb-8">
                Connect with trusted, qualified accountants in {city.name}, {city.region}. 
                Get free quotes from local accounting firms who specialise in helping small businesses thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote-form" className="btn-primary">
                  Get Free Quotes in {city.name}
                </a>
                <a href="#services" className="btn-secondary">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-navy-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gold-500">50+</div>
                <div className="text-navy-600 text-sm">Accountants in {city.name}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500">4.8★</div>
                <div className="text-navy-600 text-sm">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500">24hr</div>
                <div className="text-navy-600 text-sm">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-500">Free</div>
                <div className="text-navy-600 text-sm">No Obligation Quotes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* About */}
                <div className="card p-8">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                    Why Choose a Local {city.name} Accountant?
                  </h2>
                  <div className="prose prose-navy max-w-none text-navy-700">
                    <p>
                      Finding the right accountant for your small business in {city.name} can make all the difference to your financial success. 
                      Local accountants understand the {city.region} business landscape and can provide personalised advice tailored to your specific situation.
                    </p>
                    <p>
                      Whether you&apos;re a sole trader, partnership, or limited company based in {city.name}, 
                      our network of qualified accountants can help with everything from day-to-day bookkeeping to complex tax planning and business advisory services.
                    </p>
                    <p>
                      By choosing a {city.name}-based accountant, you benefit from face-to-face meetings when needed, 
                      knowledge of local business networks, and an accountant who truly understands the challenges and opportunities in {city.region}.
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div id="services" className="card p-8">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                    Accounting Services Available in {city.name}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'Annual Accounts & Tax Returns',
                        description: `Professional preparation and filing of your business accounts and tax returns, ensuring compliance with HMRC requirements.`
                      },
                      {
                        title: 'Bookkeeping & VAT',
                        description: `Day-to-day financial record keeping and MTD-compliant VAT returns for ${city.name} businesses.`
                      },
                      {
                        title: 'Payroll Services',
                        description: `Complete payroll management including PAYE, National Insurance, and pension auto-enrolment.`
                      },
                      {
                        title: 'Business Advisory',
                        description: `Strategic financial advice to help your ${city.name} business grow and succeed.`
                      },
                      {
                        title: 'Company Formation',
                        description: `Help setting up your limited company with all necessary registrations and compliance.`
                      },
                      {
                        title: 'Management Accounts',
                        description: `Regular financial reports giving you clear visibility of your business performance.`
                      },
                    ].map((service, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900 mb-1">{service.title}</h3>
                          <p className="text-sm text-navy-600">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="card p-8">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                    Benefits of Using Our Service
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Save Time',
                        description: `Instead of searching for and contacting multiple accountants in ${city.name}, we do the work for you.`
                      },
                      {
                        title: 'Compare Quotes',
                        description: 'Receive up to 4 quotes from qualified accountants so you can make an informed decision.'
                      },
                      {
                        title: 'Verified Professionals',
                        description: 'All accountants in our network are qualified and vetted for quality and reliability.'
                      },
                      {
                        title: 'Completely Free',
                        description: 'Our service is 100% free with no obligation. You only pay if you choose to work with an accountant.'
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-navy-50">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-navy-900 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900">{benefit.title}</h3>
                          <p className="text-sm text-navy-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="card p-8">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        q: `How much do accountants in ${city.name} charge?`,
                        a: `Accounting fees in ${city.name} vary depending on the services you need and the size of your business. Sole traders typically pay £300-£800 per year for basic services, while limited companies might pay £800-£2,500+. Our free quote service lets you compare prices from local accountants.`
                      },
                      {
                        q: 'Do I need a local accountant or can I use one online?',
                        a: `While online accountants can work well, many ${city.name} business owners prefer local accountants for face-to-face meetings, local knowledge, and easier communication. Our service connects you with accountants based in and around ${city.name}.`
                      },
                      {
                        q: 'What qualifications should I look for?',
                        a: 'Look for accountants who are members of recognised bodies such as ACCA, ICAEW, AAT, or CIMA. All accountants in our network hold relevant professional qualifications.'
                      },
                      {
                        q: 'How quickly will I receive quotes?',
                        a: `Most ${city.name} accountants in our network respond within 24 hours. You\'ll typically receive 2-4 quotes from qualified local accountants.`
                      },
                    ].map((faq, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-navy-900 mb-2">{faq.q}</h3>
                        <p className="text-navy-600 text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar with Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <LeadForm cityName={city.name} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif font-bold text-navy-900 mb-8">
                Also Find Accountants Near {city.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nearbyCities.map(nearbyCity => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/${nearbyCity.slug}`}
                    className="group p-4 rounded-xl border-2 border-navy-100 hover:border-gold-400 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {nearbyCity.name}
                    </h3>
                    <p className="text-sm text-navy-500">{nearbyCity.region}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More Locations */}
        <section className="py-16 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-8">
              More {city.country} Locations
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {countryCities.map(countryCity => (
                <Link
                  key={countryCity.slug}
                  href={`/${countryCity.slug}`}
                  className="text-sm text-navy-600 hover:text-gold-600 transition-colors"
                >
                  {countryCity.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-bg relative">
          <div className="absolute inset-0 bg-navy-900/90" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Ready to Find Your {city.name} Accountant?
            </h2>
            <p className="text-xl text-navy-200 mb-8">
              Get free, no-obligation quotes from trusted local accountants today.
            </p>
            <a href="#quote-form" className="btn-primary text-lg px-10 py-4">
              Get Your Free Quotes
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
