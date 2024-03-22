import CarouselLoop from './Carousel.Loop';
import CarouselMultiple from './Carousel.Multiple';
import CarouselSingle from './Carousel.Single';

export default function CarouselSections() {
  return (
    <>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Single carousel
        </h2>
        <CarouselSingle />
      </section>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Multiple carousel
        </h2>
        <CarouselMultiple />
      </section>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Multiple carousel with loop
        </h2>
        <CarouselLoop />
      </section>
    </>
  );
}
