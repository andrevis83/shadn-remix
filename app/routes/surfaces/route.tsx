import { Container } from '~/common/Container';
import AccordionSections from './Accordion';
export default function SurfacesPage() {
  return (
    <Container className="pb-4">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina dei surfaces
      </h1>
      <Container maxWidth="sm">
        <AccordionSections />
      </Container>
    </Container>
  );
}
