import { Flex } from '~/common/Flex';
import { FLEX_ALIGN_ITEMS } from '../constants/Flexes';
import { cn } from '~/lib/utils';

export default function FlexAlign() {
  return FLEX_ALIGN_ITEMS.map((item, index) => (
    <Flex
      key={item.id}
      className={cn(
        'bg-gray-500 h-28 gap-4 rounded-lg',
        item.variant,
        index > 0 && 'mt-10'
      )}
    >
      <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
      <div className="bg-gray-300 px-3 py-4 rounded-sm">item2</div>
      <div className="bg-gray-300 px-3 py-6 rounded-sm">item3</div>
    </Flex>
  ));
}
