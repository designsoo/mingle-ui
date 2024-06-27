import Category from '@/components/Category';
import { getDateDiff } from '@/utils/getDateDiff';

interface PaperCardProps {
  category: string;
  fromName: string;
  description: string;
  backgroundImage: string;
  createdAt: string;
}

const PaperCard = ({ category, fromName, description, backgroundImage, createdAt }: PaperCardProps) => {
  function createMarkup(html: string) {
    return { __html: html };
  }

  const daysElapsed = getDateDiff(createdAt);
  const isNew = daysElapsed < 3;

  return (
    <article
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className='relative flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-neutral-800 p-4'
    >
      <div className='relative flex h-[230px] flex-col justify-end overflow-hidden rounded-xl p-4 color-background-opacity-black-70'>
        <div className='absolute right-4 top-4 flex gap-2'>
          {isNew && (
            <div className='rounded px-2 backdrop-blur-lg color-background-opacity-yellow-20'>
              <span className='text-center text-base-12 text-yellow-300'>New</span>
            </div>
          )}
          <Category>{category}</Category>
        </div>

        <div>
          <h2 className='pb-3 text-bold-18 text-neutral-200'>{fromName}</h2>
          <p
            tabIndex={0}
            dangerouslySetInnerHTML={createMarkup(description)}
            className='scroll-bar-sm h-[120px] overflow-y-scroll pr-2 text-base-16 text-neutral-400'
          ></p>
        </div>
      </div>
    </article>
  );
};

export default PaperCard;
