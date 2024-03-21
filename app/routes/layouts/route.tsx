import { Container } from '~/common/Container';
import Containers from './Containers';
import FlexJustify from './Flex.Justify';
import FlexAlign from './Flex.Align';

export default function LayoutsPage() {
  return (
    <Container className="pb-4">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina dei Layouts
      </h1>
      <p className="text-lg text-center mb-8">
        Ridimensiona la pagina per vederne gli effetti
      </p>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Containers
        </h2>
        <Containers />
      </section>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Flex : align-items
        </h2>
        <FlexAlign />
      </section>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Flex : justify-content
        </h2>
        <FlexJustify />
      </section>
    </Container>
  );
}
