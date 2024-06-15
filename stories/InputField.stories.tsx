import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../src/components/InputField';

const meta = {
  title: 'InputField/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
      description: 'label의 text',
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
    isRequired: {
      control: 'boolean',
      description: '필수 요소 유무',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <InputField {...args} />
    </FormProvider>
  );
};

export const EmailField: Story = Template.bind({});
EmailField.args = {
  label: 'email',
  name: 'email',
  type: 'email',
  placeholder: 'Email',
  errorMessage: 'Email is required',
  isRequired: true,
};

export const PasswordField: Story = Template.bind({});
PasswordField.args = {
  label: 'password',
  name: 'password',
  type: 'password',
  placeholder: 'Password',
  errorMessage: 'Password is required',
  isRequired: true,
};
