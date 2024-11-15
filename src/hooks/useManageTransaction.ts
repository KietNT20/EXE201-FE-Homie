import { transactionService } from '@/services/transactionService';
import { useQuery } from '@tanstack/react-query';

export const useGetTransactionById = (id: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['transactionDetails', id],
    queryFn: () => transactionService.getTransactionById(id),
    enabled: !!id,
    throwOnError: false,
  });

  return {
    data,
    ...rest,
  };
};

export const useGetTransactionByUserId = (userId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['transactionByUserId', userId],
    queryFn: () => transactionService.getTransactionByUserId(userId),
    enabled: !!userId,
    throwOnError: false,
  });

  return {
    data,
    ...rest,
  };
};
