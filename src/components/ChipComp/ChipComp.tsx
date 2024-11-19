import { JobPostStatus } from '@/types/types';
import { getStatusConfig } from '@/util/getStatusConfig';
import { Chip } from '@mui/material';

type ChipProps = {
  status: JobPostStatus;
};

const ChipComp = ({ status }: ChipProps) => {
  const statusConfig = getStatusConfig(status);
  return (
    <Chip
      label={statusConfig.label}
      color={statusConfig.color}
      size="small"
      icon={<statusConfig.icon />}
      className="font-medium"
      variant="filled"
      sx={{
        '& .MuiChip-icon': {
          marginLeft: '8px',
          order: -1,
        },
      }}
    />
  );
};

export default ChipComp;
