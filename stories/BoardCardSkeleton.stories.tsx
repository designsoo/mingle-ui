import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BoardCardSkeleton from '../src/components/BoardCardSkeleton';

const meta = {
  title: 'Cards/BoardCardSkeleton',
  component: BoardCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  decorators: (Story) => (
    <div style={{ width: '320px' }}>
      <Story />
    </div>
  ),
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BoardCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
