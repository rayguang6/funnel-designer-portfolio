import React from 'react';
import Icon from './Icon';
import { Card } from '../index';

interface ServiceCardProps {
  iconName: 'chart' | 'computer' | 'pencil' | 'refresh' | 'mobile' | 'sparkles' | 'cube' | 'graph';
  title: string;
  description: string;
  animationDelay?: string;
}

const ServiceCard = ({ 
  iconName, 
  title, 
  description, 
  animationDelay = '' 
}: ServiceCardProps) => {
  return (
    <Card 
      animationDelay={animationDelay}
      className="text-center"
    >
      <div className="w-16 h-16 gradient-bg-subtle rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={iconName} />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

export default ServiceCard; 