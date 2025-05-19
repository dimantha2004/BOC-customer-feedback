import React from 'react';

const Footer = ({ getText }) => {
  return (
    <footer className="bg-gray-800 text-white py-3 text-center text-sm">
      <div className="container mx-auto px-4">
        <p>{getText('footerText')} &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;