import React from 'react';
import { Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Investigation } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface InvestigationCardProps {
  investigation: Investigation;
}

const InvestigationCard: React.FC<InvestigationCardProps> = ({ investigation }) => {
  const { language } = useLanguage();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getStatusBadge = (status: string) => {
    if (status === 'ongoing') {
      return (
        <span className="flex items-center text-xs px-2 py-1 bg-benin-yellow-100 dark:bg-benin-yellow-900 text-benin-yellow-800 dark:text-benin-yellow-300 rounded-full">
          <AlertTriangle className="h-3 w-3 mr-1" />
          {language === 'fr' ? 'En cours' : 'Ongoing'}
        </span>
      );
    } else {
      return (
        <span className="flex items-center text-xs px-2 py-1 bg-benin-green-100 dark:bg-benin-green-900 text-benin-green-800 dark:text-benin-green-300 rounded-full">
          <CheckCircle className="h-3 w-3 mr-1" />
          {language === 'fr' ? 'Terminée' : 'Completed'}
        </span>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={investigation.image}
          alt={investigation.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          {getStatusBadge(investigation.status)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {investigation.title[language]}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {investigation.description[language]}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(investigation.date)}</span>
        </div>
        
        <Link 
          to={`/investigations/${investigation.id}`}
          className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 font-medium transition-colors"
        >
          {language === 'fr' ? 'Voir les détails' : 'View details'} →
        </Link>
      </div>
    </div>
  );
};

export default InvestigationCard;