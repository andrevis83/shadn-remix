import { Flex } from '~/common/Flex';
import { JUSTIFY_CONTENT_ITEMS } from '../constants/Flexes';
import { cn } from '~/lib/utils';

export default function FlexJustify() {
  return JUSTIFY_CONTENT_ITEMS.map((item, index) => (
    <Flex
      key={item.id}
      className={cn(
        'bg-gray-500 gap-4 rounded-lg',
        item.variant,
        index > 0 && 'mt-10'
      )}
    >
      <div className="bg-gray-300 px-3 py-1 rounded-sm">item1</div>
      <div className="bg-gray-300 px-3 py-1 rounded-sm">item2</div>
      <div className="bg-gray-300 px-3 py-1 rounded-sm">item3</div>
    </Flex>
  ));
}
