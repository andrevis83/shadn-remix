import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/common/Card';
import { Container } from '~/common/Container';

export default function CardPage() {
  return (
    <Container className="pb-4">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina delle card
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Container>
  );
}
