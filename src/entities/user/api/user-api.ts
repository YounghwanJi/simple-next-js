import { apiClient } from '@/shared/api/client';
import { ENDPOINTS } from '@/shared/api/endpoints';
import { User } from '../model/types';
import { UsersListResponse } from '@/shared/types/user';
import { PaginationParams } from '@/shared/types/pagination';

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

export async function getUsersList(
  params?: PaginationParams
): Promise<UsersListResponse> {
  const queryParams = new URLSearchParams();

  if (params?.page !== undefined) {
    queryParams.append('page', params.page.toString());
  }
  if (params?.size !== undefined) {
    queryParams.append('size', params.size.toString());
  }

  const endpoint = `${ENDPOINTS.USERS.LIST}${
    queryParams.toString() ? `?${queryParams.toString()}` : ''
  }`;

  return apiClient.get<UsersListResponse>(endpoint, true);
}
