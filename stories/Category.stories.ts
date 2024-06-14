import type { Meta, StoryObj } from '@storybook/react';
import Category from '../src/components/Category';

const meta = {
  title: 'Category/Category',
  component: Category,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: 'Category 내용',
    },
  },
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Family',
  },
};
