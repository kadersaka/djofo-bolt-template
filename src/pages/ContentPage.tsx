import React, { useState } from 'react';
import { Filter, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ContentCard from '../components/common/ContentCard';
import { contentItems } from '../data/content';
import { useParams, useNavigate } from 'react-router-dom';

type ContentCategory = 'all' | 'blog' | 'podcast' | 'video' | 'animation';

const ContentPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ContentCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { id } = useParams();
  const navigate = useNavigate();

  // If we have an ID, show the detailed view
  if (id) {
    const content = contentItems.find(item => item.id === id);
    
    if (!content) {
      return (
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'fr' ? 'Contenu non trouvé' : 'Content not found'}
              </h1>
              <button
                onClick={() => navigate('/content')}
                className="text-benin-green-600 hover:text-benin-green-700 flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'fr' ? 'Retour aux contenus' : 'Back to content'}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/content')}
            className="text-benin-green-600 hover:text-benin-green-700 flex items-center mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Retour aux contenus' : 'Back to content'}
          </button>

          <div className="max-w-4xl mx-auto">
            <img
              src={content.image}
              alt={content.title[language]}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="prose dark:prose-invert max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {content.title[language]}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {content.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-gray-600 dark:text-gray-400 mb-8">
                {new Date(content.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>

              <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
                <p className="mb-6">{content.description[language]}</p>
                
                {/* Example content - you would replace this with actual content */}
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'fr' ? 'Introduction' : 'Introduction'}
                </h2>
                <p className="mb-6">
                  {language === 'fr'
                    ? 'La sécurité numérique est devenue une préoccupation majeure dans notre société connectée. Avec l\'augmentation des menaces en ligne, il est crucial de comprendre comment se protéger efficacement.'
                    : 'Digital security has become a major concern in our connected society. With the increase in online threats, it is crucial to understand how to protect ourselves effectively.'}
                </p>

                <h2 className="text-2xl font-bold mb-4">
                  {language === 'fr' ? 'Points clés' : 'Key Points'}
                </h2>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    {language === 'fr'
                      ? 'Identification des risques potentiels'
                      : 'Identification of potential risks'}
                  </li>
                  <li className="mb-2">
                    {language === 'fr'
                      ? 'Mesures de protection essentielles'
                      : 'Essential protection measures'}
                  </li>
                  <li className="mb-2">
                    {language === 'fr'
                      ? 'Bonnes pratiques à adopter'
                      : 'Best practices to adopt'}
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">
                  {language === 'fr' ? 'Conclusion' : 'Conclusion'}
                </h2>
                <p>
                  {language === 'fr'
                    ? 'La vigilance et l\'éducation sont nos meilleures défenses contre les menaces numériques. Continuez à vous informer et à partager ces connaissances avec votre entourage.'
                    : 'Vigilance and education are our best defenses against digital threats. Continue to stay informed and share this knowledge with those around you.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleCategoryChange = (category: ContentCategory) => {
    setActiveCategory(category);
  };

  const filteredContent = contentItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                placeholder={language === 'fr' ? "Rechercher du contenu..." : "Search content..."}
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
              {language === 'fr' 
                ? 'Aucun contenu ne correspond à votre recherche.'
                : 'No content matches your search.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;