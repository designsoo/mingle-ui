import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmptyBoardCard from '../src/components/EmptyBoardCard';

const meta = {
  title: 'Cards/EmptyBoardCard',
  component: EmptyBoardCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EmptyBoardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
