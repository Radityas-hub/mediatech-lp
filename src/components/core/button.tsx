import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children = "Button", onClick, className = "" }: ButtonProps) {
    return (
        <button 
            className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors duration-300 flex items-center w-fit gap-2 ${className}`}
            onClick={onClick}
        >
            {children}
            <img
                src="/arrow-icon.webp"
                alt="Arrow"
                className="w-4 h-4"
            />
        </button>
    )
}
