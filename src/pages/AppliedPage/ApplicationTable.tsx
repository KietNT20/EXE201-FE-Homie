import ChipComp from '@/components/ChipComp/ChipComp';
import { Application } from '@/types/types';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface ApplicationTableProps {
  applications: Application[];
  onMenuOpen: (
    event: React.MouseEvent<HTMLButtonElement>,
    application: Application,
  ) => void;
  formatDate: (date: string) => string;
}

export const ApplicationTable = ({
  applications,
  onMenuOpen,
  formatDate,
}: ApplicationTableProps) => {
  return (
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
          {applications.map(application => (
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
                  onClick={e => onMenuOpen(e, application)}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
