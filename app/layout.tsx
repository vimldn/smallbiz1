import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find Small Business Accountants Near You | UK Accountant Directory",
  description: "Connect with trusted small business accountants across the UK. Get free quotes from local accounting firms specializing in small business tax, bookkeeping, and financial services.",
  keywords: "small business accountant, accountant near me, UK accountants, bookkeeping services, tax accountant, business accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-navy-50 text-navy-900">
        {children}
      </body>
    </html>
  );
}
