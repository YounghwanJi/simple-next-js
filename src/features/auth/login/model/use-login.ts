'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginApi } from '../api/login-api';
import { LoginRequest } from '@/shared/types/auth';
import { setToken } from '@/shared/lib/utils/token';
import { useAuth } from '@/entities/user/model/auth-context';
import { User } from '@/entities/user/model/types';

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { login: setAuthUser } = useAuth();

  const login = async (credentials: LoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      // 1. API 호출
      const response = await loginApi(credentials);

      // 2. 토큰 저장
      setToken(response.accessToken, response.refreshToken);

      // 3. 사용자 정보 설정 (임시로 이메일만 저장, 실제로는 /users/me 호출해야 함)
      const user: User = {
        id: 0, // Temporary - should fetch from /users/me
        email: credentials.email,
        name: '',
        role: 'USER',
        status: 'ACTIVE',
      };
      setAuthUser(user);

      // 4. Dashboard로 리다이렉트
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : '로그인에 실패했습니다.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}
