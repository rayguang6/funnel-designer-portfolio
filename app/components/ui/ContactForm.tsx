import React from 'react';
import { Button } from '../index';
import { GRADIENTS } from '@/app/constants/theme';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const inputClasses = `w-full px-4 py-3 rounded-lg border gradient-border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all`;

  return (
    <form className={`${className}`}>
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className={inputClasses}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className={inputClasses}
          placeholder="john@example.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Project Type
        </label>
        <select
          id="project"
          className={inputClasses}
          required
        >
          <option value="" disabled selected>Select a project type</option>
          <option value="full-funnel">Complete Funnel Design</option>
          <option value="landing-page">Landing Page</option>
          <option value="email-sequence">Email Sequence</option>
          <option value="optimization">Conversion Optimization</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClasses}
          placeholder="Please share some details about your project and your goals..."
          required
        ></textarea>
      </div>
      
      <div className="mb-6">
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          className={inputClasses}
          required
        >
          <option value="" disabled selected>Select your budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-20k">$10,000 - $20,000</option>
          <option value="20k-plus">$20,000+</option>
        </select>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            className="w-4 h-4 border-gray-300 rounded focus:ring-0 focus:border-[var(--primary)] checked:gradient-bg"
            required
          />
          <label htmlFor="privacy" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            I agree with the <a href="#" className="gradient-text hover:underline">privacy policy</a> and <a href="#" className="gradient-text hover:underline">terms of service</a>.
          </label>
        </div>
      </div>
      
      <Button className="w-full justify-center">
        <span className="flex items-center justify-center">
          Submit Request
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" fill="white" />
          </svg>
        </span>
      </Button>
    </form>
  );
};

export default ContactForm; 