# Example Usage

This example demonstrates how to use the components from this library in another React application.

## Setup

```bash
# Install the library in your project
npm install git+https://github.com/okgoogle13/figma-make-design-files.git
```

## Basic Example

```tsx
import React from 'react';
import { Button, Card, Input } from 'figma-make-design-files';

export const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState<{ email?: string; password?: string }>({});

  const handleSubmit = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Login successful!', { email, password });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <Card 
        title="Login" 
        elevation="high"
        footer={
          <Button variant="primary" fullWidth onClick={handleSubmit}>
            Sign In
          </Button>
        }
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          fullWidth
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          fullWidth
        />
      </Card>
    </div>
  );
};
```

## Advanced Example with Custom Styling

```tsx
import React from 'react';
import { Button, Card } from 'figma-make-design-files';

export const ProfileCard = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <Card 
        title="User Profile" 
        elevation="medium"
        padding="large"
        footer={
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        }
      >
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            backgroundColor: '#e0e0e0' 
          }} />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 10px 0' }}>John Doe</h3>
            <p style={{ margin: 0, color: '#666' }}>Software Engineer</p>
          </div>
        </div>
        <Button variant="secondary" size="small">
          Upload New Photo
        </Button>
      </Card>
    </div>
  );
};
```

## Component Grid

```tsx
import React from 'react';
import { Card } from 'figma-make-design-files';

export const Dashboard = () => {
  const cards = [
    { title: 'Total Users', value: '1,234' },
    { title: 'Active Sessions', value: '856' },
    { title: 'Revenue', value: '$12,345' },
    { title: 'Growth', value: '+23%' },
  ];

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '20px',
      padding: '20px'
    }}>
      {cards.map((card, index) => (
        <Card key={index} elevation="low" padding="medium">
          <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>{card.title}</h4>
          <p style={{ margin: 0, fontSize: '32px', fontWeight: 'bold' }}>{card.value}</p>
        </Card>
      ))}
    </div>
  );
};
```

## TypeScript Support

The library includes full TypeScript support with exported types:

```tsx
import React from 'react';
import { Button, ButtonProps, Card, CardProps, Input, InputProps } from 'figma-make-design-files';

// You can use the types in your own components
interface MyButtonWrapperProps extends ButtonProps {
  label: string;
}

export const MyButtonWrapper: React.FC<MyButtonWrapperProps> = ({ label, ...buttonProps }) => {
  return (
    <div>
      <span>{label}</span>
      <Button {...buttonProps} />
    </div>
  );
};
```
