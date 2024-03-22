enum AlignItemsVariant {
  start = 'items-start',
  center = 'items-center',
  end = 'items-end',
  baseline = 'items-baseline',
  stretch = 'items-stretch',
}

type AlignItemsItem = {
  asChild: boolean;
  id: number;
  variant: AlignItemsVariant;
};

export const FLEX_ALIGN_ITEMS: AlignItemsItem[] = [
  {
    id: 1,
    variant: AlignItemsVariant.start,
    asChild: false,
  },
  {
    id: 2,
    variant: AlignItemsVariant.center,
    asChild: false,
  },
  {
    id: 3,
    variant: AlignItemsVariant.end,
    asChild: false,
  },
  {
    id: 4,
    variant: AlignItemsVariant.baseline,
    asChild: false,
  },
  {
    id: 5,
    variant: AlignItemsVariant.stretch,
    asChild: false,
  },
];

enum JustifyContentVariant {
  start = 'justify-start',
  center = 'justify-center',
  end = 'justify-end',
  around = 'justify-around',
  between = 'justify-between',
  evenly = 'justify-evenly',
}
type JustifyContentItem = {
  asChild: boolean;
  id: number;
  variant: JustifyContentVariant;
};

export const JUSTIFY_CONTENT_ITEMS: JustifyContentItem[] = [
  {
    id: 1,
    variant: JustifyContentVariant.start,
    asChild: false,
  },
  {
    id: 2,
    variant: JustifyContentVariant.center,
    asChild: false,
  },
  {
    id: 3,
    variant: JustifyContentVariant.end,
    asChild: false,
  },
  {
    id: 4,
    variant: JustifyContentVariant.around,
    asChild: false,
  },
  {
    id: 5,
    variant: JustifyContentVariant.between,
    asChild: false,
  },
  {
    id: 6,
    variant: JustifyContentVariant.evenly,
    asChild: false,
  },
];
