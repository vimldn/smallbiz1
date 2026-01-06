# SmallBiz Accountants - UK Lead Generation Site

A programmatic SEO lead generation website for small business accountants across the UK. Built with Next.js 14, Tailwind CSS, and optimized for Vercel deployment.

## Features

- **200+ Location Pages**: Programmatically generated pages for every major UK city and town
- **SEO Optimized**: Dynamic meta tags, sitemap, and structured content for each location
- **Lead Capture Form**: Conversion-optimized form with service selection
- **Responsive Design**: Mobile-first design with professional aesthetics
- **Fast Performance**: Static generation for optimal load times

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd accountant-leads

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build

## Customization

### Update Domain

Update the base URL in these files:
- `app/sitemap.ts`
- `app/robots.ts`

### Add More Cities

Edit `data/cities.ts` to add or modify locations.

### Connect Lead Form

The lead form in `components/LeadForm.tsx` currently logs to console. Connect it to your:
- Email service (SendGrid, Mailgun)
- CRM (HubSpot, Salesforce)
- Database (Supabase, Firebase)
- Webhook (Zapier, Make)

Example integration:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Send to your API endpoint
  await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...formData, city: cityName }),
  });
  
  setSubmitted(true);
};
```

## Project Structure

```
accountant-leads/
├── app/
│   ├── [city]/
│   │   └── page.tsx      # Dynamic city pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── not-found.tsx     # 404 page
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── LeadForm.tsx
├── data/
│   └── cities.ts         # All UK locations
└── public/
```

## SEO Notes

Each city page includes:
- Unique title and meta description
- Location-specific content
- Internal linking to nearby cities
- Structured FAQ section
- Clear call-to-action

## License

MIT
