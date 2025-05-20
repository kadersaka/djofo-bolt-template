import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TrainingCard from '../components/common/TrainingCard';
import { trainingModules } from '../data/training';

type TrainingLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';

const TrainingPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<TrainingLevel>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleLevelChange = (level: TrainingLevel) => {
    setActiveLevel(level);
  };

  const filteredTraining = trainingModules.filter((item) => {
    const matchesLevel = activeLevel === 'all' || item.level === activeLevel;
    const matchesSearch = 
      item.title.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.en.toLowerCase().includes(searchQuery.toLowerCase());
      
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('nav.training')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            {language === 'fr' 
              ? 'Améliorez vos compétences en cybersécurité grâce à nos modules de formation interactifs, conçus pour tous les niveaux.'
              : 'Improve your cybersecurity skills with our interactive training modules, designed for all levels.'}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="w-full md:w-1/3 relative">
              <input
                type="text"
                placeholder={language === 'fr' ? "Rechercher des formations..." : "Search training..."}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-benin-green-500 dark:bg-gray-800 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="h-5 w-5 text-gray-500 absolute left-3 top-2.5" />
            </div>
            
            {/* Level Filters */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 hidden md:block" />
              
              <button
                onClick={() => handleLevelChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeLevel === 'all'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors`}
              >
                {language === 'fr' ? 'Tous niveaux' : 'All levels'}
              </button>
              
              <button
                onClick={() => handleLevelChange('beginner')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeLevel === 'beginner'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors`}
              >
                {language === 'fr' ? 'Débutant' : 'Beginner'}
              </button>
              
              <button
                onClick={() => handleLevelChange('intermediate')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeLevel === 'intermediate'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors`}
              >
                {language === 'fr' ? 'Intermédiaire' : 'Intermediate'}
              </button>
              
              <button
                onClick={() => handleLevelChange('advanced')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeLevel === 'advanced'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors`}
              >
                {language === 'fr' ? 'Avancé' : 'Advanced'}
              </button>
            </div>
          </div>
        </div>

        {/* Training Grid */}
        {filteredTraining.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTraining.map((training) => (
              <TrainingCard key={training.id} training={training} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {language === 'fr' 
                ? 'Aucune formation ne correspond à votre recherche.' 
                : 'No training matches your search.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingPage;