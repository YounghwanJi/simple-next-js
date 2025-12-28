import { PaginatedResponse } from './pagination';
import { User } from '@/entities/user/model/types';

export type UsersListResponse = PaginatedResponse<User>;
