import { PATH } from '@/constant/path';
import { NavigationHeaderProps } from '@/types/navigation';
import { ArrowBack, HomeOutlined, NavigateNext } from '@mui/icons-material';
import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
  link: 'flex items-center text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-300',
  activeText: 'font-medium text-gray-900',
  iconButton: 'hover:bg-gray-100 transition-all duration-200',
  container: 'transition-all duration-300 ease-in-out',
  breadcrumbs: 'flex items-center flex-wrap',
};

const NavigationHeader = ({
  items,
  backPath = PATH.HOME,
  className = '',
  isLoading = false,
  customBackIcon,
  customHomeIcon,
  customSeparator,
  showBackIcon = true,
  onBackClick,
}: NavigationHeaderProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(backPath);
    }
  };

  const handleClick = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  if (isLoading) {
    return (
      <Stack direction="row" spacing={2} className={`mb-6 ${className}`}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={200} />
      </Stack>
    );
  }

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      alignItems={isMobile ? 'flex-start' : 'center'}
      spacing={isMobile ? 1 : 2}
      className={`${styles.container} ${className}`}
    >
      {showBackIcon && (
        <IconButton
          onClick={handleBackClick}
          className={styles.iconButton}
          size="small"
        >
          {customBackIcon || <ArrowBack />}
        </IconButton>
      )}

      <Breadcrumbs
        separator={customSeparator || <NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        className={styles.breadcrumbs}
      >
        <Link
          underline="hover"
          className={styles.link}
          onClick={() => handleClick(PATH.HOME)}
        >
          {customHomeIcon || <HomeOutlined fontSize="small" className="mr-1" />}
          Trang chủ
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return isLast ? (
            <Typography
              key={item.label}
              color="text.primary"
              className={styles.activeText}
            >
              {item.icon && (
                <Box component="span" className="mr-1">
                  {item.icon}
                </Box>
              )}
              {item.label}
            </Typography>
          ) : (
            <Link
              key={item.label}
              underline="hover"
              className={styles.link}
              onClick={() => handleClick(item.path)}
            >
              {item.icon && (
                <Box component="span" className="mr-1">
                  {item.icon}
                </Box>
              )}
              {item.label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export default NavigationHeader;
