import React from 'react';
import { Clock, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TrainingModule } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import Button from './Button';

interface TrainingCardProps {
  training: TrainingModule;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ training }) => {
  const { language } = useLanguage();

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'beginner':
        return (
          <span className="flex items-center text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full">
            <Award className="h-3 w-3 mr-1" />
            {language === 'fr' ? 'Débutant' : 'Beginner'}
          </span>
        );
      case 'intermediate':
        return (
          <span className="flex items-center text-xs px-2 py-1 bg-benin-yellow-100 dark:bg-benin-yellow-900 text-benin-yellow-800 dark:text-benin-yellow-300 rounded-full">
            <Award className="h-3 w-3 mr-1" />
            {language === 'fr' ? 'Intermédiaire' : 'Intermediate'}
          </span>
        );
      case 'advanced':
        return (
          <span className="flex items-center text-xs px-2 py-1 bg-benin-red-100 dark:bg-benin-red-900 text-benin-red-800 dark:text-benin-red-300 rounded-full">
            <Award className="h-3 w-3 mr-1" />
            {language === 'fr' ? 'Avancé' : 'Advanced'}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={training.image}
          alt={training.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          {getLevelBadge(training.level)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {training.title[language]}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {training.description[language]}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{training.duration}</span>
        </div>
        
        <Link to={`/training/${training.id}`}>
          <Button 
            variant="primary" 
            className="w-full"
            icon={<BookOpen className="h-4 w-4" />}
          >
            {language === 'fr' ? 'Commencer la formation' : 'Start Training'}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;