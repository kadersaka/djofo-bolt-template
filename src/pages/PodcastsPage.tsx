import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ContentCard from '../components/common/ContentCard';
import { contentItems } from '../data/content';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2 } from 'lucide-react';

const PodcastsPage: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const podcasts = contentItems.filter(
    (item) => item.category === 'podcast' &&
    (searchQuery === '' || 
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description[language].toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // If we have an ID, show the detailed view
  if (id) {
    const podcast = podcasts.find(item => item.id === id);
    
    if (!podcast) {
      return (
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'fr' ? 'Podcast non trouvé' : 'Podcast not found'}
              </h1>
              <button
                onClick={() => navigate('/podcasts')}
                className="text-benin-green-600 hover:text-benin-green-700 flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'fr' ? 'Retour aux podcasts' : 'Back to podcasts'}
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
            onClick={() => navigate('/podcasts')}
            className="text-benin-green-600 hover:text-benin-green-700 flex items-center mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Retour aux podcasts' : 'Back to podcasts'}
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={podcast.image}
                alt={podcast.title[language]}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {podcast.title[language]}
                </h1>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {new Date(podcast.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 bg-benin-green-600 text-white rounded-full hover:bg-benin-green-700 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>

                    <div className="flex-1 mx-4">
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
                        <div className="h-2 bg-benin-green-600 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>10:30</span>
                        <span>35:00</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Volume2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <div className="w-20 h-2 bg-gray-300 dark:bg-gray-600 rounded-full ml-2">
                        <div className="h-2 bg-benin-green-600 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-xl font-semibold mb-4">
                    {language === 'fr' ? 'À propos de cet épisode' : 'About this episode'}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {podcast.description[language]}
                  </p>

                  <h2 className="text-xl font-semibold mb-4">
                    {language === 'fr' ? 'Points abordés' : 'Topics covered'}
                  </h2>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                    {podcast.tags.map((tag, index) => (
                      <li key={index} className="mb-2">{tag}</li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold mb-4">
                      {language === 'fr' ? 'Partagez cet épisode' : 'Share this episode'}
                    </h2>
                    <div className="flex space-x-4">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Facebook
                      </button>
                      <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors">
                        Twitter
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                        WhatsApp
                      </button>
                    </div>
                  </div>
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