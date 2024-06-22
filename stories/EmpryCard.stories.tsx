import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmptyCard from '../src/components/EmptyCard';

const meta = {
  title: 'Cards/EmptyCard',
  component: EmptyCard,
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
} satisfies Meta<typeof EmptyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
