import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../src/components/InputField';

const meta: Meta<typeof InputField> = {
  title: 'InputField/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story {...context} args={{ ...context.args, formMethod: methods }} />
        </FormProvider>
      );
    },
  ],
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
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailField: Story = {
  args: {
    label: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'Email is required',
    isRequired: true,
  },
};

export const PasswordField: Story = {
  args: {
    label: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage: 'Password is required',
    isRequired: true,
  },
};
