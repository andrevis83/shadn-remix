import React from 'react';
import { Flex } from '~/common/Flex';

export default function FlexAlign() {
  return (
    <>
      <Flex className="bg-gray-500 h-20 items-start">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-4 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-6 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 h-20 mt-10 items-center gap-4 ">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-4 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-6 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 h-20 mt-10 items-end gap-4 ">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-4 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-6 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 h-20 mt-10 items-baseline gap-4 ">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-4 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-6 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 h-20 mt-10 items-stretch gap-4 ">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-4 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-6 rounded-sm">item3</div>
      </Flex>
    </>
  );
}
