import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '~/lib/utils';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ asChild, children, className, ...props }, ref) {
    const Comp = asChild ? Slot : 'footer';

    return (
      <Comp
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

export default CardFooter;
