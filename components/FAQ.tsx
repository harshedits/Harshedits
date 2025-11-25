import React from 'react';

export const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};

export const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button 
        className="w-full text-left p-4 bg-gray-50 font-bold text-gray-800 flex justify-between items-center hover:bg-gray-100 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pr-4">{title}</span>
        <span className="text-secondary text-2xl leading-none flex-shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      <div 
        className={`bg-white text-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 p-4 border-t border-gray-100' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  );
};