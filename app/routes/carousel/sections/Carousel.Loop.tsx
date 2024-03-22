import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/common/Carousel';

export default function CarouselLoop() {
  return (
    <>
      <p className="mt-4 mb-4 text-center text-lg tracking-tight md:text-xl lg:text-2xl">
        {"opts={{ align: 'start', loop: true }}"}
      </p>
      <Carousel opts={{ align: 'start', loop: true }}>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
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
