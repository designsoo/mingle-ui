interface BadgeEmojiProps {
  emoji: string;
  count: string;
}

const BadgeEmoji = ({ emoji, count }: BadgeEmojiProps) => {
  return (
    <div className='color-background-opacity-white-10 h-8 gap-1 rounded-full px-3 flexbox-row'>
      <span className='text-base-14'>{emoji}</span>
      <span className='color-text-primary text-base-14'>{count}</span>
    </div>
  );
};

export default BadgeEmoji;
