export type LanguageType = 'fr' | 'en';

export interface NavItem {
  title: {
    fr: string;
    en: string;
  };
  path: string;
  icon?: string;
}

export interface ContentItem {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  date: string;
  image: string;
  category: 'blog' | 'podcast' | 'video' | 'animation';
  tags: string[];
}

export interface TrainingModule {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
}

export interface Investigation {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  date: string;
  image: string;
  status: 'ongoing' | 'completed';
}