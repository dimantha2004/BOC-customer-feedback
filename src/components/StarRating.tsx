import React, { useState } from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, setRating, getText }) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const getStarColor = (starIndex) => {
    const effectiveRating = hoverRating || rating;
    
    if (starIndex <= effectiveRating) {
      // Different gold shades based on rating level
      if (effectiveRating <= 2) return 'text-amber-400'; // lighter gold for poor
      if (effectiveRating <= 4) return 'text-yellow-400'; // medium gold for good
      return 'text-yellow-500'; // deeper gold for excellent
    }
    
    return 'text-gray-300';
  };

  const getLabelColor = (rating) => {
    if (rating <= 2) return 'bg-amber-100 text-amber-700';
    if (rating <= 4) return 'bg-yellow-100 text-yellow-700';
    return 'bg-green-100 text-green-700';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className={`transition-all duration-200 transform ${
                (hoverRating || rating) >= star 
                  ? 'scale-110' 
                  : 'scale-100 hover:scale-105'
              }`}
              aria-label={`Rate ${star} stars`}
            >
              <Star 
                className={`h-12 w-12 ${getStarColor(star)} transition-colors duration-200 cursor-pointer`} 
                fill={(hoverRating || rating) >= star ? 'currentColor' : 'none'} 
              />
            </button>
          ))}
        </div>
        
        <div className="flex justify-between w-full px-4">
          {/* Poor label (under stars 1-2) */}
          <div className="flex-1 text-center">
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
              (hoverRating || rating) <= 2 && (hoverRating || rating) > 0
                ? getLabelColor(2)
                : 'bg-gray-100 text-gray-600'
            }`}>
              {getText('poor')}
            </span>
          </div>
          
          {/* Good label (under stars 3-4) */}
          <div className="flex-1 text-center">
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
              (hoverRating || rating) <= 4 && (hoverRating || rating) > 2
                ? getLabelColor(4)
                : 'bg-gray-100 text-gray-600'
            }`}>
              {getText('good')}
            </span>
          </div>
          
          {/* Excellent label (under star 5) */}
          <div className="flex-1 text-center">
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full ${
              (hoverRating || rating) === 5
                ? getLabelColor(5)
                : 'bg-gray-100 text-gray-600'
            }`}>
              {getText('excellent')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;