import { useAppSelector } from '@/hooks/reudxHook';
import { useGetTransactionByUserId } from '@/hooks/useManageTransaction';
import { Transaction } from '@/types/types';
import { formatPrice } from '@/util/format';
import { Container } from '@mui/material';
import React from 'react';

const TransactionPage: React.FC = () => {
  const { userProfile } = useAppSelector((state) => state.profile);
  const profileId = userProfile?.id;
  const { data: transactions } = useGetTransactionByUserId(profileId!);
  console.log('data', transactions?.data);

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
              {transactions?.data.map((transaction: Transaction) => (
                <tr
                  key={transaction?.transactionId}
                  className="border-b last:border-none"
                >
                  <td className="px-6 py-4 text-gray-800 border border-slate-700">
                    {transaction.transactionId}
                  </td>
                  <td
                    className={`px-6 py-4 font-medium border border-slate-700 ${
                      transaction.transactionType === 'Deposit'
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
      </Container>
    </section>
  );
};

export default TransactionPage;
