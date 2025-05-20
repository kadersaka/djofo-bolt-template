import React from 'react';
import { Users, MessageCircle, Share2, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/common/Button';

const CommunityPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'fr' 
              ? 'Rejoignez notre communauté'
              : 'Join our community'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Ensemble, créons un environnement numérique plus sûr pour tous au Bénin.'
              : "Together, let's create a safer digital environment for everyone in Benin."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Connect */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="bg-benin-green-100 dark:bg-benin-green-900 p-3 rounded-full inline-block mb-4">
              <Users className="h-6 w-6 text-benin-green-600 dark:text-benin-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {language === 'fr' ? 'Connectez-vous' : 'Connect'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? 'Rencontrez d\'autres personnes partageant les mêmes idées et échangez des expériences.'
                : 'Meet like-minded people and share experiences.'}
            </p>
          </div>

          {/* Share */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="bg-benin-yellow-100 dark:bg-benin-yellow-900 p-3 rounded-full inline-block mb-4">
              <Share2 className="h-6 w-6 text-benin-yellow-600 dark:text-benin-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {language === 'fr' ? 'Partagez' : 'Share'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? 'Partagez vos connaissances et apprenez des expériences des autres.'
                : 'Share your knowledge and learn from others\' experiences.'}
            </p>
          </div>

          {/* Protect */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="bg-benin-red-100 dark:bg-benin-red-900 p-3 rounded-full inline-block mb-4">
              <Shield className="h-6 w-6 text-benin-red-600 dark:text-benin-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {language === 'fr' ? 'Protégez' : 'Protect'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? 'Contribuez à la protection de notre communauté contre les menaces en ligne.'
                : 'Help protect our community against online threats.'}
            </p>
          </div>
        </div>

        {/* Discussion Forum */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center mb-6">
            <MessageCircle className="h-8 w-8 text-benin-green-600 dark:text-benin-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'fr' ? 'Forum de discussion' : 'Discussion Forum'}
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {language === 'fr'
              ? 'Participez à des discussions enrichissantes sur la sécurité numérique, partagez vos expériences et posez vos questions.'
              : 'Engage in meaningful discussions about digital security, share your experiences, and ask questions.'}
          </p>

          <Button
            variant="primary"
            size="lg"
            className="w-full md:w-auto"
          >
            {language === 'fr' ? 'Accéder au forum' : 'Access Forum'}
          </Button>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Règles de la communauté' : 'Community Guidelines'}
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? '• Respectez tous les membres de la communauté'
                : '• Respect all community members'}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? '• Partagez des informations vérifiées'
                : '• Share verified information'}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? '• Signalez tout comportement suspect'
                : '• Report any suspicious behavior'}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'fr'
                ? '• Contribuez à maintenir un environnement sain'
                : '• Help maintain a healthy environment'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;