import React from 'react';
import { Coins as GoldCoin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2">
          <GoldCoin className="text-yellow-400 h-8 w-8" />
          <div>
            <h1 className="font-bold text-xl tracking-tight">Bank of Ceylon</h1>
            <p className="text-xs text-yellow-400 font-medium">Customer Feedback</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;