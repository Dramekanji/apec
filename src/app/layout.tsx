import type { Metadata } from 'next';
import { Poppins, Fraunces } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '@/components/layout';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const fraunces = Fraunces({
  weight: ['400', '500'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'APEC International - Action Pour l\'Education Citoyenne',
  description:
    'APEC International œuvre pour la promotion de la démocratie, la gestion des conflits, la protection de l\'environnement et l\'éducation citoyenne en Guinée et en Afrique.',
  keywords: [
    'APEC',
    'Action Pour l\'Education Citoyenne',
    'ONG Guinée',
    'démocratie',
    'citoyenneté',
    'sécurité routière',
    'éducation',
  ],
  authors: [{ name: 'APEC International' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'APEC International',
    title: 'APEC International - Action Pour l\'Education Citoyenne',
    description:
      'APEC International œuvre pour la promotion de la démocratie, la gestion des conflits, la protection de l\'environnement et l\'éducation citoyenne.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
