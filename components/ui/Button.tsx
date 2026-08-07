import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'glass';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-sans text-sm font-bold tracking-wide transition-all duration-300 outline-none";
  
  const variants = {
    primary: "bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] border border-transparent",
    ghost: "bg-transparent text-primary-container border border-primary-container hover:bg-primary-container/10",
    glass: "bg-glass-fill border border-glass-stroke text-on-background backdrop-blur-xl hover:bg-primary/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
