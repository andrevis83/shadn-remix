import { HTMLAttributes, ImgHTMLAttributes, forwardRef } from 'react';
import { cn } from '~/lib/utils';

type CardMediaProps = HTMLAttributes<HTMLDivElement> &
  ImgHTMLAttributes<HTMLDivElement>;

const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>(function CardMedia(
  { children, className, ...props },
  ref
) {
  return (
    <figure
      ref={ref}
      className={cn('h-auto max-w-full ', className)}
      {...props}
    >
      <>{children}</>
    </figure>
  );
});

export default CardMedia;
