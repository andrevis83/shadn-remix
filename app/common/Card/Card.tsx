import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '~/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { asChild, children, className, ...props },
  ref
) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={ref}
      className={cn(
        className,
        'rounded-lg border bg-card text-card-foreground shadow-sm'
      )}
      {...props}
    >
      <>{children}</>
    </Comp>
  );
});

export default Card;
