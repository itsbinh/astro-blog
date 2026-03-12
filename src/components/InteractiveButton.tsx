import { useState } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
    onClick?.();
  };

  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200';
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {text} {count > 0 && `(Clicked ${count} time${count !== 1 ? 's' : ''})`}
    </button>
  );
}
