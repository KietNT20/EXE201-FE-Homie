import ChatButton from '@/components/ButtonComp/ChatButton';
import { clean_hero } from '@/constant/image';
import { PATH } from '@/constant/path';
import SavingsIcon from '@mui/icons-material/Savings';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Testimonial from './Testimonial';

const StatsCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
}> = ({ icon, title, value }) => (
  <Card className="w-full bg-white/80 backdrop-blur-sm">
    <CardContent className="flex flex-col items-center p-4">
      <Box className="mb-2">{icon}</Box>
      <Typography variant="h5" className="font-bold mb-1">
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const AboutPage: React.FC = () => {
  const testimonials = [
    {
      name: 'Eugene Freeman',
      role: 'Designer',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula sed ipsum maximus dignissim.',
      avatar: '/path/to/avatar1.jpg',
    },
    {
      name: 'Eugene Freeman',
      role: 'Lawyer',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula sed ipsum maximus dignissim.',
      avatar: '/path/to/avatar2.jpg',
    },
  ];

  return (
    <main className="bg-gray-50 to-white py-3 md:py-10">
      <Container maxWidth="lg">
        {/* Hero Section */}
        <div className="relative h-72 w-full bg-blue-100 mb-8 flex-shrink-0 rounded-3xl overflow-hidden sm:block hidden">
          <img
            src={clean_hero}
            alt="Cleaning"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/30">
            <div className="container mx-auto px-4 h-full flex items-center">
              <Link
                component={NavLink}
                to={PATH.HOME}
                variant="h6"
                underline="hover"
                className="text-white font-bold"
              >
                Trang chủ
              </Link>
              <span className="text-white mx-3">/</span>
              <Typography variant="h6" className="text-white font-bold">
                Về Homie
              </Typography>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="container mx-auto px-4 mb-16">
          {/* Logo and Tagline */}
          <div className="text-center mb-12">
            <Typography variant="h3" className="text-blue-500 font-bold mb-2">
              Homie
            </Typography>
            <Typography variant="h5" className="text-gray-600">
              Your Home's Guardian
            </Typography>
            <button className="text-base mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Nhận Voucher ngay
            </button>
          </div>
          {/* Stats Grid */}
          <Grid container spacing={4} className="mb-12">
            <Grid size={{ xs: 12, sm: 4 }}>
              <StatsCard
                icon={
                  <SavingsIcon
                    className="text-blue-500"
                    sx={{ fontSize: 40 }}
                  />
                }
                title="Tiết kiệm"
                value="12000+"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <StatsCard
                icon={
                  <StarIcon className="text-blue-500" sx={{ fontSize: 40 }} />
                }
                title="Đánh Giá"
                value="92%"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <StatsCard
                icon={
                  <WorkIcon className="text-blue-500" sx={{ fontSize: 40 }} />
                }
                title="Công việc mới"
                value="Daily"
              />
            </Grid>
          </Grid>
          {/* Testimonials Section */}
          <div>
            <Typography variant="h5" className="text-center mb-8 font-medium">
              Khách hàng của chúng tôi nói gì?
            </Typography>
            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Testimonial {...testimonial} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
      {/* Chat */}
      <ChatButton />
    </main>
  );
};

export default AboutPage;
