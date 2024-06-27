import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardSkeleton from '../src/components/CardSkeleton';

const meta = {
  title: 'Cards/CardSkeleton',
  component: CardSkeleton,
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
} satisfies Meta<typeof CardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
