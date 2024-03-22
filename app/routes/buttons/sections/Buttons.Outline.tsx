import { Button } from '~/common/Button';

export default function ButtonsOutline() {
  return (
    <div className="mt-12 mb-4 ">
      <h2 className="text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
        Buttons outlined
      </h2>
      <div className="mt-6 flex items-center justify-center gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="md" variant="outline">
          Medium
        </Button>
        <Button size="lg" variant="outline">
          Large
        </Button>
      </div>
    </div>
  );
}
