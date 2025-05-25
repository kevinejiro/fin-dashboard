import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button.tsx';

describe('Button', () => {
  it('renders with default primary variant and medium size', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-indigo-600');
    expect(button).toHaveClass('px-4'); // medium size
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Cancel</Button>);
    const button = screen.getByText('Cancel');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-200');
  });

  it('renders with large size', () => {
    render(<Button size="lg">Submit</Button>);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('px-5'); // large size
  });

  it('passes through additional props', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });
});