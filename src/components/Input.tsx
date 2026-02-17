import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Full width input */
  fullWidth?: boolean;
}

/**
 * Input component - A form input field with label and validation
 * 
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   error="Invalid email address"
 * />
 * ```
 */
export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  size = 'medium',
  fullWidth = false,
  ...props
}) => {
  const sizes = {
    small: { padding: '6px 12px', fontSize: '14px' },
    medium: { padding: '10px 14px', fontSize: '16px' },
    large: { padding: '14px 18px', fontSize: '18px' },
  };

  return (
    <div style={{ marginBottom: '16px', width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: '6px',
            fontWeight: 500,
            color: '#333',
          }}
        >
          {label}
        </label>
      )}
      <input
        style={{
          width: '100%',
          ...sizes[size],
          border: `1px solid ${error ? '#dc3545' : '#ced4da'}`,
          borderRadius: '4px',
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
        {...props}
      />
      {error && (
        <div
          style={{
            marginTop: '4px',
            fontSize: '14px',
            color: '#dc3545',
          }}
        >
          {error}
        </div>
      )}
      {!error && helperText && (
        <div
          style={{
            marginTop: '4px',
            fontSize: '14px',
            color: '#6c757d',
          }}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
