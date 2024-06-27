import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../src/components/ConfirmModal';
import PrimaryButton from '../src/components/PrimaryButton';

const meta = {
  title: 'Modals/ConfirmModal',
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    openModal: true,
    iconUrl:
      'https://imagedelivery.net/gHftqKLNBQ-NOWw8XS0zUw/59d76585-93c4-476e-ffbf-ecaadd5ddd00/width=20,height=20',
    iconAlt: 'delete icon',
    iconSize: 58,
    title: 'Confirm Modal',
    desc: 'Are you sure you want to proceed?',
    children: PrimaryButton({
      size: 'md',
      children: 'Cancel',
      variant: 'stroke',
    }),
    onClose: () => {},
  },
};
