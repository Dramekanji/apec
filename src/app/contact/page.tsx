import React from 'react';
import type { Metadata } from 'next';
import { ContactHero, ContactForm, ContactMap } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contact - APEC International',
  description:
    'Contactez APEC International pour toute question, partenariat ou opportunité de bénévolat. Nous sommes basés à Kiroty, Nongo, Conakry, Guinée.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  );
}
