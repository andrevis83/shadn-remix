import { Container } from '~/common/Container';
import { CONTAINERS_ITEMS } from '../constants/Containers';
import { cn } from '~/lib/utils';
import type { MaxWidth } from '~/common/Container';

function getValidMaxWidth(maxWidth: MaxWidth) {
  const validMaxWidths = ['sm', 'md', 'lg', 'xl', '2xl', undefined];
  if (!maxWidth) {
    return undefined;
  }

  return validMaxWidths.includes(maxWidth)
    ? (maxWidth as 'sm' | 'md' | 'lg' | 'xl' | '2xl')
    : undefined;
}

export default function Containers() {
  return CONTAINERS_ITEMS.map((item, index) => (
    <Container
      key={item.id}
      className={cn('bg-gray-300', index > 0 && 'mt-10')}
      maxWidth={getValidMaxWidth(item.maxWidth)}
    >
      {item.asChild ? (
        <section>
          <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
            {item.title}
            <p className="text-center text-sm">{item.subtitle}</p>
          </div>
        </section>
      ) : (
        <div className="w-full h-32 flex flex-col gap-2 items-center justify-center">
          {item.title}
          <p className="text-center text-sm">{item.subtitle}</p>
        </div>
      )}
    </Container>
  ));
}
