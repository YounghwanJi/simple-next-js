'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerApi } from '../api/register-api';
import { RegisterRequest } from '@/shared/types/auth';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const register = async (data: RegisterRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      await registerApi(data);
      // Redirect to login page on success
      router.push('/auth/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : '회원가입에 실패했습니다.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
}
