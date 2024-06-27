import { SVGS } from '@/constants';
const {
  find: { url, alt },
} = SVGS;

const EmptyCard = () => {
  return (
    <div className='flex h-[400px] w-full overflow-hidden rounded-2xl border-2 border-dashed border-neutral-800 p-4 flexbox-row'>
      <div className='gap-2 flexbox-column'>
        <img src={url} alt={alt} width={48} height={48} />
        <span className='text-bold-16 text-neutral-500'>
          Mingle Paper Not Found
        </span>
      </div>
    </div>
  );
};

export default EmptyCard;
