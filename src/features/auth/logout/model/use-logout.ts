'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/entities/user/model/auth-context';

export function useLogout() {
  const router = useRouter();
  const { logout: clearAuth } = useAuth();

  const logout = () => {
    clearAuth();
    // router.push('/');
    window.location.href = '/'; // 전체 페이지 리로드와 함께 이동
  };

  return { logout };
}
