import { jobPostService } from '@/services/jobPostService';
import { JobPostDetail, JobPostPayload } from '@/types/types';
import { JobPostResponse } from '@/types/types.response ';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGetAllJobPosts = (params: {
  pageNumber: number;
  pageSize: number;
  filter: string;
  OrderBy: string;
}) => {
  const { data, ...rest } = useQuery<JobPostResponse>({
    queryKey: [
      'jobPosts',
      params.pageNumber,
      params.pageSize,
      params.filter,
      params.OrderBy,
    ],
    queryFn: () =>
      jobPostService.getJobPosts(
        `?pageNumber=${params.pageNumber}&pageSize=${params.pageSize}&filter=${params.filter}&OrderBy=${params.OrderBy}`,
      ),
    staleTime: 10000,
    throwOnError: true,
  });

  return {
    data,
    ...rest,
  };
};

export const useGetJobPostById = (jobPostId?: string | number | null) => {
  const { data, ...rest } = useQuery<JobPostDetail>({
    queryKey: ['jobPostDetail', jobPostId],
    queryFn: () => jobPostService.getJobPostById(Number(jobPostId!)),
    enabled: !!jobPostId,
    throwOnError: false,
  });

  return {
    data,
    ...rest,
  };
};

export const useCreateJobPost = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: (JobPostPayload: JobPostPayload) =>
      jobPostService.createJobPost(JobPostPayload),
    onSuccess: async () => {
      toast.dismiss();
      await queryClient.invalidateQueries({
        queryKey: ['jobPosts'],
      });
      toast.success('Tạo công việc thành công');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Tạo công việc thất bại');
    },
  });
  return { mutate, ...rest };
};

export const useGetJobPostByUserId = (userId: number) => {
  const { data: jobPostUserData, ...rest } = useQuery({
    queryKey: ['jobPostByUserId'],
    queryFn: () => jobPostService.getJobPostByUserId(userId),
    throwOnError: true,
  });

  return {
    jobPostUserData,
    ...rest,
  };
};
