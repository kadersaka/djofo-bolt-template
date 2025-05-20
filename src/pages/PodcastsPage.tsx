import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ContentCard from '../components/common/ContentCard';
import { contentItems } from '../data/content';

const PodcastsPage: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const podcasts = contentItems.filter(
    (item) => item.category === 'podcast' &&
    (searchQuery === '' || 
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description[language].toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'fr' ? 'Podcasts' : 'Podcasts'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            {language === 'fr' 
              ? 'Écoutez nos podcasts sur la sécurité numérique et restez informé des dernières menaces en ligne.'
              : 'Listen to our digital security podcasts and stay informed about the latest online threats.'}
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder={language === 'fr' ? "Rechercher des podcasts..." : "Search podcasts..."}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-benin-green-500 dark:bg-gray-800 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Podcasts Grid */}
        {podcasts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast) => (
              <ContentCard key={podcast.id} content={podcast} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {language === 'fr' 
                ? 'Aucun podcast ne correspond à votre recherche.' 
                : 'No podcasts match your search.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastsPage;