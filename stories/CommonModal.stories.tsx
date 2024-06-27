import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import CommonModal from '../src/components/CommonModal';
import PrimaryButton from '../src/components/PrimaryButton';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../src/components/Input';

const meta = {
  title: 'Modals/CommonModal',
  component: CommonModal,
} satisfies Meta<typeof CommonModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm();
    return (
      <CommonModal {...args}>
        <FormProvider {...methods}>
          <Input
            formMethod={methods}
            name='password'
            type='password'
            placeholder='Password'
          />
        </FormProvider>
      </CommonModal>
    );
  },
  args: {
    openModal: true,
    title: 'Common Modal',
    children: PrimaryButton({
      size: 'md',
      children: 'Cancel',
      variant: 'stroke',
    }),
    onClose: () => {},
  },
};
