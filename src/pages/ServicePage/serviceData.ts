import { ServiceCardData } from "../../types/types";
import { useMemo } from "react";

export const serviceCards: ServiceCardData[] = useMemo(
  () => [
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h",
      userAddress: "123 Main St, City",
      categories: ["Nấu ăn"],
      serviceDescription:
        "Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.",
      joinDate: "2022-01-15",
    },
    {
      name: "Jane Smith",
      job: "Dọn dẹp nhà cửa",
      price: "55,000 đ/h",
      rating: 5,
      reviewCount: 60,
      avatar: "https://example.com/jane-smith-avatar.jpg",
      time: "3h",
      userAddress: "456 Elm St, Town",
      categories: ["Dọn dẹp nhà cửa"],
      serviceDescription: "Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.",
      joinDate: "2021-12-10",
    },
    {
      name: "Mike Johnson",
      job: "Sửa chữa nhà cửa",
      price: "75,000 đ/h",
      rating: 4,
      reviewCount: 30,
      avatar: "https://example.com/mike-johnson-avatar.jpg",
      time: "4h",
      userAddress: "789 Oak St, Village",
      categories: ["Sửa chữa nhà cửa"],
      serviceDescription:
        "Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.",
      joinDate: "2020-11-05",
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h",
      userAddress: "123 Main St, City",
      categories: ["Nấu ăn"],
      serviceDescription:
        "Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.",
      joinDate: "2022-01-15",
    },
    {
      name: "Jane Smith",
      job: "Dọn dẹp nhà cửa",
      price: "55,000 đ/h",
      rating: 5,
      reviewCount: 60,
      avatar: "https://example.com/jane-smith-avatar.jpg",
      time: "3h",
      userAddress: "456 Elm St, Town",
      categories: ["Dọn dẹp nhà cửa"],
      serviceDescription: "Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.",
      joinDate: "2021-12-10",
    },
    {
      name: "Mike Johnson",
      job: "Sửa chữa nhà cửa",
      price: "75,000 đ/h",
      rating: 4,
      reviewCount: 30,
      avatar: "https://example.com/mike-johnson-avatar.jpg",
      time: "4h",
      userAddress: "789 Oak St, Village",
      categories: ["Sửa chữa nhà cửa"],
      serviceDescription:
        "Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.",
      joinDate: "2020-11-05",
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h",
      userAddress: "123 Main St, City",
      categories: ["Nấu ăn"],
      serviceDescription:
        "Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.",
      joinDate: "2022-01-15",
    },
    {
      name: "Jane Smith",
      job: "Dọn dẹp nhà cửa",
      price: "55,000 đ/h",
      rating: 5,
      reviewCount: 60,
      avatar: "https://example.com/jane-smith-avatar.jpg",
      time: "3h",
      userAddress: "456 Elm St, Town",
      categories: ["Dọn dẹp nhà cửa"],
      serviceDescription: "Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.",
      joinDate: "2021-12-10",
    },
    {
      name: "Mike Johnson",
      job: "Sửa chữa nhà cửa",
      price: "75,000 đ/h",
      rating: 4,
      reviewCount: 30,
      avatar: "https://example.com/mike-johnson-avatar.jpg",
      time: "4h",
      userAddress: "789 Oak St, Village",
      categories: ["Sửa chữa nhà cửa"],
      serviceDescription:
        "Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.",
      joinDate: "2020-11-05",
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h",
      userAddress: "123 Main St, City",
      categories: ["Nấu ăn"],
      serviceDescription:
        "Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.",
      joinDate: "2022-01-15",
    },
    {
      name: "Jane Smith",
      job: "Dọn dẹp nhà cửa",
      price: "55,000 đ/h",
      rating: 5,
      reviewCount: 60,
      avatar: "https://example.com/jane-smith-avatar.jpg",
      time: "3h",
      userAddress: "456 Elm St, Town",
      categories: ["Dọn dẹp nhà cửa"],
      serviceDescription: "Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.",
      joinDate: "2021-12-10",
    },
    {
      name: "Mike Johnson",
      job: "Sửa chữa nhà cửa",
      price: "75,000 đ/h",
      rating: 4,
      reviewCount: 30,
      avatar: "https://example.com/mike-johnson-avatar.jpg",
      time: "4h",
      userAddress: "789 Oak St, Village",
      categories: ["Sửa chữa nhà cửa"],
      serviceDescription:
        "Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.",
      joinDate: "2020-11-05",
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h",
      userAddress: "123 Main St, City",
      categories: ["Nấu ăn"],
      serviceDescription:
        "Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.",
      joinDate: "2022-01-15",
    },
    {
      name: "Jane Smith",
      job: "Dọn dẹp nhà cửa",
      price: "55,000 đ/h",
      rating: 5,
      reviewCount: 60,
      avatar: "https://example.com/jane-smith-avatar.jpg",
      time: "3h",
      userAddress: "456 Elm St, Town",
      categories: ["Dọn dẹp nhà cửa"],
      serviceDescription: "Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.",
      joinDate: "2021-12-10",
    },
    {
      name: "Mike Johnson",
      job: "Sửa chữa nhà cửa",
      price: "75,000 đ/h",
      rating: 4,
      reviewCount: 30,
      avatar: "https://example.com/mike-johnson-avatar.jpg",
      time: "4h",
      userAddress: "789 Oak St, Village",
      categories: ["Sửa chữa nhà cửa"],
      serviceDescription:
        "Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.",
      joinDate: "2020-11-05",
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h",
      userAddress: "123 Main St, City",
      categories: ["Nấu ăn"],
      serviceDescription:
        "Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.",
      joinDate: "2022-01-15",
    },
    {
      name: "Jane Smith",
      job: "Dọn dẹp nhà cửa",
      price: "55,000 đ/h",
      rating: 5,
      reviewCount: 60,
      avatar: "https://example.com/jane-smith-avatar.jpg",
      time: "3h",
      userAddress: "456 Elm St, Town",
      categories: ["Dọn dẹp nhà cửa"],
      serviceDescription: "Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.",
      joinDate: "2021-12-10",
    },
    {
      name: "Mike Johnson",
      job: "Sửa chữa nhà cửa",
      price: "75,000 đ/h",
      rating: 4,
      reviewCount: 30,
      avatar: "https://example.com/mike-johnson-avatar.jpg",
      time: "4h",
      userAddress: "789 Oak St, Village",
      categories: ["Sửa chữa nhà cửa"],
      serviceDescription:
        "Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.",
      joinDate: "2020-11-05",
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h",
      userAddress: "123 Main St, City",
      categories: ["Nấu ăn"],
      serviceDescription:
        "Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.",
      joinDate: "2022-01-15",
    },
    {
      name: "Jane Smith",
      job: "Dọn dẹp nhà cửa",
      price: "55,000 đ/h",
      rating: 5,
      reviewCount: 60,
      avatar: "https://example.com/jane-smith-avatar.jpg",
      time: "3h",
      userAddress: "456 Elm St, Town",
      categories: ["Dọn dẹp nhà cửa"],
      serviceDescription: "Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.",
      joinDate: "2021-12-10",
    },
    {
      name: "Mike Johnson",
      job: "Sửa chữa nhà cửa",
      price: "75,000 đ/h",
      rating: 4,
      reviewCount: 30,
      avatar: "https://example.com/mike-johnson-avatar.jpg",
      time: "4h",
      userAddress: "789 Oak St, Village",
      categories: ["Sửa chữa nhà cửa"],
      serviceDescription:
        "Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.",
      joinDate: "2020-11-05",
    },
  ],
  [],
);
