import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

interface FlexProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  asChild?: boolean;
  inline?: boolean;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(function Flex(
  { asChild = false, children, className, inline, ...props },
  ref
) {
  const Comp = asChild ? Slot : 'div';

  const inlineMode = inline ? 'inline-flex' : 'flex';

  return (
    <Comp
      className={cn(inlineMode, flexVariants({ className }))}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});

export const flexVariants = cva('', {
  variants: {},
  defaultVariants: {},
});
