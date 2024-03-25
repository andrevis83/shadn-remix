import { HTMLAttributes, ImgHTMLAttributes, forwardRef } from 'react';
import { cn } from '~/lib/utils';

type CardMediaProps = HTMLAttributes<HTMLDivElement> &
  ImgHTMLAttributes<HTMLDivElement>;

const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>(function CardMedia(
  { children, className, ...props },
  ref
) {
  return (
    <figure ref={ref} className={cn('w-full h-auto', className)} {...props}>
      <>{children}</>
    </figure>
  );
});

export default CardMedia;
