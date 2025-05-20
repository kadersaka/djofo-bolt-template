import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import InvestigationCard from '../components/common/InvestigationCard';
import { investigations } from '../data/investigations';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const InvestigationsPage: React.FC = () => {
  const { language } = useLanguage();
  
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