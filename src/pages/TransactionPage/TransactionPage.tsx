import { PATH } from '@/constant/path';
import { useAppSelector } from '@/hooks/reudxHook';
import { useGetTransactionByUserId } from '@/hooks/useManageTransaction';
import { Transaction } from '@/types/types';
import { formatPrice } from '@/util/format';
import { Alert, Box, Button, Container, Pagination } from '@mui/material';
import React, { useState } from 'react';

const PAGE_SIZE = 6;

const TransactionPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { userProfile } = useAppSelector((state) => state.profile);
  const profileId = userProfile?.id;
  const { data: transactions } = useGetTransactionByUserId(profileId!);

  // Handle Total Page
  const totalPage = Math.ceil((transactions?.data?.length || 0) / PAGE_SIZE);

  // Take data at current page
  const getCurrentPageData = () => {
    if (!transactions?.data) return [];
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return transactions.data.slice(startIndex, endIndex);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    event.preventDefault();
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="p-6 bg-gray-100">
      <Container maxWidth="lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Lịch Sử Giao Dịch
        </h1>
        {!transactions?.data ? (
          <p className="text-lg flex justify-center items-center text-gray-500">
            Không có giao dịch nào.
          </p>
        ) : (
          <table className="border-collapse border border-slate-500 min-w-full bg-white table-fixed ">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-6 py-4 font-semibold border border-slate-600">
                  Mã giao dịch
                </th>
                <th className="px-6 py-4 font-semibold border border-slate-600">
                  Số tiền
                </th>
                <th className="px-6 py-4 font-semibold border border-slate-600">
                  Loại giao dịch
                </th>
                <th className="px-6 py-4 font-semibold border border-slate-600">
                  Ngày giao dịch
                </th>
                <th className="px-6 py-4 font-semibold border border-slate-600">
                  Mô tả
                </th>
              </tr>
            </thead>
            <tbody>
              {getCurrentPageData()?.map((transaction: Transaction) => (
                <tr
                  key={transaction?.transactionId}
                  className="border-b last:border-none"
                >
                  <td className="px-6 py-4 text-gray-800 border border-slate-700">
                    {transaction.transactionId}
                  </td>
                  <td
                    className={`px-6 py-4 font-medium border border-slate-700 ${
                      transaction.transactionType === 'Deposit' ||
                      transaction.transactionType === 'Receive money'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {formatPrice(transaction.amount)}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border border-slate-700">
                    {transaction.transactionType}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border border-slate-700">
                    {new Date(transaction.transactionDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border border-slate-700">
                    {transaction.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {transactions?.data && transactions.data.length > 0 ? (
          <Box className="flex justify-center mt-6">
            <Pagination
              count={totalPage}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
            />
          </Box>
        ) : (
          <Box className="text-center py-12">
            <Alert
              variant="filled"
              severity="info"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Chưa có giao dịch nào được thực hiện
            </Alert>
            <Button
              href={PATH.PAYMENT}
              variant="contained"
              color="info"
              className="mt-4"
              size="medium"
            >
              Nạp tiền
            </Button>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default TransactionPage;
