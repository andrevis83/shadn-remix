import type { MetaFunction } from "@remix-run/node";
import Drawer from "~/components/Drawer";
import AccordionDemo from "~/components/test";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix!",
    },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
      }}
    >
      <Drawer />
      <AccordionDemo />
    </div>
  );
}
