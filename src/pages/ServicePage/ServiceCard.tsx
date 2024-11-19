import ChipComp from '@/components/ChipComp/ChipComp';
import { useGetUserById } from '@/hooks/useManageUser';
import { ServiceCardProps } from '@/types/types';
import { formatDate, formatPrice } from '@/util/format';
import {
  AttachMoney,
  CalendarToday,
  CleaningServices,
  Email,
  LocationOn,
  Phone,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import CategoryChip from './CategoryChip';

const ServiceCard = React.memo(
  ({ onClick, jobPost, ...restProps }: ServiceCardProps) => {
    const { data: userInfo } = useGetUserById(jobPost.employerId);

    return (
      <Card
        className="w-full hover:shadow-xl transition-all duration-300 border-2 border-sky-200 hover:border-sky-500 bg-white rounded-lg"
        {...restProps}
      >
        <CardActionArea onClick={onClick}>
          <CardContent className="p-6">
            {/* Title and Status Section - Fixed height */}
            <ChipComp status={jobPost.status} />
            <Box className="my-3">
              <Typography
                variant="h6"
                component="div"
                className="text-gray-800 font-bold truncate"
              >
                {jobPost.title}
              </Typography>
            </Box>

            {/* User Info Section - Fixed height */}
            {userInfo && (
              <>
                <Box className="mb-4">
                  <Box className="flex items-start gap-4">
                    <Avatar
                      src={userInfo.data.avatarUrl}
                      alt={userInfo.data.name}
                      className="w-10 h-10 border-2 border-white shadow-sm"
                    />
                    <Box className="flex-1 min-w-0">
                      <Typography
                        variant="subtitle1"
                        className="font-semibold text-gray-700 mb-2 truncate"
                      >
                        {userInfo.data.name}
                      </Typography>
                      <Stack spacing={1}>
                        <Box
                          className="flex items-center gap-2"
                          title={userInfo.data.email}
                        >
                          <Email className="text-gray-500 w-4 h-4" />
                          <Typography
                            variant="body2"
                            className="text-gray-600 line-clamp-1"
                          >
                            {userInfo.data.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
                <Divider className="mb-4" />
              </>
            )}

            {/* Description Section - Fixed height */}
            <Typography
              variant="body2"
              className="text-gray-600 mb-4 h-10 line-clamp-2"
            >
              {jobPost.description}
            </Typography>

            {/* Details Section - Fixed height */}
            <Stack spacing={2} className="mb-2 h-[120px]">
              <Box className="flex items-center gap-3">
                <LocationOn className="text-gray-500 w-5 h-5" />
                <Typography
                  variant="body2"
                  className="text-gray-600 line-clamp-1"
                >
                  {jobPost.location}
                </Typography>
              </Box>

              <Box className="flex items-center gap-3">
                <CalendarToday className="text-gray-500 w-5 h-5" />
                <Typography variant="body2" className="text-gray-600">
                  {formatDate(jobPost.startDate)} -{' '}
                  {formatDate(jobPost.endDate)}
                </Typography>
              </Box>

              <Box className="flex items-center gap-3">
                <AttachMoney className="text-gray-500 w-5 h-5" />
                <Typography
                  variant="body1"
                  className="font-semibold text-blue-600"
                >
                  {formatPrice(jobPost?.price || 0)}
                </Typography>
              </Box>
              <Divider />
            </Stack>

            {/* Category Section - Fixed height */}
            <Box className="h-20 mb-4">
              <Box className="flex items-center gap-2 mb-2">
                <CleaningServices className="text-gray-500 w-5 h-5" />
                <Typography
                  variant="body2"
                  className="text-gray-700 font-medium"
                >
                  Dịch vụ:
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={1}
                className="flex flex-wrap gap-2 pl-8"
              >
                {jobPost?.categoryJobPost?.map((category) => (
                  <CategoryChip
                    key={category.categoriesId}
                    categoryId={category.categoriesId}
                  />
                ))}
              </Stack>
            </Box>

            {/* Create Date Section */}
            <Box className="pt-4 border-t border-gray-100">
              <Typography variant="body2" className="text-gray-500">
                Được tạo lúc: {formatDate(jobPost.createDate)}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  },
);

export default ServiceCard;
