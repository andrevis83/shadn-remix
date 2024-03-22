import FlexJustify from './Flex.Justify';
import FlexAlign from './Flex.Align';

export default function FlexSections() {
  return (
    <>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Flex : align-items
        </h2>
        <FlexAlign />
      </section>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Flex : justify-content
        </h2>
        <FlexJustify />
      </section>
    </>
  );
}
