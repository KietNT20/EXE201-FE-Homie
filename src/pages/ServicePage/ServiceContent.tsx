import { JobPost } from '@/types/types';
import { Alert, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ServiceCard from './ServiceCard';
import ServiceCardSkeleton from './ServiceCardSkeleton';

interface ServiceContentProps {
  isLoading: boolean;
  jobPosts: JobPost[];
  onCardClick: (jobId: number | undefined) => void;
  categoryPrices: Record<number, number>;
  categories: Category[];
  skeletonCards: null[];
}

const ServiceContent = ({
  isLoading,
  jobPosts,
  onCardClick,
  categoryPrices,
  categories,
  skeletonCards,
}: ServiceContentProps) => (
  <Grid size={{ xs: 12, lg: 9 }}>
    <Grid container spacing={2}>
      {isLoading ? (
        <>
          {skeletonCards.map((_, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={`skeleton-${index}`}>
              <ServiceCardSkeleton />
            </Grid>
          ))}
        </>
      ) : (
        <>
          {jobPosts.map((jobPost) => (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={jobPost.jobId}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ServiceCard
                jobPost={jobPost}
                onClick={() => onCardClick(jobPost.jobId)}
                categoryPrices={categoryPrices}
                categories={categories}
              />
            </Grid>
          ))}
        </>
      )}
    </Grid>

    {!isLoading && jobPosts.length === 0 && (
      <Box sx={{ mt: 4 }}>
        <Alert severity="info">
          Không tìm thấy dịch vụ nào phù hợp với bộ lọc đã chọn ở trang này
        </Alert>
      </Box>
    )}
  </Grid>
);

export default ServiceContent;
