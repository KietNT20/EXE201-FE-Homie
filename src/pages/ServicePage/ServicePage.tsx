import banner from '@/assets/img/submarine.jpg';
import { PATH } from '@/constant/path';
import { useGetAllJobPosts } from '@/hooks/useMangeJobPost';
import { JobPost } from '@/types/types';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const ServicePage = () => {
  const { data: jobPostDataList } = useGetAllJobPosts();

  const navigate = useNavigate();

  const handleCardClick = (jobId: number | undefined) => {
    navigate(`${PATH.SERVICE}/${jobId}`);
  };

  return (
    <div className="service-page">
      <Container>
        <div className="banner">
          <img src={banner} alt="Service Banner" className="banner-image" />
          <div className="banner-text">
            <h1>Chi Tiết Dịch Vụ</h1>
            <p>Home / Services</p>
          </div>
        </div>
        <div className="service p-4 md:p-6">
          <h2 className="text-2xl font-bold mb-6">Danh sách dịch vụ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
            {jobPostDataList?.data?.map((jobPost: JobPost, index: number) => (
              <ServiceCard
                key={jobPost.jobId || index}
                jobPost={jobPost}
                onClick={() => handleCardClick(jobPost.jobId)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePage;
