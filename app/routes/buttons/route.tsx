import { Button } from '~/common/Button';
import { Container } from '~/common/Container';

export default function LayoutsPage() {
  return (
    <Container>
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina dei Buttons
      </h1>
      <div className="pl-4 flex items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </Container>
  );
}
