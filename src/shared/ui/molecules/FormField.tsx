import React from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactElement<{ error?: boolean }>;
  required?: boolean;
}

export function FormField({ label, error, children, required }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {React.cloneElement(children, { error: !!error } as any)}
      {error && (
        <p className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
