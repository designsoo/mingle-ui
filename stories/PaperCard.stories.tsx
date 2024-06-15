import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PaperCrad from '../src/components/PaperCrad';

const meta = {
  title: 'Cards/PaperCrad',
  component: PaperCrad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <div style={{ width: '320px' }}>
      <Story />
    </div>
  ),

  argTypes: {
    category: {
      control: 'text',
      description: '받는 사람과의 관계',
    },
    fromName: {
      control: 'text',
      description: '작성자',
    },
    description: {
      control: 'text',
      description: '편지 내용',
    },
    backgroundImage: {
      control: 'text',
      description: '배경 이미지',
    },
  },
} satisfies Meta<typeof PaperCrad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'Friend',
    fromName: 'Jennie',
    description: `🥳💖Lorem ipsum dolor sit amet consectetur. Scelerisque m aecenas cras nunc lacus magnis. Fermentum luctus quam sed dignissim. Egestas orci in nibh egestas curabitur ultricies laoreet turpis cras. Placerat in orci vel amet neque morbi.
    Lorem ipsum dolor sit amet consectetur. Scelerisque m aecenas cras nunc lacus magnis. Fermentum luctus quam sed dignissim. Egestas orci in nibh egestas curabitur ultricies laoreet turpis cras. Placerat in orci vel amet neque morbi.`,
    backgroundImage:
      'https://imagedelivery.net/gHftqKLNBQ-NOWw8XS0zUw/ad73a38f-1a45-4bc6-488a-e22bc61a2100/width=600,height=800',
  },
};
