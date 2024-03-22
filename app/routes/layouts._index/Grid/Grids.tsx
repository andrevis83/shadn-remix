import { Grid } from '~/common/Grid';
import { cn } from '~/lib/utils';

export default function Grids() {
  return (
    <>
      <Grid className="bg-gray-500 gap-4 rounded-lg">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`grid-${index}`}
            className="bg-gray-300 px-3 py-1 rounded-sm text-center"
          >
            item {index + 1}
          </div>
        ))}
      </Grid>
      <Grid className="bg-gray-500 mt-10 gap-4 rounded-lg grid-cols-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`grid-${index}`}
            className="bg-gray-300 px-3 py-1 rounded-sm text-center"
          >
            item {index + 1}
          </div>
        ))}
      </Grid>
      <Grid className="bg-gray-500 mt-10 gap-4 rounded-lg grid-cols-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`grid-${index}`}
            className="bg-gray-300 px-3 py-1 rounded-sm text-center"
          >
            item {index + 1}
          </div>
        ))}
      </Grid>
      <Grid className="bg-gray-500 mt-10 gap-4 rounded-lg grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`grid-${index}`}
            className="bg-gray-300 px-3 py-1 rounded-sm text-center"
          >
            item {index + 1}
          </div>
        ))}
      </Grid>
      <Grid className="bg-gray-500 mt-10 gap-4 rounded-lg grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`grid-${index}`}
            className={cn(
              'bg-gray-300 px-3 py-1 rounded-sm text-center',
              index === 4 && 'col-span-2',
              index === 8 && 'col-span-3'
            )}
          >
            item {index + 1}
          </div>
        ))}
      </Grid>
    </>
  );
}
