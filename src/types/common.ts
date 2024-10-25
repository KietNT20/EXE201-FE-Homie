export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalPages: number;
  totalCount: number;
  currentPage: number;
  pageSize: number;
}
