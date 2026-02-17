import React from 'react';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card content */
  children: React.ReactNode;
  /** Card footer content */
  footer?: React.ReactNode;
  /** Shadow elevation */
  elevation?: 'none' | 'low' | 'medium' | 'high';
  /** Padding size */
  padding?: 'none' | 'small' | 'medium' | 'large';
}

/**
 * Card component - A container component with optional title and footer
 * 
 * @example
 * ```tsx
 * <Card title="Example Card" elevation="medium">
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  elevation = 'medium',
  padding = 'medium',
}) => {
  const shadows = {
    none: 'none',
    low: '0 1px 3px rgba(0,0,0,0.12)',
    medium: '0 4px 6px rgba(0,0,0,0.1)',
    high: '0 10px 20px rgba(0,0,0,0.15)',
  };

  const paddings = {
    none: '0',
    small: '12px',
    medium: '20px',
    large: '32px',
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: shadows[elevation],
        overflow: 'hidden',
      }}
    >
      {title && (
        <div
          style={{
            padding: paddings[padding],
            borderBottom: '1px solid #e0e0e0',
            fontWeight: 600,
            fontSize: '18px',
          }}
        >
          {title}
        </div>
      )}
      <div style={{ padding: paddings[padding] }}>{children}</div>
      {footer && (
        <div
          style={{
            padding: paddings[padding],
            borderTop: '1px solid #e0e0e0',
            backgroundColor: '#f8f9fa',
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};
