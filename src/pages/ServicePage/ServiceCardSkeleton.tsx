import { Box, Card, CardContent, Skeleton } from '@mui/material';

const ServiceCardSkeleton = () => (
  <Card sx={{ height: '100%' }}>
    <Skeleton variant="rectangular" height={200} animation="wave" />
    <CardContent>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton animation="wave" height={32} width="60%" />
        <Skeleton animation="wave" height={20} sx={{ my: 1 }} />
        <Skeleton animation="wave" height={20} width="80%" />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" height={36} width={100} />
          <Skeleton animation="wave" height={36} width={100} />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default ServiceCardSkeleton;
