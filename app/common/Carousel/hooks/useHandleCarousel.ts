import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { type CarouselApi, type CarouselProps } from '../Carousel.Context';

export function useHandleCarousel(
  opts: CarouselProps['opts'],
  orientation: CarouselProps['orientation'] = 'horizontal',
  plugins: CarouselProps['plugins'],
  setApi: CarouselProps['setApi']
) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  /**
   * Scrolls to the previous slide in the carousel.
   */
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  /**
   * Scrolls to the next slide in the carousel.
   */
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  /**
   * Handles keyboard interactions for the carousel.
   * @param event - The keyboard event.
   */
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return {
    api,
    canScrollPrev,
    canScrollNext,
    carouselRef,
    handleKeyDown,
    scrollPrev,
    scrollNext,
  };
}
