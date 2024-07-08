const EmptyBoardCard = () => {
  return (
    <div className='flex h-[320px] w-[265px] flex-col items-center justify-between rounded-2xl border-2 border-dashed border-neutral-800 p-4'>
      <div className='w-full grow gap-2 flexbox-column'>
        <span className='text-bold-16 text-neutral-500'>Mingle Board Not Found</span>
      </div>
      <div className='flex h-[136px] w-full flex-col justify-between rounded-lg border border-dashed border-neutral-700 p-3'>
        <div className='h-6 w-32 rounded-md border border-dashed border-neutral-700'></div>
        <div className='h-6 w-40 rounded-md border border-dashed border-neutral-700'></div>
        <ul className='flex w-full gap-2'>
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={`emoji-list-${index}`} className='w-full'>
              <div className='h-8 w-full rounded-full border border-dashed border-neutral-700'></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmptyBoardCard;
