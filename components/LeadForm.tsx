'use client';

import { useState } from 'react';

interface LeadFormProps {
  cityName?: string;
}

export default function LeadForm({ cityName }: LeadFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    employees: '',
    services: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Annual Accounts',
    'Tax Returns',
    'VAT Returns',
    'Bookkeeping',
    'Payroll',
    'Management Accounts',
    'Business Advisory',
    'Company Formation',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend/CRM
    console.log('Lead submitted:', { ...formData, city: cityName });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
          <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">Thank You!</h3>
        <p className="text-navy-600">
          We&apos;ve received your enquiry. Local accountants{cityName ? ` in ${cityName}` : ''} will be in touch within 24 hours with their quotes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8" id="quote-form">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">
          Get Free Quotes{cityName ? ` from ${cityName} Accountants` : ''}
        </h3>
        <p className="text-navy-600">
          Complete this form to receive up to 4 free quotes from trusted local accountants
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Business Name *
          </label>
          <input
            type="text"
            required
            className="input-field"
            placeholder="Your business name"
            value={formData.businessName}
            onChange={e => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            required
            className="input-field"
            placeholder="Your name"
            value={formData.contactName}
            onChange={e => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            className="input-field"
            placeholder="you@business.com"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            className="input-field"
            placeholder="07xxx xxxxxx"
            value={formData.phone}
            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Business Type *
          </label>
          <select
            required
            className="input-field"
            value={formData.businessType}
            onChange={e => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
          >
            <option value="">Select business type</option>
            <option value="sole-trader">Sole Trader</option>
            <option value="partnership">Partnership</option>
            <option value="limited-company">Limited Company</option>
            <option value="llp">LLP</option>
            <option value="startup">Startup / New Business</option>
            <option value="freelancer">Freelancer / Contractor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Number of Employees
          </label>
          <select
            className="input-field"
            value={formData.employees}
            onChange={e => setFormData(prev => ({ ...prev, employees: e.target.value }))}
          >
            <option value="">Select range</option>
            <option value="1">Just me</option>
            <option value="2-5">2-5</option>
            <option value="6-10">6-10</option>
            <option value="11-25">11-25</option>
            <option value="26-50">26-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-navy-700 mb-3">
          Services Required *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {serviceOptions.map(service => (
            <label
              key={service}
              className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                formData.services.includes(service)
                  ? 'border-gold-400 bg-gold-50'
                  : 'border-navy-200 hover:border-navy-300'
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceToggle(service)}
              />
              <span className={`text-sm ${
                formData.services.includes(service) ? 'text-navy-900 font-medium' : 'text-navy-600'
              }`}>
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-navy-700 mb-2">
          Additional Information
        </label>
        <textarea
          rows={3}
          className="input-field"
          placeholder="Tell us more about your accounting needs..."
          value={formData.message}
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>

      <div className="mt-8">
        <button type="submit" className="btn-primary w-full text-lg py-4 animate-pulse-gold">
          Get My Free Quotes
        </button>
        <p className="text-center text-sm text-navy-500 mt-3">
          ✓ 100% Free &nbsp; ✓ No Obligation &nbsp; ✓ Up to 4 Quotes
        </p>
      </div>
    </form>
  );
}
