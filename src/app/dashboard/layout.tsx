'use client';

import { Sidebar } from '@/widgets/dashboard/ui/Sidebar';
import { useProtectedRoute } from '@/shared/lib/hooks/use-protected';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useProtectedRoute();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="text-xl">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
