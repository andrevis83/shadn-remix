import { Container } from '~/common/Container';
import { CardBlock, CardInline, CardInlineReverse } from './sections';

export default function CardPage() {
  return (
    <Container>
      <Container maxWidth="sm">
        <CardBlock />
      </Container>
      <CardInline />
      <CardInlineReverse />
    </Container>
  );
}
