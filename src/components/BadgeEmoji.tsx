interface BadgeEmojiProps {
  emoji: string;
  count: number;
}

const BadgeEmoji = ({ emoji, count }: BadgeEmojiProps) => {
  return (
    <div className='h-8 gap-1 rounded-full px-3 flexbox-row color-background-opacity-white-10'>
      <span className='text-base-14'>{emoji}</span>
      <span className='text-base-14 color-text-primary'>{count}</span>
    </div>
  );
};

export default BadgeEmoji;
