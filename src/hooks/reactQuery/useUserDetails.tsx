import { getUserDetails } from '@main/endpoints/user';
import { useQuery } from '@tanstack/react-query';

export const useUserDetails = (props: { userName: string }) => {
  const { userName } = props;
  return useQuery({
    queryKey: ['userDetails', userName],
    queryFn: () => getUserDetails(userName),
    enabled: !!userName,
    retry: false
  });
};
