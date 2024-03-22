import type { MaxWidth } from '~/common/Container';

type ContainerItem = {
  asChild: boolean;
  id: number;
  maxWidth?: MaxWidth;
  subtitle: string;
  title: string;
};

export const CONTAINERS_ITEMS: ContainerItem[] = [
  {
    id: 1,
    subtitle: 'Non ha max-width e occuperà il 100% dello spazio a disposizione',
    title: 'default container',
    asChild: false,
  },
  {
    id: 2,
    maxWidth: 'sm',
    subtitle: 'max-width: 640px',
    title: 'sm container',
    asChild: false,
  },
  {
    id: 3,
    maxWidth: 'md',
    subtitle: 'max-width: 768px',
    title: 'md container',
    asChild: false,
  },
  {
    id: 4,
    maxWidth: 'lg',
    subtitle: 'max-width: 1024px',
    title: 'lg container',
    asChild: false,
  },
  {
    id: 5,
    maxWidth: 'xl',
    subtitle: 'max-width: 1280px',
    title: 'xl container',
    asChild: false,
  },
  {
    id: 6,
    maxWidth: '2xl',
    subtitle: 'max-width: 1536px',
    title: '2xl container',
    asChild: false,
  },
  {
    id: 7,
    subtitle: 'Non ha max-width e occuperà il 100% dello spazio a disposizione',
    title:
      'Se si usa la prop asChild, si può customizzare il tag HTML dell&apos;elemento container',
    asChild: true,
  },
];
