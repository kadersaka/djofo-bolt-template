import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface ContentCardProps {
  content: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const { language } = useLanguage();
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blog':
        return <span className="text-xs px-2 py-1 bg-benin-green-100 dark:bg-benin-green-900 text-benin-green-800 dark:text-benin-green-300 rounded-full">Blog</span>;
      case 'podcast':
        return <span className="text-xs px-2 py-1 bg-benin-yellow-100 dark:bg-benin-yellow-900 text-benin-yellow-800 dark:text-benin-yellow-300 rounded-full">Podcast</span>;
      case 'video':
        return <span className="text-xs px-2 py-1 bg-benin-red-100 dark:bg-benin-red-900 text-benin-red-800 dark:text-benin-red-300 rounded-full">Vidéo</span>;
      case 'animation':
        return <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full">Animation</span>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={content.image}
          alt={content.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          {getCategoryIcon(content.category)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {content.title[language]}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {content.description[language]}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(content.date)}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {content.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full flex items-center"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/${content.category}/${content.id}`}
          className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 font-medium transition-colors"
        >
          {language === 'fr' ? 'Lire la suite' : 'Read more'} →
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;