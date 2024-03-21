import Accordions from './Accordion.Single';

export default function AccordionSections() {
  return (
    <>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Single accordion
        </h2>
        <Accordions />
      </section>
      <section className="mt-20">
        <h2 className="mt-4 mb-4 text-center leading-none text-3xl tracking-tight md:text-4xl lg:text-5xl">
          Multiple accordion
        </h2>
        <Accordions type="multiple" />
      </section>
    </>
  );
}
