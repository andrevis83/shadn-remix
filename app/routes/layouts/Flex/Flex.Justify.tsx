import { Flex } from '~/common/Flex';

export default function FlexJustify() {
  return (
    <>
      <Flex className="bg-gray-500 gap-4 rounded-lg">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 mt-10 justify-start gap-4">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 mt-10 justify-center gap-4">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 mt-10 justify-end gap-4">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 mt-10 justify-between gap-4">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 mt-10 justify-around gap-4">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
      </Flex>
      <Flex className="bg-gray-500 mt-10 justify-evenly gap-4">
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
        <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
      </Flex>
    </>
  );
}
