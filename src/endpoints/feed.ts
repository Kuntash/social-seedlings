import { FEED_LIMIT_PER_PAGE } from '@main/constants';

export const getFeeds = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=${FEED_LIMIT_PER_PAGE}`
    );

    if (response?.ok) {
      return await response.json();
    }
    throw Error('Error while fetching feeds');
  } catch (error) {
    console.error('Error while fetching feeds', error);
    throw error;
  }
};
