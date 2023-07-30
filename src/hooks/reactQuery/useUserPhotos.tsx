import { FEED_LIMIT_PER_PAGE } from '@main/constants';
import { getUserPhotos } from '@main/endpoints/user';
import { useInfiniteQuery } from '@tanstack/react-query';

export type UseUserPhotos = {
  userName: string;
};
export const useUserPhotos = (props: UseUserPhotos) => {
  const { userName } = props;
  return useInfiniteQuery({
    queryKey: ['userPhotos', userName],
    queryFn: ({ pageParam = 1 }) =>
      getUserPhotos({
        page: pageParam,
        userName,
        perPage: FEED_LIMIT_PER_PAGE
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.length === FEED_LIMIT_PER_PAGE
        ? allPages.length + 1
        : undefined,
    enabled: !!userName
  });
};
