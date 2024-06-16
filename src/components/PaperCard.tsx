import Category from '@/components/Category';

interface PaperCardProps {
  category: string;
  fromName: string;
  description: string;
  backgroundImage: string;
}

const PaperCard = ({
  category,
  fromName,
  description,
  backgroundImage,
}: PaperCardProps) => {
  function createMarkup(html: string) {
    return { __html: html };
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className='flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-neutral-800 p-4'
    >
      <div className='relative h-[240px] overflow-hidden rounded-xl p-4 pt-11 color-background-opacity-black-70'>
        <div className='absolute right-4 top-4'>
          <Category>{category}</Category>
        </div>
        <h2 className='pb-3 text-bold-18 text-neutral-200'>{fromName}</h2>
        <p
          dangerouslySetInnerHTML={createMarkup(description)}
          className='scroll-bar-sm h-[140px] overflow-y-scroll pr-2 text-base-16 text-neutral-400'
        ></p>
      </div>
    </div>
  );
};

export default PaperCard;
