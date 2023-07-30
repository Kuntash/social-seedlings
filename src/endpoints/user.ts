export const getUserDetails = async (userName: string) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/users/${userName}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    );

    console.log('🚀 ~ file: feed.ts:8 ~ getFeeds ~ response:', response);
    if (response?.ok) {
      return await response.json();
    }
    throw Error('Error while fetching feeds');
  } catch (error) {
    console.error('Error while fetching user details', error);
    throw error;
  }
};
export const getUserPhotos = async (payload: {
  userName: string;
  perPage: number;
  page: number;
}) => {
  const { page, perPage, userName } = payload;
  try {
    const response = await fetch(
      `https://api.unsplash.com/users/${userName}/photos?page=${page}&per_page=${perPage}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    );

    console.log('🚀 ~ file: feed.ts:8 ~ getFeeds ~ response:', response);
    if (response?.ok) {
      return await response.json();
    }
    throw Error('Error while fetching feeds');
  } catch (error) {
    console.error('Error while fetching user details', error);
    throw error;
  }
};
