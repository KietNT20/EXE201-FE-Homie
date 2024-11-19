import ChipComp from '@/components/ChipComp/ChipComp';
import { Application } from '@/types/types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';

interface ApplicationTableProps {
  applications: Application[];
  onMenuOpen: (
    event: React.MouseEvent<HTMLButtonElement>,
    application: Application,
  ) => void;
  formatDate: (date: string) => string;
}

const PAGE_SIZE = 6;

export const ApplicationTable = ({
  applications,
  onMenuOpen,
  formatDate,
}: ApplicationTableProps) => {
  const [page, setPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil((applications.length || 0) / PAGE_SIZE);

  // Get current page data
  const getCurrentPageData = () => {
    if (!applications) return [];
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return applications.slice(startIndex, endIndex);
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
    <>
      <TableContainer
        component={Paper}
        elevation={2}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          '& .MuiTableCell-head': {
            backgroundColor: 'primary.light',
            color: 'primary.contrastText',
            fontWeight: 'bold',
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" width="15%">
                Mã công việc
              </TableCell>
              <TableCell width="30%">Tin nhắn</TableCell>
              <TableCell align="center" width="20%">
                Trạng thái
              </TableCell>
              <TableCell align="center" width="20%">
                Thời gian ứng tuyển
              </TableCell>
              <TableCell align="center" width="5%">
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getCurrentPageData()?.map((application) => (
              <TableRow
                key={application.id}
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <TableCell align="center">{application.jobId}</TableCell>
                <TableCell>{application.message}</TableCell>
                <TableCell align="center">
                  <ChipComp status={application.status} />
                </TableCell>
                <TableCell align="center">
                  {formatDate(application.appliedAt)}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    onClick={(e) => onMenuOpen(e, application)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="flex justify-center mt-6">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="medium"
          shape="rounded"
        />
      </Box>
    </>
  );
};
