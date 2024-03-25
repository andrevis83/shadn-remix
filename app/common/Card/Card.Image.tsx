import { HTMLAttributes, ImgHTMLAttributes, forwardRef } from 'react';
import { cn } from '~/lib/utils';

export type CardImageProps = HTMLAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement>;

const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  function CardMedia({ alt = '', children, className, src, ...props }, ref) {
    return src ? (
      <img
        alt={alt}
        className={cn('object-cover', className)}
        ref={ref}
        src={src}
        {...props}
      >
        {children}
      </img>
    ) : null;
  }
);

export default CardImage;
