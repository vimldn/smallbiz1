import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import { cities } from '@/data/cities';

export default function Home() {
  const featuredCities = [
    'london', 'birmingham', 'manchester', 'leeds', 'glasgow', 'liverpool',
    'edinburgh', 'bristol', 'sheffield', 'cardiff', 'belfast', 'nottingham'
  ];

  const featured = cities.filter(c => featuredCities.includes(c.slug));

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="gradient-bg pattern-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 to-navy-800/90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 text-balance">
                  Find Trusted <span className="text-gold-400">Small Business Accountants</span> Near You
                </h1>
                <p className="text-xl text-navy-200 mb-8 max-w-xl mx-auto lg:mx-0">
                  Connect with experienced local accountants who understand the unique needs of small businesses across the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#quote-form" className="btn-primary text-lg px-8 py-4">
                    Get Free Quotes Today
                  </a>
                  <a href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
                    How It Works
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-navy-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>UK Wide</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold-400/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4">
                        <div className="text-4xl font-bold text-gold-400 mb-2">2,500+</div>
                        <div className="text-navy-200 text-sm">Verified Accountants</div>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-4xl font-bold text-gold-400 mb-2">200+</div>
                        <div className="text-navy-200 text-sm">UK Locations</div>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-4xl font-bold text-gold-400 mb-2">50k+</div>
                        <div className="text-navy-200 text-sm">Businesses Helped</div>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-4xl font-bold text-gold-400 mb-2">4.8★</div>
                        <div className="text-navy-200 text-sm">Average Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading mb-4">Accounting Services for Small Businesses</h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Our network of accountants offer comprehensive services tailored to small business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  ),
                  title: 'Annual Accounts',
                  description: 'Year-end accounts preparation and filing with Companies House and HMRC.'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                  title: 'Tax Returns',
                  description: 'Corporation tax, self-assessment, and tax planning to minimise your liability.'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  ),
                  title: 'Bookkeeping',
                  description: 'Day-to-day financial record keeping using modern cloud accounting software.'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  ),
                  title: 'Payroll Services',
                  description: 'PAYE management, RTI submissions, pension auto-enrolment compliance.'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  ),
                  title: 'VAT Returns',
                  description: 'MTD compliant VAT submissions, registration advice, and scheme selection.'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  ),
                  title: 'Management Accounts',
                  description: 'Monthly or quarterly reports to help you understand your business performance.'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  ),
                  title: 'Company Formation',
                  description: 'Help setting up your limited company with all necessary registrations.'
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  ),
                  title: 'Business Advisory',
                  description: 'Strategic advice on growth, funding, cash flow, and business planning.'
                },
              ].map((service, index) => (
                <div key={index} className="group p-6 rounded-2xl border-2 border-navy-100 hover:border-gold-400 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-navy-100 group-hover:bg-gold-400 flex items-center justify-center mb-4 transition-colors">
                    <svg className="w-7 h-7 text-navy-600 group-hover:text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-navy-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading mb-4">How It Works</h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Get matched with the right accountant in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Tell Us Your Needs',
                  description: 'Complete our simple form with details about your business and the services you need.'
                },
                {
                  step: '02',
                  title: 'Get Matched',
                  description: 'We connect you with up to 4 qualified accountants in your area who specialise in your requirements.'
                },
                {
                  step: '03',
                  title: 'Compare & Choose',
                  description: 'Review quotes, compare services, and choose the accountant that\'s right for your business.'
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="card p-8 h-full">
                    <div className="text-6xl font-serif font-bold text-gold-400/30 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                    <p className="text-navy-600">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20 gradient-bg pattern-bg relative">
          <div className="absolute inset-0 bg-navy-900/95" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm />
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading mb-4">Find Accountants Across the UK</h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                We have trusted accountants in over 200 locations throughout the UK
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {featured.map(city => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="group p-4 rounded-xl border-2 border-navy-100 hover:border-gold-400 hover:shadow-lg transition-all text-center"
                >
                  <h3 className="font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-navy-500">{city.country}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <p className="text-navy-600 mb-4">
                Don&apos;t see your location? We cover all of the UK.
              </p>
              <a href="#quote-form" className="btn-secondary">
                Request a Quote for Your Area
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { stat: '2,500+', label: 'Qualified Accountants' },
                { stat: '50,000+', label: 'Businesses Helped' },
                { stat: '200+', label: 'UK Locations' },
                { stat: '4.8/5', label: 'Average Rating' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="text-4xl font-serif font-bold text-gold-500 mb-2">{item.stat}</div>
                  <div className="text-navy-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
