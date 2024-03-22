import { Button } from '~/common/Button';

export default function ButtonsError() {
  return (
    <div className="mt-12 mb-4 ">
      <h2 className="text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
        Buttons error
      </h2>
      <div className="mt-6 flex items-center justify-center gap-2">
        <Button size="sm" variant="error">
          Small
        </Button>
        <Button size="md" variant="error">
          Medium
        </Button>
        <Button size="lg" variant="error">
          Large
        </Button>
      </div>
    </div>
  );
}
