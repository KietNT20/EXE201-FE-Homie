import {
  Box,
  CircularProgress,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';

interface LoadingProps {
  /**
   * The size of the loading spinner
   * @default 40
   */
  size?: number;

  /**
   * Whether to show a full page loading state
   * @default false
   */
  fullPage?: boolean;

  /**
   * Loading text to display below the spinner
   * @default "Đang tải..."
   */
  text?: string;

  /**
   * Additional className for the container
   */
  className?: string;

  /**
   * Whether to show the loading text
   * @default true
   */
  showText?: boolean;

  /**
   * The color of the loading spinner
   * @default "primary"
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Loading: React.FC<LoadingProps> = ({
  size = 40,
  fullPage = false,
  text = 'Đang tải...',
  className = '',
  showText = true,
  color = 'primary',
}) => {
  const theme = useTheme();

  // Base styles
  const containerStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    ...(fullPage && {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      zIndex: theme.zIndex.modal - 1,
    }),
  };

  return (
    <Box sx={containerStyles} className={className}>
      <CircularProgress size={size} color={color} thickness={4} />
      {showText && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: 500,
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
