import React from 'react';

const ServiceSelector = ({ selectedService, setSelectedService, getText }) => {
  const services = [
    'counter',
    'loan',
    'recovery',
    'chequeClearingUnit',
    'pawning'
  ];

  return (
    <div className="grid grid-cols-1 gap-2">
      {services.map(service => (
        <button
          key={service}
          onClick={() => setSelectedService(service)}
          className={`p-3 rounded-lg border text-left transition-all duration-200 
            ${selectedService === service 
              ? 'border-blue-500 bg-blue-50 text-blue-800' 
              : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'}`}
        >
          {getText(service)}
        </button>
      ))}
    </div>
  );
};

export default ServiceSelector;