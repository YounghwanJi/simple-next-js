export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}

export interface RegisterResponse {
  id: number;
  role: string;
  email: string;
  name: string;
  phoneNumber: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
