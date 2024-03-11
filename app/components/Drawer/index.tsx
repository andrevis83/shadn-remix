import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

interface DrawerProps {}

function Drawer({}: DrawerProps) {
  return (
    <DrawerPrimitive.Root shouldScaleBackground>
      <DrawerPrimitive.Trigger>Open</DrawerPrimitive.Trigger>
      <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-black/40" />
        <DrawerPrimitive.Content className="bg-zinc-100 flex flex-col mt-24 fixed bottom-0 left-0 right-0">
          <p>Content</p>
        </DrawerPrimitive.Content>
        <DrawerPrimitive.Overlay />
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
}

export default Drawer;
