import { TrainingModule } from '../types';

export const trainingModules: TrainingModule[] = [
  {
    id: 'internet-basics',
    title: {
      fr: 'Les bases d\'Internet en toute sécurité',
      en: 'Internet basics safely',
    },
    description: {
      fr: 'Apprenez les fondamentaux de l\'utilisation d\'Internet de manière sécurisée, y compris la navigation web, l\'utilisation des emails et la création de mots de passe forts.',
      en: 'Learn the fundamentals of using the Internet safely, including web browsing, using email, and creating strong passwords.',
    },
    duration: '2h',
    level: 'beginner',
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
  },
  {
    id: 'social-media-security',
    title: {
      fr: 'Sécurité sur les réseaux sociaux',
      en: 'Social media security',
    },
    description: {
      fr: 'Découvrez comment utiliser les réseaux sociaux en toute sécurité, protéger votre vie privée et éviter les arnaques courantes sur les plateformes sociales.',
      en: 'Learn how to use social media safely, protect your privacy, and avoid common scams on social platforms.',
    },
    duration: '3h',
    level: 'beginner',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
  },
  {
    id: 'mobile-security',
    title: {
      fr: 'Sécurité des appareils mobiles',
      en: 'Mobile device security',
    },
    description: {
      fr: 'Protégez votre smartphone et tablette contre les menaces, sécurisez vos applications et apprenez à utiliser les services financiers mobiles en toute sécurité.',
      en: 'Protect your smartphone and tablet against threats, secure your applications, and learn to use mobile financial services safely.',
    },
    duration: '2h 30min',
    level: 'intermediate',
    image: 'https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg',
  },
  {
    id: 'phishing-defense',
    title: {
      fr: 'Défense contre le phishing',
      en: 'Phishing defense',
    },
    description: {
      fr: 'Formation avancée pour reconnaître et éviter les tentatives de phishing sophistiquées, y compris des exercices pratiques et des études de cas réels.',
      en: 'Advanced training to recognize and avoid sophisticated phishing attempts, including practical exercises and real case studies.',
    },
    duration: '4h',
    level: 'intermediate',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
  },
  {
    id: 'small-business-security',
    title: {
      fr: 'Cybersécurité pour les petites entreprises',
      en: 'Cybersecurity for small businesses',
    },
    description: {
      fr: 'Protégez votre petite entreprise contre les cybermenaces avec des stratégies adaptées aux ressources limitées et aux besoins spécifiques des PME.',
      en: 'Protect your small business against cyber threats with strategies adapted to limited resources and the specific needs of SMEs.',
    },
    duration: '5h',
    level: 'advanced',
    image: 'https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg',
  },
  {
    id: 'safe-online-transactions',
    title: {
      fr: 'Transactions en ligne sécurisées',
      en: 'Secure online transactions',
    },
    description: {
      fr: 'Apprenez à effectuer des achats, des paiements et des transactions bancaires en ligne en toute sécurité, en évitant les fraudes financières.',
      en: 'Learn to make online purchases, payments, and banking transactions safely, avoiding financial fraud.',
    },
    duration: '3h',
    level: 'intermediate',
    image: 'https://images.pexels.com/photos/6214487/pexels-photo-6214487.jpeg',
  }
];