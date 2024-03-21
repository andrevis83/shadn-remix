import { Link } from '@remix-run/react';
import { Container } from '~/common/Container';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Link to="/buttons">Buttons</Link>
      <Link to="/layouts">Layouts</Link>
    </Container>
  );
}
