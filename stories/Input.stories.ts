import type { Meta, StoryObj } from '@storybook/react';
import Input from '../src/components/Input';

const meta = {
  title: 'InputField/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    id: {
      control: 'text',
      description: 'Input의 id',
    },
    name: {
      control: 'text',
      description: 'Input의 name',
    },
    type: {
      control: 'text',
      description: 'Input의 type',
    },
    placeholder: {
      control: 'text',
      description: 'Input의 placeholder',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
};
