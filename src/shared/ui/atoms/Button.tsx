
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 transform active:scale-95';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-yellow-400',
    secondary: 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 hover:scale-105',
    outline: 'border border-white/20 text-white hover:bg-white/10 backdrop-blur-md'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
