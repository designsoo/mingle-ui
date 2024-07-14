import arrow_down from '/src/assets/ic-arrow-down.svg';
import arrow_up from '/src/assets/ic-arrow-up.svg';
import eye_on from '/src/assets/ic-eye-on.svg';
import eye_off from '/src/assets/ic-eye-off.svg';
import empty from '/src/assets/ic-empty.svg';
import find_card from '/src/assets/ic-find-card.svg';

export const SVGS = {
  eye: {
    on: {
      url: eye_on,
      alt: 'show password',
    },
    off: {
      url: eye_off,
      alt: 'hide password',
    },
  },
  empty: {
    url: empty,
    alt: 'empty icon',
  },
  arrow: {
    up: {
      url: arrow_up,
      alt: 'arrow up',
    },
    down: {
      url: arrow_down,
      alt: 'arrow down',
    },
  },
  find: {
    url: find_card,
    alt: 'find paper icon',
  },
};
