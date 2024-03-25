import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardMedia,
  CardTitle,
} from '~/common/Card';
import { Container } from '~/common/Container';

export default function CardPage() {
  return (
    <Container className="pb-4" maxWidth="sm">
      <h1 className="mt-4 mb-4 text-center leading-none text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Pagina delle card
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardMedia>
          <CardImage src="https://picsum.photos/1920/1080" />
        </CardMedia>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          voluptatem debitis doloremque incidunt excepturi cum, maiores nemo hic
          ipsum reprehenderit, commodi nam eius culpa perferendis nostrum
          deserunt nobis obcaecati explicabo!
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Container>
  );
}
