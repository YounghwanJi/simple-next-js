import { apiClient } from '@/shared/api/client';
import { ENDPOINTS } from '@/shared/api/endpoints';
import { User } from '../model/types';

export interface GetMeResponse {
  id: number;
  role: string;
  email: string;
  name: string;
  phoneNumber?: string;
  status: string;
}

export async function getMe(): Promise<User> {
  return apiClient.get<GetMeResponse>(ENDPOINTS.USERS.ME, true);
}
