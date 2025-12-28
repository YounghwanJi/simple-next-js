import { apiClient } from '@/shared/api/client';
import { ENDPOINTS } from '@/shared/api/endpoints';
import { RegisterRequest, RegisterResponse } from '@/shared/types/auth';

export async function registerApi(data: RegisterRequest): Promise<RegisterResponse> {
  return apiClient.post<RegisterResponse>(ENDPOINTS.USERS.CREATE, data);
}
