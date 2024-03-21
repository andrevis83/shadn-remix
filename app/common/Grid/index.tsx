import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

interface GridProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  asChild?: boolean;
  inline?: boolean;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { asChild = false, children, className, inline, ...props },
  ref
) {
  const Comp = asChild ? Slot : 'div';

  const inlineMode = inline ? 'inline-grid' : 'grid';

  return (
    <Comp
      className={cn(inlineMode, gridVariants({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});

export const gridVariants = cva('', {
  variants: {},
  defaultVariants: {},
});
