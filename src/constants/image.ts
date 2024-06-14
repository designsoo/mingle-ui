const CLOUDFLARE_URL = 'https://imagedelivery.net/gHftqKLNBQ-NOWw8XS0zUw/';
const ICON_SIZE_20 = 'width=20,height=20';

export const SVGS = {
  eye: {
    on: {
      url: `${CLOUDFLARE_URL}6c54eafe-3e97-4c82-2ac5-f6d44ca95100/${ICON_SIZE_20}`,
      alt: 'show icon',
    },
    off: {
      url: `${CLOUDFLARE_URL}159fda3c-e69a-4c20-44cf-3d477efda000/${ICON_SIZE_20}`,
      alt: 'off icon',
    },
  },
  empty: {
    url: `${CLOUDFLARE_URL}f1d8565c-836e-4fc1-42fd-1b1364da7b00/${ICON_SIZE_20}`,
    alt: 'empty icon',
  },
};
