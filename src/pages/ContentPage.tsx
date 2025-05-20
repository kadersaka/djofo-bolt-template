import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ContentCard from '../components/common/ContentCard';
import { contentItems } from '../data/content';

type ContentCategory = 'all' | 'blog' | 'podcast' | 'video' | 'animation';

const ContentPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ContentCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCategoryChange = (category: ContentCategory) => {
    setActiveCategory(category);
  };

  const filteredContent = contentItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.title.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('nav.content')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('app.description')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Rechercher du contenu..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-benin-green-500 dark:bg-gray-800 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400 hidden md:block" />
              
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === 'all'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors whitespace-nowrap`}
              >
                {t('content.filter.all')}
              </button>
              
              <button
                onClick={() => handleCategoryChange('blog')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === 'blog'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors whitespace-nowrap`}
              >
                {t('content.filter.blog')}
              </button>
              
              <button
                onClick={() => handleCategoryChange('podcast')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === 'podcast'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors whitespace-nowrap`}
              >
                {t('content.filter.podcast')}
              </button>
              
              <button
                onClick={() => handleCategoryChange('video')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === 'video'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors whitespace-nowrap`}
              >
                {t('content.filter.video')}
              </button>
              
              <button
                onClick={() => handleCategoryChange('animation')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === 'animation'
                    ? 'bg-benin-green-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors whitespace-nowrap`}
              >
                {t('content.filter.animation')}
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Aucun contenu ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;