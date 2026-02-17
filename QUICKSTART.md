# Quick Start Guide

Get up and running with the Figma Design Components library in 5 minutes.

## Installation

```bash
npm install git+https://github.com/okgoogle13/figma-make-design-files.git
```

## Basic Usage

```tsx
import React from 'react';
import { Button, Card, Input } from 'figma-make-design-files';

function App() {
  const [email, setEmail] = React.useState('');

  return (
    <Card title="Quick Start">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <Button variant="primary" onClick={() => alert(`Email: ${email}`)}>
        Submit
      </Button>
    </Card>
  );
}

export default App;
```

## Available Components

### Button
```tsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
```

**Variants:** `primary` | `secondary` | `outline`  
**Sizes:** `small` | `medium` | `large`

### Card
```tsx
<Card title="Card Title" elevation="medium">
  <p>Your content here</p>
</Card>
```

**Elevation:** `none` | `low` | `medium` | `high`  
**Padding:** `none` | `small` | `medium` | `large`

### Input
```tsx
<Input
  label="Username"
  placeholder="Enter username"
  error={errors.username}
/>
```

## TypeScript Support

Full TypeScript support is included:

```tsx
import { ButtonProps, CardProps, InputProps } from 'figma-make-design-files';
```

## Next Steps

- Read the full [README](./README.md) for detailed documentation
- Check [EXAMPLES.md](./EXAMPLES.md) for more usage examples
- See [INTEGRATION.md](./INTEGRATION.md) for advanced integration options
- Read [CONTRIBUTING.md](./CONTRIBUTING.md) to add new components

## Need Help?

Open an issue on [GitHub](https://github.com/okgoogle13/figma-make-design-files/issues)
