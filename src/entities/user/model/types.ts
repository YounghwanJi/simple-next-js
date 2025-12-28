export interface User {
  id: number;
  role: string;
  email: string;
  name: string;
  phoneNumber?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export type UserRole = 'ADMIN' | 'USER';
export type UserStatus = 'ACTIVE' | 'INACTIVE';
