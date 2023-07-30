import { getFeeds } from '@main/endpoints/feed';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteFeeds = () => {
  return useInfiniteQuery({
    queryKey: ['feeds'],
    queryFn: () => getFeeds(),
    getNextPageParam: () => true,
    retry: false,
    retryOnMount: false
  });
};
