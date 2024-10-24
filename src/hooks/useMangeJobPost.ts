import { jobPostService } from '@/services/jobPostService';
import { JobPost } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGetAllJobPosts = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['jobPosts'],
    queryFn: () => jobPostService.getJobPosts(),
    throwOnError: true,
  });

  return {
    data,
    ...rest,
  };
};

export const useGetJobPostById = (jobPostId?: string | number | null) => {
  const { data, ...rest } = useQuery({
    queryKey: ['jobPost', jobPostId],
    queryFn: () => {
      if (!jobPostId) throw new Error('Job Post ID is required');
      return jobPostService.getJobPostById(Number(jobPostId));
    },
    enabled: !!jobPostId,
    throwOnError: false,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 0, // Always fetch fresh data
  });

  return {
    data,
    ...rest,
  };
};

export const useCreateJobPost = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: (jobPost: JobPost) => jobPostService.createJobPost(jobPost),
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({
        queryKey: ['jobPosts'],
      });
      toast.success('Create Job Post Successfully!!');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Create Job Post Failed');
    },
  });
  return { mutate, ...rest };
};
