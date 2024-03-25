import { Container } from '~/common/Container';

import { Outlet } from '@remix-run/react';

export default function CardsPage() {
  return (
    <Container className="pb-4">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina delle cards
      </h1>
      <Outlet />
    </Container>
  );
}
