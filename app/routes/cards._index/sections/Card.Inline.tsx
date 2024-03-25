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

export default function CardInline() {
  return (
    <div className="mt-12 mb-4">
      <h2 className="text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
        Card inline
      </h2>
      <Card className="flex">
        <CardMedia>
          <CardImage src="https://picsum.photos/1920/1080" />
        </CardMedia>
        <div className="flex flex-col justify-center p-4">
          <CardHeader className="p-0 mt-4">
            <CardTitle>Card Title</CardTitle>
            <CardDescription className="mt-2">Card Description</CardDescription>
          </CardHeader>
          <CardContent className="p-0 my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptatem debitis doloremque incidunt excepturi cum, maiores nemo
            hic ipsum reprehenderit, commodi nam eius culpa perferendis nostrum
            deserunt nobis obcaecati explicabo!
          </CardContent>
          <CardFooter className="p-0">
            <p>Card Footer</p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
