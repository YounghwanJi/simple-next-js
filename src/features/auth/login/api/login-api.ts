import { apiClient } from '@/shared/api/client';
import { ENDPOINTS } from '@/shared/api/endpoints';
import { LoginRequest, LoginResponse } from '@/shared/types/auth';

export async function loginApi(data: LoginRequest): Promise<LoginResponse> {
  return apiClient.post<LoginResponse>(ENDPOINTS.AUTH.LOGIN, data);
}
