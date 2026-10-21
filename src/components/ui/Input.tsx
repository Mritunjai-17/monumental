import React, { useId } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const defaultId = useId();
    const inputId = id || props.name || defaultId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#16232B] mb-1.5"
          >
            {label} {props.required && <span className="text-red-500" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-[10px] border bg-white text-[#16232B] text-base placeholder-[#5B6B73]/60 transition-[border-color,box-shadow] duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#1F6F78] focus:border-[#1F6F78]',
            error ? 'border-red-500 focus:ring-red-500' : 'border-[#DDE3E3] hover:border-[#1F6F78]/50',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-xs text-[#5B6B73]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const defaultId = useId();
    const selectId = id || props.name || defaultId;
    const errorId = `${selectId}-error`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-[#16232B] mb-1.5"
          >
            {label} {props.required && <span className="text-red-500" aria-hidden="true">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-[10px] border bg-white text-[#16232B] text-base transition-[border-color,box-shadow] duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#1F6F78] focus:border-[#1F6F78]',
            error ? 'border-red-500 focus:ring-red-500' : 'border-[#DDE3E3] hover:border-[#1F6F78]/50',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const defaultId = useId();
    const textareaId = id || props.name || defaultId;
    const errorId = `${textareaId}-error`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[#16232B] mb-1.5"
          >
            {label} {props.required && <span className="text-red-500" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full px-4 py-3 rounded-[10px] border bg-white text-[#16232B] text-base placeholder-[#5B6B73]/60 transition-[border-color,box-shadow] duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#1F6F78] focus:border-[#1F6F78] resize-y',
            error ? 'border-red-500 focus:ring-red-500' : 'border-[#DDE3E3] hover:border-[#1F6F78]/50',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
