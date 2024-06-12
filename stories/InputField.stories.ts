import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../src/components/InputField';

const meta = {
  title: 'InputField/InputField',
  component: InputField,
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
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    isError: {
      control: 'boolean',
      description: '에러 유무',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'email is required',
    isError: true,
  },
};
