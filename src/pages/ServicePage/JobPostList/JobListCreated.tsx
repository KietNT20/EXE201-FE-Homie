import { PATH } from '@/constant/path';
import { useAppSelector } from '@/hooks/reudxHook';
import { useGetJobPostByUserId } from '@/hooks/useMangeJobPost';
import { CategoriesId, JobPostStatus } from '@/types/types';
import {
  Box,
  Button,
  Container,
  Grid2,
  Pagination,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import JobCard from './JobCard';

export interface JobPostUserResponse {
  jobId: number;
  employerId: number;
  title: string;
  description: string;
  location: string;
  squareMeters: number;
  numberOfFloors: number;
  startDate: string;
  endDate: string;
  price: number;
  status: JobPostStatus;
  createDate: string;
  categoryJobPost: CategoriesId[];
}

const PAGE_SIZE = 6;

const JobListCreated = () => {
  const [page, setPage] = useState(1);
  const { userProfile } = useAppSelector((state) => state.profile);
  const { jobPostUserData } = useGetJobPostByUserId(userProfile?.id ?? 0) as {
    jobPostUserData: { data: JobPostUserResponse[] | undefined };
  };

  // Calculate total pages
  const totalPages = Math.ceil(
    (jobPostUserData?.data?.length || 0) / PAGE_SIZE,
  );

  // Get current page data
  const getCurrentPageData = () => {
    if (!jobPostUserData?.data) return [];
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return jobPostUserData.data.slice(startIndex, endIndex);
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
    <section className="bg-gray-50">
      <Container className="py-8">
        <Typography variant="h4" className="mb-6">
          Các công việc đã tạo
        </Typography>
        <Grid2 container spacing={3}>
          {getCurrentPageData()?.map((job: JobPostUserResponse) => (
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} key={job.jobId}>
              <JobCard job={job} />
            </Grid2>
          ))}
        </Grid2>
        {jobPostUserData?.data && jobPostUserData.data.length > 0 ? (
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
        ) : (
          <Box className="text-center py-12">
            <Typography color="text.secondary">Chưa tạo công việc</Typography>
            <Button
              href={PATH.SERVICE}
              variant="contained"
              color="info"
              className="mt-4"
              size="medium"
            >
              Tạo công việc
            </Button>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default JobListCreated;
