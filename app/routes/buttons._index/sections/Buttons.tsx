import { Button } from '~/common/Button';

export default function Buttons() {
  return (
    <div className="mt-12 mb-4">
      <h2 className="text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
        Buttons primary (default)
      </h2>
      <div className="mt-6 flex items-center justify-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
}
