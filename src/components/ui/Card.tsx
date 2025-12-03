import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl cursor-pointer' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={combinedClasses}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={combinedClasses} onClick={onClick}>{children}</div>;
};
