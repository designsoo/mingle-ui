import type { Meta, StoryObj } from '@storybook/react';
import Label from '../src/components/Label';

const meta = {
  title: 'Text/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'label의 for',
    },
    children: {
      control: 'text',
      description: 'label 내용',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'email',
    children: 'email',
  },
};
