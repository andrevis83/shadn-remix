import { Container } from '~/common/Container';
import {
  Buttons,
  ButtonsError,
  ButtonsLink,
  ButtonsOutline,
  ButtonsSecondary,
  ButtonsSuccess,
} from './sections';

export default function LayoutsPage() {
  return (
    <Container maxWidth="sm">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina dei Buttons
      </h1>
      <Buttons />
      <ButtonsSecondary />
      <ButtonsOutline />
      <ButtonsError />
      <ButtonsSuccess />
      <ButtonsLink />
    </Container>
  );
}
