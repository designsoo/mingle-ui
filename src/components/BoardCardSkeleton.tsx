interface BoardCardSkeletonProps {
  cardWidth?: string;
}

const BoardCardSkeleton = ({ cardWidth = '100%' }: BoardCardSkeletonProps) => {
  return (
    <article
      style={{ width: `${cardWidth}` }}
      className='h-[320px] w-[265px] overflow-hidden rounded-2xl bg-neutral-900 p-4'
    >
      <div className='flex h-full w-full flex-col justify-end'>
        <div className='flex h-[136px] w-full flex-col justify-between rounded-xl bg-neutral-800 p-3'>
          <div className='h-6 w-32 animate-pulse rounded-md bg-neutral-700'></div>
          <div className='h-6 w-40 animate-pulse rounded-md bg-neutral-700'></div>
          <ul className='flex w-full gap-2'>
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={`emoji-list-${index}`} className='w-full'>
                <div className='h-8 w-full animate-pulse rounded-full bg-neutral-700'></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BoardCardSkeleton;
