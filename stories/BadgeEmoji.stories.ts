import type { Meta, StoryObj } from '@storybook/react';
import BadgeEmoji from '../src/components/BadgeEmoji';

const meta = {
  title: 'Badge/BadgeEmoji',
  component: BadgeEmoji,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    emoji: {
      control: 'text',
      description: '선택된 emoji',
    },
    count: {
      control: 'number',
      description: 'emoji 총 개수',
    },
  },
} satisfies Meta<typeof BadgeEmoji>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    emoji: '🥳',
    count: 10,
  },
};
