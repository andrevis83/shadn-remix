import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '~/lib/utils';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ asChild, children, className, ...props }, ref) {
    const Comp = asChild ? Slot : 'header';

    return (
      <Comp ref={ref} className={cn('flex flex-col p-6', className)} {...props}>
        {children}
      </Comp>
    );
  }
);

export default CardHeader;
