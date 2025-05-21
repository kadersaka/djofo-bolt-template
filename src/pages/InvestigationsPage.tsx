import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import InvestigationCard from '../components/common/InvestigationCard';
import { investigations } from '../data/investigations';
import { AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const InvestigationsPage: React.FC = () => {
  const { language } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();

  // If we have an ID, show the detailed view
  if (id) {
    const investigation = investigations.find(item => item.id === id);
    
    if (!investigation) {
      return (
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'fr' ? 'Enquête non trouvée' : 'Investigation not found'}
              </h1>
              <button
                onClick={() => navigate('/investigations')}
                className="text-benin-green-600 hover:text-benin-green-700 flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'fr' ? 'Retour aux enquêtes' : 'Back to investigations'}
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
            onClick={() => navigate('/investigations')}
            className="text-benin-green-600 hover:text-benin-green-700 flex items-center mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Retour aux enquêtes' : 'Back to investigations'}
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={investigation.image}
                  alt={investigation.title[language]}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    investigation.status === 'ongoing'
                      ? 'bg-benin-yellow-100 text-benin-yellow-800 dark:bg-benin-yellow-900 dark:text-benin-yellow-200'
                      : 'bg-benin-green-100 text-benin-green-800 dark:bg-benin-green-900 dark:text-benin-green-200'
                  }`}>
                    {investigation.status === 'ongoing'
                      ? language === 'fr' ? 'En cours' : 'Ongoing'
                      : language === 'fr' ? 'Terminée' : 'Completed'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {investigation.title[language]}
                </h1>

                <div className="text-gray-600 dark:text-gray-400 mb-8">
                  {new Date(investigation.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {investigation.description[language]}
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'fr' ? 'Méthodologie' : 'Methodology'}
                  </h2>
                  <p className="mb-6">
                    {language === 'fr'
                      ? 'Notre équipe a mené une enquête approfondie en utilisant diverses techniques d\'investigation numérique, d\'analyse de données et d\'entretiens avec les victimes.'
                      : 'Our team conducted a thorough investigation using various digital investigation techniques, data analysis, and interviews with victims.'}
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'fr' ? 'Résultats clés' : 'Key Findings'}
                  </h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">
                      {language === 'fr'
                        ? 'Identification des méthodes utilisées par les fraudeurs'
                        : 'Identification of methods used by fraudsters'}
                    </li>
                    <li className="mb-2">
                      {language === 'fr'
                        ? 'Analyse des impacts sur les victimes'
                        : 'Analysis of impacts on victims'}
                    </li>
                    <li className="mb-2">
                      {language === 'fr'
                        ? 'Recommandations pour la prévention'
                        : 'Recommendations for prevention'}
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'fr' ? 'Recommandations' : 'Recommendations'}
                  </h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">
                      {language === 'fr'
                        ? 'Vérifiez toujours l\'authenticité des communications'
                        : 'Always verify the authenticity of communications'}
                    </li>
                    <li className="mb-2">
                      {language === 'fr'
                        ? 'Ne partagez jamais vos informations sensibles'
                        : 'Never share your sensitive information'}
                    </li>
                    <li className="mb-2">
                      {language === 'fr'
                        ? 'Signalez immédiatement toute activité suspecte'
                        : 'Report any suspicious activity immediately'}
                    </li>
                  </ul>

                  {investigation.status === 'completed' && (
                    <>
                      <h2 className="text-2xl font-bold mb-4">
                        {language === 'fr' ? 'Conclusion' : 'Conclusion'}
                      </h2>
                      <p>
                        {language === 'fr'
                          ? 'Cette enquête a permis de mettre en lumière des pratiques frauduleuses importantes et de proposer des solutions concrètes pour protéger la population.'
                          : 'This investigation has highlighted significant fraudulent practices and proposed concrete solutions to protect the population.'}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const ongoingInvestigations = investigations.filter(
    (investigation) => investigation.status === 'ongoing'
  );
  
  const completedInvestigations = investigations.filter(
    (investigation) => investigation.status === 'completed'
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'fr' ? 'Enquêtes' : 'Investigations'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            {language === 'fr' 
              ? 'Découvrez nos enquêtes sur les cas réels de fraude et d\'arnaque en ligne au Bénin. Nous analysons les techniques utilisées par les cybercriminels et vous aidons à vous protéger.'
              : 'Discover our investigations into real cases of online fraud and scams in Benin. We analyze the techniques used by cybercriminals and help you protect yourself.'}
          </p>
        </div>

        {/* Ongoing Investigations */}
        {ongoingInvestigations.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-benin-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language === 'fr' ? 'Enquêtes en cours' : 'Ongoing Investigations'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingInvestigations.map((investigation) => (
                <InvestigationCard key={investigation.id} investigation={investigation} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Investigations */}
        {completedInvestigations.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-benin-green-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language === 'fr' ? 'Enquêtes terminées' : 'Completed Investigations'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedInvestigations.map((investigation) => (
                <InvestigationCard key={investigation.id} investigation={investigation} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestigationsPage;