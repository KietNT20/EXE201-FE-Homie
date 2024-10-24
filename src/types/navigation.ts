export interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

export interface NavigationHeaderProps {
  items: BreadcrumbItem[];
  backPath?: string;
  className?: string;
  isLoading?: boolean;
  customBackIcon?: React.ReactNode;
  customHomeIcon?: React.ReactNode;
  customSeparator?: React.ReactNode;
  showBackIcon?: boolean;
  onBackClick?: () => void;
}
