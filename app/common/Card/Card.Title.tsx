import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '~/lib/utils';

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardHeaderProps>(
  function CardTitle({ asChild, children, className, ...props }, ref) {
    const Comp = asChild ? Slot : 'h3';

    return (
      <Comp
        ref={ref}
        className={cn(
          'text-2xl font-semibold leading-none tracking-tight',
          className
        )}
        {...props}
      >
        <>{children}</>
      </Comp>
    );
  }
);

export default CardTitle;
