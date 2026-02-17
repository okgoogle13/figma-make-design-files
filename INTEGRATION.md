# Integration Guide

This guide explains how to integrate the Figma Design Components library into another repository.

## Installation Methods

### Method 1: Install from GitHub (Recommended for Private Repos)

Install directly from the GitHub repository:

```bash
npm install git+https://github.com/okgoogle13/figma-make-design-files.git
```

Or with a specific branch/tag:

```bash
npm install git+https://github.com/okgoogle13/figma-make-design-files.git#branch-name
npm install git+https://github.com/okgoogle13/figma-make-design-files.git#v1.0.0
```

Update your `package.json` to include:

```json
{
  "dependencies": {
    "figma-make-design-files": "git+https://github.com/okgoogle13/figma-make-design-files.git"
  }
}
```

### Method 2: Local Development

For local development and testing:

```bash
# Clone the repository
git clone https://github.com/okgoogle13/figma-make-design-files.git

# Install in your project
npm install /path/to/figma-make-design-files
```

Or use npm link:

```bash
# In the figma-make-design-files directory
npm link

# In your project directory
npm link figma-make-design-files
```

### Method 3: Publish to npm (Production)

For production use, publish the package to npm:

```bash
# Login to npm
npm login

# Publish the package
npm publish
```

Then install in your project:

```bash
npm install figma-make-design-files
```

## Usage in Different Project Types

### Create React App

```tsx
// src/App.tsx
import React from 'react';
import { Button, Card, Input } from 'figma-make-design-files';

function App() {
  return (
    <div className="App">
      <Card title="Welcome">
        <Input label="Email" type="email" />
        <Button variant="primary">Submit</Button>
      </Card>
    </div>
  );
}

export default App;
```

### Next.js

```tsx
// pages/index.tsx or app/page.tsx
import { Button, Card, Input } from 'figma-make-design-files';

export default function Home() {
  return (
    <main>
      <Card title="Welcome">
        <Input label="Email" type="email" />
        <Button variant="primary">Submit</Button>
      </Card>
    </main>
  );
}
```

### Vite

```tsx
// src/App.tsx
import { Button, Card, Input } from 'figma-make-design-files';

function App() {
  return (
    <>
      <Card title="Welcome">
        <Input label="Email" type="email" />
        <Button variant="primary">Submit</Button>
      </Card>
    </>
  );
}

export default App;
```

## TypeScript Configuration

If using TypeScript, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "react-jsx"
  }
}
```

The library provides full TypeScript support with type definitions included.

## Peer Dependencies

This library requires React and ReactDOM as peer dependencies. Ensure your project has:

- React ^18.0.0 or ^19.0.0
- ReactDOM ^18.0.0 or ^19.0.0

Install them if needed:

```bash
npm install react react-dom
```

## Updating the Library

### From GitHub

```bash
npm update figma-make-design-files
```

Or reinstall:

```bash
npm uninstall figma-make-design-files
npm install git+https://github.com/okgoogle13/figma-make-design-files.git
```

### From npm

```bash
npm update figma-make-design-files
```

## CI/CD Integration

### GitHub Actions

Add to your `.github/workflows/ci.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Test
        run: npm test
```

### GitLab CI

Add to your `.gitlab-ci.yml`:

```yaml
image: node:18

stages:
  - build
  - test

install:
  stage: build
  script:
    - npm ci
  artifacts:
    paths:
      - node_modules/

build:
  stage: build
  dependencies:
    - install
  script:
    - npm run build

test:
  stage: test
  dependencies:
    - install
  script:
    - npm test
```

## Customization

### Using with CSS-in-JS Libraries

You can wrap the components with styled-components or emotion:

```tsx
import styled from 'styled-components';
import { Button as BaseButton } from 'figma-make-design-files';

const StyledButton = styled(BaseButton)`
  /* Your custom styles */
  font-family: 'Your Font', sans-serif;
`;

export const Button = StyledButton;
```

### Extending Component Props

```tsx
import { Button, ButtonProps } from 'figma-make-design-files';

interface ExtendedButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

export const IconButton: React.FC<ExtendedButtonProps> = ({ icon, children, ...props }) => {
  return (
    <Button {...props}>
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {children}
    </Button>
  );
};
```

## Troubleshooting

### Module not found error

If you see "Module not found: Can't resolve 'figma-make-design-files'":

1. Ensure the package is installed: `npm list figma-make-design-files`
2. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Check that your package.json includes the dependency

### TypeScript errors

If you see TypeScript errors:

1. Ensure the package is built: Check for `dist/types` directory in `node_modules/figma-make-design-files`
2. Update your TypeScript version: `npm install -D typescript@latest`
3. Clear TypeScript cache: `rm -rf node_modules/.cache`

### React version conflicts

If you see peer dependency warnings:

```bash
npm install react@^19.0.0 react-dom@^19.0.0
```

Or use the `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

## Best Practices

1. **Version Pinning**: Pin the library version in package.json for production
2. **Regular Updates**: Keep the library updated to get bug fixes and new features
3. **Type Checking**: Use TypeScript for better developer experience
4. **Tree Shaking**: Most bundlers will automatically tree-shake unused components
5. **Code Splitting**: Use dynamic imports for large components when needed

## Support

For issues or questions:

1. Check the [README](./README.md) for basic usage
2. Review [EXAMPLES.md](./EXAMPLES.md) for code samples
3. Open an issue on GitHub
