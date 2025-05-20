import React from 'react';
import { ArrowRight, Shield, Book, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/common/Button';
import ContentCard from '../components/common/ContentCard';
import TrainingCard from '../components/common/TrainingCard';
import InvestigationCard from '../components/common/InvestigationCard';
import { contentItems } from '../data/content';
import { trainingModules } from '../data/training';
import { investigations } from '../data/investigations';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  // Get latest content (3 items)
  const latestContent = [...contentItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Get a few training modules (2 items)
  const featuredTraining = trainingModules.slice(0, 2);

  // Get latest investigation (1 item)
  const latestInvestigation = [...investigations]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-benin-green-700 via-benin-green-600 to-benin-green-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-2 bg-gradient-to-br from-benin-green-500 via-benin-yellow-500 to-benin-red-500 opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up">
              {t('home.hero.subtitle')}
            </p>
            <Link to="/content">
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight className="h-5 w-5" />}
                className="animate-slide-up"
              >
                {t('home.hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('home.features.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-benin-green-100 dark:bg-benin-green-900 p-3 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-benin-green-600 dark:text-benin-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {t('home.features.education.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.features.education.description')}
              </p>
            </div>
            
            {/* Investigations */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-benin-yellow-100 dark:bg-benin-yellow-900 p-3 rounded-full inline-block mb-4">
                <Activity className="h-8 w-8 text-benin-yellow-600 dark:text-benin-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {t('home.features.investigations.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.features.investigations.description')}
              </p>
            </div>
            
            {/* Community */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-benin-red-100 dark:bg-benin-red-900 p-3 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-benin-red-600 dark:text-benin-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {t('home.features.community.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.features.community.description')}
              </p>
            </div>
            
            {/* Training */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full inline-block mb-4">
                <Book className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {t('home.features.training.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.features.training.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('home.latestContent.title')}
            </h2>
            <Link 
              to="/content" 
              className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 flex items-center font-medium"
            >
              {t('home.latestContent.viewAll')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestContent.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('nav.training')}
            </h2>
            <Link 
              to="/training" 
              className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 flex items-center font-medium"
            >
              {t('home.latestContent.viewAll')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTraining.map((training) => (
              <TrainingCard key={training.id} training={training} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Investigation */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('nav.investigations')}
            </h2>
            <Link 
              to="/investigations" 
              className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 flex items-center font-medium"
            >
              {t('home.latestContent.viewAll')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="max-w-xl mx-auto">
            <InvestigationCard investigation={latestInvestigation} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;