const CLOUDFLARE_URL = 'https://imagedelivery.net/gHftqKLNBQ-NOWw8XS0zUw';
const ICON_SIZE_20 = 'width=20,height=20';
const ICON_SIZE_16 = 'width=16,height=16';

export const SVGS = {
  eye: {
    on: {
      url: `${CLOUDFLARE_URL}/6c54eafe-3e97-4c82-2ac5-f6d44ca95100/${ICON_SIZE_20}`,
      alt: 'show password',
    },
    off: {
      url: `${CLOUDFLARE_URL}/159fda3c-e69a-4c20-44cf-3d477efda000/${ICON_SIZE_20}`,
      alt: 'hide password',
    },
  },
  empty: {
    url: `${CLOUDFLARE_URL}/f1d8565c-836e-4fc1-42fd-1b1364da7b00/${ICON_SIZE_20}`,
    alt: 'empty icon',
  },
  arrow: {
    up: {
      url: `${CLOUDFLARE_URL}/10c20999-b186-4950-8625-bd0c1acf8900/${ICON_SIZE_16}`,
      alt: 'arrow up',
    },
    down: {
      url: `${CLOUDFLARE_URL}/35b2aade-a28e-4e15-77ba-485774a91e00/${ICON_SIZE_16}`,
      alt: 'arrow down',
    },
  },
  find: {
    url: `${CLOUDFLARE_URL}/bfd078e7-fede-46f3-23e0-4cbbe4f48500/${ICON_SIZE_20}`,
    alt: 'find paper icon',
  },
};
