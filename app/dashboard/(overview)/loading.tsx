import DashboardSkeleton from '@/app/ui/skeletons';

// Do loading nếu để ở ngoài sẽ cấp cap hơn customers và invoices nên sẽ áp dụng cho cả 2
// Nên suwr dụng group router có tác dụng chỉ cho dashboard
export default function Loading() {
  return <DashboardSkeleton />;
}