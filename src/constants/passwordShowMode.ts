import { SVGS } from './image';
const { eye } = SVGS;

export const PASSWORD_SHOW_MODE = {
  on: {
    iconEye: eye.on.url,
    showMode: eye.on.alt,
    inputType: 'text',
  },
  off: {
    iconEye: eye.off.url,
    showMode: eye.off.alt,
    inputType: 'password',
  },
};
