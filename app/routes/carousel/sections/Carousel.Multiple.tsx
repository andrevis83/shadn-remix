import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/common/Carousel';
import { TOTAL_SLIDES } from '../constants/Carousel';

export default function CarouselMultiple() {
  return (
    <>
      <p className="mt-4 mb-4 text-center text-lg tracking-tight md:text-xl lg:text-2xl">
        {"opts={{ align: 'start' }}"}
        <br />
        {'<CarouselItem className="-pl-{number}">'}
        <br />
        {'<CarouselContent className="-ml-{number}">'}
      </p>
      <Carousel opts={{ align: 'start' }}>
        <CarouselContent className="-ml-1">
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="border border-gray-300 p-1">{index + 1}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
