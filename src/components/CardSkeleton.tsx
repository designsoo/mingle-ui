const EmptyCard = () => {
  return (
    <div className='flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 p-4'>
      <div className='relative h-[240px] overflow-hidden rounded-xl p-4 pt-11 color-background-opacity-white-5'>
        <div className='absolute right-4 top-4 h-7 w-16 animate-pulse rounded bg-neutral-700'></div>
        <div className='mb-5 h-7 w-[180px] animate-pulse rounded-lg bg-neutral-700'></div>
        <ul className='flex flex-col gap-2'>
          {Array.from({ length: 5 }).map((_, idx: number) => (
            <li key={`empty-contents-${idx}`} className='h-5 w-full animate-pulse rounded bg-neutral-700'></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmptyCard;
