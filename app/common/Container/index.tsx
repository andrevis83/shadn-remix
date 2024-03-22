import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

export interface ContainerProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export type MaxWidth = ContainerProps['maxWidth'];

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container(
    { asChild = false, children, className, maxWidth, ...props },
    ref
  ) {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        className={cn(containerVariants({ className, maxWidth }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

export const containerVariants = cva('w-full mx-auto px-4', {
  variants: {
    maxWidth: {
      DEFAULT: '',
      sm: 'w-full max-w-screen-sm',
      md: 'w-full max-w-screen-md',
      lg: 'w-full max-w-screen-lg',
      xl: 'w-full max-w-screen-xl',
      '2xl': 'w-full max-w-screen-2xl',
    },
  },
  defaultVariants: {
    maxWidth: 'DEFAULT',
  },
});
