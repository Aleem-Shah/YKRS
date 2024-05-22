// components/ui/Accordion.jsx
import React, { useState } from 'react';

const AccordionItem = ({ question, answer }:{question:string, answer:string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 text-lg font-medium text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 focus:outline-none"
      >
        {question}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900">
          {answer}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ faqs }:{faqs:any}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {faqs.map((faq:any, index:any) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Accordion;
