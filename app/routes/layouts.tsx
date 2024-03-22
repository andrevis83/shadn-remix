import { Outlet } from '@remix-run/react';
import { Container } from '~/common/Container';

export default function LayoutsPage() {
  return (
    <Container className="pb-4">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina dei Layouts
      </h1>
      <p className="text-lg text-center mb-8">
        Ridimensiona la pagina per vederne gli effetti
      </p>
      <Outlet />
    </Container>
  );
}
