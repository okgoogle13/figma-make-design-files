# Figma Design Components Library

React components library for CareerCopilot, designed to be integrated into other repositories.

## 📚 Documentation

- **[Quick Start Guide](./QUICKSTART.md)** - Get started in 5 minutes
- **[Examples](./EXAMPLES.md)** - Real-world usage examples
- **[Integration Guide](./INTEGRATION.md)** - Detailed integration instructions
- **[Contributing Guide](./CONTRIBUTING.md)** - How to add new components

## Installation

To use this component library in another repository:

### Option 1: Install from Git (Recommended for development)

```bash
npm install git+https://github.com/okgoogle13/figma-make-design-files.git
```

### Option 2: Install locally

```bash
npm install /path/to/figma-make-design-files
```

### Option 3: Publish to npm (for production)

After building the library, you can publish it to npm and install it like any other package:

```bash
npm install figma-make-design-files
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

This will generate the distributable files in the `dist/` directory:
- `dist/index.mjs` - ES module build
- `dist/index.cjs` - CommonJS build
- `dist/types/` - TypeScript type definitions

## Usage

After installation, import components in your React application:

```tsx
import { Button, Card, Input } from 'figma-make-design-files';

function App() {
  return (
    <Card title="Welcome" elevation="medium">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        fullWidth
      />
      <Button variant="primary" fullWidth>
        Submit
      </Button>
    </Card>
  );
}
```

## Available Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `disabled`: boolean (default: false)
- `fullWidth`: boolean (default: false)
- `onClick`: () => void

**Example:**
```tsx
<Button variant="primary" size="large" onClick={() => alert('Clicked!')}>
  Click Me
</Button>
```

### Card

A container component with optional title and footer sections.

**Props:**
- `title`: string (optional)
- `footer`: React.ReactNode (optional)
- `elevation`: 'none' | 'low' | 'medium' | 'high' (default: 'medium')
- `padding`: 'none' | 'small' | 'medium' | 'large' (default: 'medium')

**Example:**
```tsx
<Card 
  title="Profile Card" 
  elevation="high"
  footer={<Button>Save</Button>}
>
  <p>Card content goes here</p>
</Card>
```

### Input

A form input field with label, validation, and helper text support.

**Props:**
- `label`: string (optional)
- `error`: string (optional)
- `helperText`: string (optional)
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth`: boolean (default: false)
- Plus all standard HTML input attributes

**Example:**
```tsx
<Input
  label="Username"
  placeholder="Enter username"
  helperText="Must be at least 3 characters"
  error={errors.username}
  fullWidth
/>
```

## Integration Guide

### Adding to an Existing React Project

1. **Install the package:**
   ```bash
   npm install git+https://github.com/okgoogle13/figma-make-design-files.git
   ```

2. **Import and use components:**
   ```tsx
   import { Button, Card, Input } from 'figma-make-design-files';
   ```

3. **TypeScript support is built-in** - All components come with type definitions.

### Adding New Components

To add new components from Figma designs:

1. Create a new component file in `src/components/`:
   ```tsx
   // src/components/NewComponent.tsx
   import React from 'react';
   
   export interface NewComponentProps {
     // Define props
   }
   
   export const NewComponent: React.FC<NewComponentProps> = (props) => {
     // Component implementation
     return <div>...</div>;
   };
   ```

2. Export the component in `src/index.ts`:
   ```tsx
   export { NewComponent, type NewComponentProps } from './components/NewComponent';
   ```

3. Build the library:
   ```bash
   npm run build
   ```

4. Commit and push changes to make them available to consuming repositories.

## Contributing

When converting Figma designs to React components:

1. Match the design specifications as closely as possible
2. Use TypeScript for type safety
3. Document all props with JSDoc comments
4. Include usage examples in component files
5. Follow the existing component structure and patterns
6. Build and test before committing

## License

MIT

