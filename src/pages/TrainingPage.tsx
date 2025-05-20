import React, { useState } from 'react';
import { Filter, Search, ArrowLeft, BookOpen, Clock, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TrainingCard from '../components/common/TrainingCard';
import { trainingModules } from '../data/training';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

type TrainingLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';

const TrainingPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<TrainingLevel>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentModule, setCurrentModule] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

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

  // If we have an ID, show the detailed view
  if (id) {
    const training = trainingModules.find(item => item.id === id);
    
    if (!training) {
      return (
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'fr' ? 'Formation non trouvée' : 'Training not found'}
              </h1>
              <button
                onClick={() => navigate('/training')}
                className="text-benin-green-600 hover:text-benin-green-700 flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'fr' ? 'Retour aux formations' : 'Back to training'}
              </button>
            </div>
          </div>
        </div>
      );
    }

    const modules = [
      {
        title: { fr: 'Introduction', en: 'Introduction' },
        duration: '15min',
        completed: true
      },
      {
        title: { fr: 'Concepts de base', en: 'Basic concepts' },
        duration: '30min',
        completed: true
      },
      {
        title: { fr: 'Pratiques avancées', en: 'Advanced practices' },
        duration: '45min',
        completed: false
      },
      {
        title: { fr: 'Exercices pratiques', en: 'Practical exercises' },
        duration: '1h',
        completed: false
      }
    ];

    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/training')}
            className="text-benin-green-600 hover:text-benin-green-700 flex items-center mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Retour aux formations' : 'Back to training'}
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={training.image}
                alt={training.title[language]}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {training.title[language]}
                  </h1>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    training.level === 'beginner'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : training.level === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    <Award className="h-4 w-4 inline-block mr-1" />
                    {training.level === 'beginner'
                      ? language === 'fr' ? 'Débutant' : 'Beginner'
                      : training.level === 'intermediate'
                      ? language === 'fr' ? 'Intermédiaire' : 'Intermediate'
                      : language === 'fr' ? 'Avancé' : 'Advanced'}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{training.duration}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  {training.description[language]}
                </p>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {language === 'fr' ? 'Modules de formation' : 'Training modules'}
                  </h2>
                  <div className="space-y-4">
                    {modules.map((module, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          currentModule === index
                            ? 'border-benin-green-500 bg-benin-green-50 dark:bg-benin-green-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {module.completed ? (
                              <CheckCircle className="h-5 w-5 text-benin-green-500 mr-3" />
                            ) : (
                              <div className="h-5 w-5 border-2 border-gray-300 dark:border-gray-600 rounded-full mr-3" />
                            )}
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white">
                                {module.title[language]}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {module.duration}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant={currentModule === index ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => setCurrentModule(index)}
                          >
                            {currentModule === index
                              ? language === 'fr' ? 'En cours' : 'Current'
                              : language === 'fr' ? 'Commencer' : 'Start'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {language === 'fr' ? 'Objectifs d\'apprentissage' : 'Learning objectives'}
                  </h2>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-benin-green-500 mr-3" />
                      {language === 'fr'
                        ? 'Comprendre les principes fondamentaux de la sécurité numérique'
                        : 'Understand the fundamental principles of digital security'}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-benin-green-500 mr-3" />
                      {language === 'fr'
                        ? 'Identifier et éviter les menaces courantes'
                        : 'Identify and avoid common threats'}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-benin-green-500 mr-3" />
                      {language === 'fr'
                        ? 'Mettre en place des mesures de protection efficaces'
                        : 'Implement effective protection measures'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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