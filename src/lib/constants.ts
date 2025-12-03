import type {
  Project,
  ContactInfo,
  Statistic,
  NavLink,
  FocusArea,
  Value,
  DonationMethod,
} from './types';

// Navigation Links
export const navLinks: NavLink[] = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/projets', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
];

// Contact Information
export const contactInfo: ContactInfo = {
  address: {
    country: 'République de Guinée',
    city: 'Conakry',
    commune: 'Commune de Ratoma',
    quartier: 'Nongo Kiroty',
  },
  phones: ['(+224) 628 48 47 84', '(+224) 628 90 59 59'],
  email: 'apecguinee2023@gmail.com',
  socialMedia: {
    facebook: 'https://facebook.com/apecguinee',
  },
  hours: 'Lun - Ven: 8h00 - 17h00',
};

// Statistics
export const statistics: Statistic[] = [
  {
    value: '150+',
    label: 'Participants aux projets 2023',
    description:
      'Plus de 150 personnes ont bénéficié de nos programmes de sensibilisation et formation en 2023',
  },
  {
    value: '14',
    label: 'Pays de présence',
    description:
      'APEC International est présent dans 14 pays à travers l\'Afrique et au-delà',
  },
  {
    value: '6',
    label: 'Projets réalisés',
    description:
      'Six projets majeurs de sensibilisation et formation réalisés en 2023',
  },
];

// Projects from 2023 Report
export const projects: Project[] = [
  {
    id: 'securite-routiere-yimbaya',
    title: 'Sensibilisation sur la Sécurité Routière - Yimbaya',
    category: 'Sensibilisation',
    date: '29 mai 2023',
    location: 'Gare Routière de Yimbaya, Commune de Matoto',
    description:
      'Session de sensibilisation sur les dangers de la route et les comportements à adopter pour garantir la sécurité de tous les usagers de la route.',
    participants: 21,
    objectives: [
      'Sensibiliser sur les dangers de la route',
      'Promouvoir les comportements sécuritaires',
      'Réduire les accidents de la circulation',
    ],
    recommendations: [
      'Intensifier les campagnes de sensibilisation',
      'Impliquer davantage les autorités locales',
    ],
  },
  {
    id: 'droits-enfants-kiroty',
    title: 'Droits et Devoirs des Enfants - Kiroty',
    category: 'Sensibilisation',
    date: '3 juin 2023',
    location: 'Lycée Madjid de Kiroty, Commune de Ratoma',
    description:
      'Sensibilisation des jeunes lycéens sur leurs droits fondamentaux et leurs devoirs envers la société, dans le cadre de l\'éducation citoyenne.',
    participants: 30,
    objectives: [
      'Éduquer les jeunes sur leurs droits',
      'Promouvoir la citoyenneté responsable',
      'Encourager la participation citoyenne',
    ],
  },
  {
    id: 'insertion-socioprofessionnelle-nongo',
    title: 'Insertion Socioprofessionnelle des Jeunes - Nongo',
    category: 'Sensibilisation',
    date: '4 juin 2023',
    location: 'Bordures de mer de Nongo, Commune de Ratoma',
    description:
      'Programme d\'orientation et de sensibilisation pour l\'insertion socioprofessionnelle des jeunes, axé sur l\'entrepreneuriat et les opportunités d\'emploi.',
    participants: 18,
    objectives: [
      'Orienter les jeunes vers l\'emploi',
      'Promouvoir l\'entrepreneuriat',
      'Développer les compétences professionnelles',
    ],
  },
  {
    id: 'securite-routiere-bambeto',
    title: 'Sensibilisation sur la Sécurité Routière - Bambeto',
    category: 'Sensibilisation',
    date: '10 juin 2023',
    location: 'Gare routière de Bambeto, Commune de Ratoma',
    description:
      'Campagne de sensibilisation intensive sur les règles de circulation et la prévention des accidents de la route dans une des gares routières les plus fréquentées.',
    participants: 29,
    objectives: [
      'Renforcer la culture de sécurité routière',
      'Sensibiliser conducteurs et passagers',
      'Prévenir les accidents',
    ],
  },
  {
    id: 'securite-routiere-matam',
    title: 'Sensibilisation sur la Sécurité Routière - Matam',
    category: 'Sensibilisation',
    date: '15 juillet 2023',
    location: 'Gare routière de Matam, Commune de Matam',
    description:
      'Session de sensibilisation sur la sécurité routière auprès des usagers de la gare routière de Matam, incluant chauffeurs, passagers et commerçants.',
    participants: 30,
    objectives: [
      'Améliorer la sécurité dans les gares',
      'Éduquer sur le code de la route',
      'Réduire les comportements à risque',
    ],
  },
  {
    id: 'forum-russie-afrique',
    title: 'Participation au Forum Russie-Afrique',
    category: 'Organisation',
    date: 'Juillet 2023',
    location: 'Saint-Pétersbourg, Russie',
    description:
      'Participation et organisation du Forum Russie-Afrique en Guinée, renforçant la coopération internationale et les échanges culturels et économiques.',
    participants: 0,
    objectives: [
      'Renforcer la coopération internationale',
      'Promouvoir les échanges culturels',
      'Développer les partenariats économiques',
    ],
  },
];

// Focus Areas
export const focusAreas: FocusArea[] = [
  {
    id: 'democratie',
    title: 'Promotion de la Démocratie',
    description:
      'Nous œuvrons pour la promotion de la démocratie et de la bonne gouvernance en encourageant la participation citoyenne et le respect des institutions démocratiques.',
    icon: '⚖️',
  },
  {
    id: 'conflits',
    title: 'Gestion des Conflits',
    description:
      'Nous intervenons dans la prévention et la résolution des conflits par le dialogue, la médiation et la promotion d\'une culture de paix.',
    icon: '🤝',
  },
  {
    id: 'environnement',
    title: 'Protection de l\'Environnement',
    description:
      'Nous sensibilisons et formons les communautés sur la préservation de l\'environnement et le développement durable.',
    icon: '🌱',
  },
  {
    id: 'education',
    title: 'Éducation Citoyenne',
    description:
      'Nous équipons les individus avec les connaissances et compétences nécessaires pour devenir des citoyens responsables et actifs.',
    icon: '📚',
  },
];

// Organization Values
export const organizationValues: Value[] = [
  {
    id: 'respect',
    title: 'Respect de l\'individu',
    description:
      'Nous croyons en la dignité inhérente à chaque personne et nous nous engageons à traiter tous les individus avec respect, équité et compassion.',
  },
  {
    id: 'solidarite',
    title: 'Solidarité et esprit d\'équipe',
    description:
      'Nous valorisons la collaboration, l\'entraide et la force du collectif pour atteindre nos objectifs communs.',
  },
  {
    id: 'transparence',
    title: 'Efficacité et Transparence',
    description:
      'Nous nous engageons à une gestion rigoureuse et transparente de nos ressources, en veillant à maximiser l\'impact de chaque action.',
  },
];

// Donation Methods
export const donationMethods: DonationMethod[] = [
  {
    id: 'bank',
    type: 'bank',
    title: 'Virement Bancaire',
    description: 'Effectuez un virement bancaire sécurisé',
    details: {
      banque: '[À compléter]',
      compte: '[À compléter]',
      rib: '[À compléter]',
      titulaire: 'APEC International',
      reference: 'Don APEC',
    },
  },
  {
    id: 'orange-money',
    type: 'mobile',
    title: 'Orange Money',
    description: 'Envoyez votre don via Orange Money',
    details: {
      numero1: '(+224) 628 48 47 84',
      numero2: '(+224) 628 90 59 59',
      nom: 'APEC International',
      reference: 'Don APEC',
    },
  },
  {
    id: 'other',
    type: 'other',
    title: 'Autres Méthodes',
    description:
      'Pour d\'autres méthodes de don ou don international, contactez-nous',
    details: {
      action: 'Contactez-nous pour plus d\'options',
    },
  },
];

// Form subject options
export const contactSubjects = [
  { value: 'partenariat', label: 'Partenariat' },
  { value: 'don', label: 'Don' },
  { value: 'benevolat', label: 'Bénévolat' },
  { value: 'question', label: 'Question Générale' },
  { value: 'autre', label: 'Autre' },
];
