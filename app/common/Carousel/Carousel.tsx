import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  CarouselContext,
  type CarouselApi,
  type CarouselProps,
} from './Carousel.Context';
import { cn } from '~/lib/utils';
import { useHandleCarousel } from './hooks/useHandleCarousel';

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(function Carousel(
  {
    orientation = 'horizontal',
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  },
  ref
) {
  const {
    api,
    canScrollPrev,
    canScrollNext,
    carouselRef,
    handleKeyDown,
    scrollPrev,
    scrollNext,
  } = useHandleCarousel(opts, orientation, plugins, setApi);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

export default Carousel;
