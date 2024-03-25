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

export default function CardBlock() {
  return (
    <div className="mt-12 mb-4">
      <h2 className="text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
        Card (default)
      </h2>
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
    </div>
  );
}
