import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = ({ currentLanguage, setCurrentLanguage }) => {
  const languages = [
    { id: 'english', name: 'English', flag: '🇬🇧' },
    { id: 'sinhala', name: 'සිංහල', flag: '🇱🇰' },
    { id: 'tamil', name: 'தமிழ்', flag: '🇮🇳' }
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex items-center bg-white/10 rounded-full p-1">
        <Globe className="w-4 h-4 text-yellow-400 ml-2 mr-1" />
        
        {languages.map(language => (
          <button
            key={language.id}
            onClick={() => setCurrentLanguage(language.id)}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-300 flex items-center gap-1
              ${currentLanguage === language.id 
                ? 'bg-white text-blue-900 font-medium shadow-sm' 
                : 'text-white hover:bg-white/20'}`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;