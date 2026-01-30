
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center rounded-lg h-12 px-6 font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-[#121b0d] hover:bg-primary-dark shadow-sm hover:shadow-md",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "bg-transparent text-primary hover:bg-primary/5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
