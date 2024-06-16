import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'InputField/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    name: {
      control: 'text',
      description: 'Input의 name',
    },
    type: {
      control: 'text',
      description: 'Input의 type',
    },
    formMethod: {
      control: 'object',
      description: 'react-hook-form의 메소드',
    },
    placeholder: {
      control: 'text',
      description: 'Input의 placeholder',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    isRequired: {
      control: 'boolean',
      description: '필수 요소 유무',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Input {...args} formMethod={methods} />
    </FormProvider>
  );
};

export const Email: Story = Template.bind({});
Email.args = {
  id: 'email',
  name: 'email',
  type: 'email',
  placeholder: 'Email',
  errorMessage: 'Email is required',
  isRequired: true,
};

export const Password: Story = Template.bind({});
Password.args = {
  id: 'password',
  name: 'password',
  type: 'password',
  placeholder: 'Password',
  errorMessage: 'Password is required',
  isRequired: true,
};
