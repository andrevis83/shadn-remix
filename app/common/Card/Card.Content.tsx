import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '~/lib/utils';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent({ asChild, children, className, ...props }, ref) {
    const Comp = asChild ? Slot : 'section';

    return (
      <Comp ref={ref} className={cn('p-6', className)} {...props}>
        {children}
      </Comp>
    );
  }
);

export default CardContent;
