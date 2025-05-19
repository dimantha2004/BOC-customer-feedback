import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYouScreen = ({ getText, resetForm }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          resetForm();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resetForm]);

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        {getText('thankYou')}
      </h2>
      
      <p className="text-gray-600 mb-6">
        {getText('feedbackReceived')}
      </p>
      
      <p className="text-sm text-gray-500">
        {getText('redirecting').replace('{seconds}', countdown)}
      </p>
    </div>
  );
};

export default ThankYouScreen;