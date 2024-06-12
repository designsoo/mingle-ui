import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../src/components/ErrorMessage';

const meta = {
  title: 'Text/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: 'ErrorMessage 내용',
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email is required.',
  },
};
