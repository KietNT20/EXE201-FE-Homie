import { transactionService } from '@/services/transactionService';
import { useQuery } from '@tanstack/react-query';

export const useGetTransactionById = (transactionId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['transactionDetails', { transactionId }],
    queryFn: () => transactionService.getTransactionById(transactionId),
    enabled: !!transactionId,
  });

  return {
    data,
    ...rest,
  };
};

export const useGetTransactionByUserId = (userId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['transactionByUserId'],
    queryFn: () => transactionService.getTransactionByUserId(userId),
    enabled: !!userId,
  });

  return {
    data,
    ...rest,
  };
};
