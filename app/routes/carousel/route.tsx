import { Link } from '@remix-run/react';
import { Container } from '~/common/Container';
import CarouselSections from './sections';

export default function CarouselPage() {
  return (
    <Container className="pb-4">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina dei carousel
      </h1>
      <div>
        <p className="text-center">
          Si basa sulla libreria Embla Carousel. Per maggiori info{' '}
          <Link
            className="font-bold underline-offset-4 hover:underline"
            to="https://www.embla-carousel.com/"
            rel="noreferrer"
            target="_blank"
          >
            clicca qui
          </Link>
        </p>
      </div>
      <Container maxWidth="sm" className="mt-8">
        <CarouselSections />
      </Container>
    </Container>
  );
}
