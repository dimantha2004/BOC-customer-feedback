import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import ServiceSelector from './components/ServiceSelector';
import StarRating from './components/StarRating';
import ThankYouScreen from './components/ThankYouScreen';
import { translations } from './utils/translations';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [selectedService, setSelectedService] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const getText = (key) => {
    return translations[currentLanguage][key] || translations.english[key];
  };

  const handleSubmit = async () => {
    if (!selectedService) {
      setError(getText('selectServiceError'));
      return;
    }

    if (rating === 0) {
      setError(getText('selectRatingError'));
      return;
    }

    setError('');
    setSubmitting(true);

    // Determine rating label
    let ratingLabel = '';
    if (rating <= 2) {
      ratingLabel = getText('poor');
    } else if (rating <= 4) {
      ratingLabel = getText('good');
    } else {
      ratingLabel = getText('excellent');
    }

    // Prepare data for submission
    const feedbackData = {
      section: selectedService,
      stars: rating,
      label: ratingLabel,
      language: currentLanguage,
      datetime: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzZuloKpkxuemIR-fno4lp51jVJ0ieiCTmK3lBXS-GwHbKRXARtfI31Ov5HCrgySVlzeQ/exec',
        {
          method: 'POST',
          body: JSON.stringify(feedbackData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError(getText('submissionError'));
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedService('');
    setRating(0);
    setSubmitted(false);
    setError('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6 flex flex-col items-center justify-center">
        {!submitted ? (
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4">
              <LanguageSelector 
                currentLanguage={currentLanguage} 
                setCurrentLanguage={setCurrentLanguage} 
              />
            </div>
            
            <div className="p-6">
              <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                {getText('title')}
              </h1>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3 text-gray-800">
                  {getText('selectService')}
                </h2>
                <ServiceSelector
                  selectedService={selectedService}
                  setSelectedService={setSelectedService}
                  getText={getText}
                />
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3 text-gray-800">
                  {getText('rateService')}
                </h2>
                <StarRating 
                  rating={rating} 
                  setRating={setRating} 
                  getText={getText}
                />
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                  {error}
                </div>
              )}
              
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className={`w-full py-3 rounded-md text-white font-medium transition-all duration-300 ${
                  submitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-800 hover:bg-blue-700 active:bg-blue-900'
                }`}
              >
                {submitting ? getText('submitting') : getText('submit')}
              </button>
            </div>
          </div>
        ) : (
          <ThankYouScreen getText={getText} resetForm={resetForm} />
        )}
      </main>
      
      <Footer getText={getText} />
    </div>
  );
}
export default App;