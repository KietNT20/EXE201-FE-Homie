import { eWalletService } from '@/services/eWalletService';
import { useQuery } from '@tanstack/react-query';

export const useGetEWalletByUserId = (userId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['eWallet'],
    queryFn: () => eWalletService.getWalletByUserId(userId),
    enabled: !!userId,
    staleTime: 0,
  });
  return {
    data,
    ...rest,
  };
};
