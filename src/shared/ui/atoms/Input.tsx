import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg text-white
          placeholder:text-zinc-500
          ${error ? 'border-red-500' : 'border-white/10'}
          focus:outline-none focus:border-yellow-400 transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
