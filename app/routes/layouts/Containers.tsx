import React from 'react';
import { Container } from '~/common/Container';

export default function Containers() {
  return (
    <>
      <Container className="bg-gray-300">
        <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
          default container
          <p className="text-center text-sm">
            Non ha max-width e occuperà il 100% dello spazio a disposizione
          </p>
        </div>
      </Container>
      <Container className="mt-10 bg-gray-300" maxWidth="sm">
        <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
          sm container
          <p className="text-center text-sm">max-width: 640px(default)</p>
        </div>
      </Container>
      <Container asChild className="mt-10 bg-gray-300" maxWidth="md">
        <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
          md container
          <p className="text-center text-sm">max-width: 768px(default)</p>
        </div>
      </Container>
      <Container className="mt-10 bg-gray-300" maxWidth="lg">
        <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
          lg container
          <p className="text-center text-sm">max-width: 1024px(default)</p>
        </div>
      </Container>
      <Container className="mt-10 bg-gray-300" maxWidth="xl">
        <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
          xl container
          <p className="text-center text-sm">max-width: 1280px(default)</p>
        </div>
      </Container>
      <Container className="mt-10 bg-gray-300" maxWidth="2xl">
        <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
          2xl container
          <p className="text-center text-sm">max-width: 1536px(default)</p>
        </div>
      </Container>
      <Container asChild className="mt-10 bg-gray-300">
        <section>
          <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
            Se si usa la prop asChild, si può customizzare il tag HTML
            dell&apos;elemento container
            <p className="text-center text-sm">
              Non ha max-width e occuperà il 100% dello spazio a disposizione
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
