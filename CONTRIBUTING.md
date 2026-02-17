# Contributing Guide

This guide explains how to add new React components converted from Figma designs to this library.

## Workflow for Converting Figma Designs

### 1. Export Design Specifications from Figma

1. Open the Figma design file
2. Select the component or frame to convert
3. Note the following specifications:
   - Colors (hex codes, RGB values)
   - Typography (font family, size, weight, line height)
   - Spacing (padding, margins, gaps)
   - Border radius, shadows, and other visual properties
   - Interactive states (hover, active, disabled, focus)
   - Responsive behavior and breakpoints

### 2. Create the Component File

Create a new file in `src/components/` with a descriptive name:

```bash
touch src/components/YourComponent.tsx
```

### 3. Component Structure Template

Use this template for new components:

```tsx
import React from 'react';

export interface YourComponentProps {
  /** Primary prop description */
  primaryProp: string;
  /** Optional prop description */
  optionalProp?: boolean;
  /** Callback prop description */
  onAction?: () => void;
  /** Children elements */
  children?: React.ReactNode;
}

/**
 * YourComponent - Brief description
 * 
 * Detailed description of what the component does and when to use it.
 * 
 * @example
 * ```tsx
 * <YourComponent primaryProp="value">
 *   Content
 * </YourComponent>
 * ```
 */
export const YourComponent: React.FC<YourComponentProps> = ({
  primaryProp,
  optionalProp = false,
  onAction,
  children,
}) => {
  // Component logic here
  
  const styles = {
    // Define inline styles matching Figma design
    container: {
      // styles
    },
  };

  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};
```

### 4. Implement the Design

Map Figma design properties to React component styles:

#### Colors
```tsx
// From Figma: Primary Color #007bff
const styles = {
  primary: {
    backgroundColor: '#007bff',
    color: '#ffffff',
  },
};
```

#### Typography
```tsx
// From Figma: Heading 1 - Inter 24px/32px, Weight 600
const styles = {
  heading: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 600,
  },
};
```

#### Spacing
```tsx
// From Figma: Padding 16px, Gap 12px
const styles = {
  container: {
    padding: '16px',
    display: 'flex',
    gap: '12px',
  },
};
```

#### Shadows
```tsx
// From Figma: Box Shadow
const styles = {
  elevated: {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};
```

### 5. Add TypeScript Types

Ensure all props are properly typed:

```tsx
export interface YourComponentProps {
  // Use specific types instead of 'any'
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  
  // For functions, define the signature
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (value: string) => void;
  
  // For complex objects, define interfaces
  data?: {
    id: string;
    label: string;
  }[];
}
```

### 6. Export the Component

Add the component to `src/index.ts`:

```tsx
export { YourComponent, type YourComponentProps } from './components/YourComponent';
```

### 7. Build and Test

```bash
# Build the library
npm run build

# Verify the build output
ls -la dist/

# Test in a local project
cd /path/to/test-project
npm install /path/to/figma-make-design-files
```

### 8. Document the Component

Add usage examples to `EXAMPLES.md`:

```markdown
### YourComponent

Description of the component.

**Props:**
- `primaryProp`: string - Description
- `optionalProp`: boolean (optional, default: false) - Description

**Example:**
\`\`\`tsx
<YourComponent primaryProp="value">
  Content
</YourComponent>
\`\`\`
```

### 9. Commit and Push

```bash
git add .
git commit -m "Add YourComponent from Figma design"
git push
```

## Best Practices

### Design Fidelity

- Match Figma designs pixel-perfect when possible
- Use exact color values from the design
- Maintain consistent spacing and typography
- Implement all interactive states (hover, active, focus, disabled)

### Code Quality

- **TypeScript**: Always use TypeScript for type safety
- **Props**: Make props optional when appropriate with sensible defaults
- **Documentation**: Add JSDoc comments for all props and components
- **Naming**: Use descriptive, semantic names for props and components
- **Consistency**: Follow the existing component structure and patterns

### Accessibility

- Use semantic HTML elements
- Include proper ARIA labels when needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper color contrast ratios

### Performance

- Avoid unnecessary re-renders
- Use React.memo() for expensive components
- Keep inline styles simple or consider CSS modules for complex styling
- Don't include large dependencies

### Styling Approach

This library currently uses inline styles for simplicity. When adding new components:

- Use inline styles for simple, component-specific styles
- Define styles as objects for reusability
- Consider extracting common styles to a shared constants file for consistency

```tsx
// Example: Shared colors
const COLORS = {
  primary: '#007bff',
  secondary: '#6c757d',
  // ...
};

// Use in component
const styles = {
  button: {
    backgroundColor: COLORS.primary,
  },
};
```

## Component Checklist

Before submitting a new component, ensure:

- [ ] Component file created in `src/components/`
- [ ] TypeScript interfaces defined for all props
- [ ] JSDoc comments added for component and props
- [ ] Component exported from `src/index.ts`
- [ ] Example usage provided
- [ ] Design specifications from Figma matched
- [ ] All interactive states implemented
- [ ] Component builds without errors
- [ ] TypeScript types are generated
- [ ] Documentation updated in README.md or EXAMPLES.md
- [ ] Code follows existing patterns and conventions

## Example: Adding a Modal Component

Here's a complete example of adding a Modal component:

### 1. Create `src/components/Modal.tsx`

```tsx
import React from 'react';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Modal size */
  size?: 'small' | 'medium' | 'large';
  /** Whether to show close button */
  showCloseButton?: boolean;
}

/**
 * Modal component - A dialog overlay
 * 
 * @example
 * ```tsx
 * <Modal isOpen={true} onClose={() => setOpen(false)} title="Confirm">
 *   Are you sure?
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true,
}) => {
  if (!isOpen) return null;

  const sizes = {
    small: '400px',
    medium: '600px',
    large: '800px',
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          maxWidth: sizes[size],
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div
            style={{
              padding: '20px',
              borderBottom: '1px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {title && <h2 style={{ margin: 0 }}>{title}</h2>}
            {showCloseButton && (
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
            )}
          </div>
        )}
        <div style={{ padding: '20px' }}>{children}</div>
      </div>
    </div>
  );
};
```

### 2. Export in `src/index.ts`

```tsx
export { Modal, type ModalProps } from './components/Modal';
```

### 3. Build and test

```bash
npm run build
```

### 4. Commit

```bash
git add .
git commit -m "Add Modal component from Figma design"
git push
```

## Getting Help

- Review existing components for examples
- Check the main [README.md](./README.md) for setup instructions
- Open an issue if you need clarification
