export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  date: string;
  location: string;
  description: string;
  participants: number;
  objectives?: string[];
  recommendations?: string[];
  image?: string;
}

export type ProjectCategory =
  | 'Sensibilisation'
  | 'Formation'
  | 'Distribution'
  | 'Organisation';

export interface ContactInfo {
  address: {
    country: string;
    city: string;
    commune: string;
    quartier: string;
  };
  phones: string[];
  email: string;
  socialMedia: {
    facebook?: string;
  };
  hours?: string;
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface DonationMethod {
  id: string;
  type: 'bank' | 'mobile' | 'other';
  title: string;
  description: string;
  details: Record<string, string>;
}
