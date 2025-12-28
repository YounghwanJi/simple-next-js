'use client';

import { useState, useEffect } from 'react';
import { getUsersList } from '@/entities/user/api/user-api';
import { User } from '@/entities/user/model/types';

interface UseGetUsersReturn {
  users: User[];
  isLoading: boolean;
  error: string | null;
  pagination: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  goToPage: (page: number) => void;
  setPageSize: (size: number) => void;
  refetch: () => void;
}

export function useGetUsers(
  initialPage = 0,
  initialSize = 10
): UseGetUsersReturn {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage);
  const [size, setSize] = useState(initialSize);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getUsersList({ page, size });
      setUsers(response.content);
      setPagination({
        page: response.page,
        size: response.size,
        totalElements: response.totalElements,
        totalPages: response.totalPages,
        hasNext: response.hasNext,
        hasPrev: response.hasPrev,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : '사용자 목록을 불러오는데 실패했습니다.'
      );
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, size]);

  const goToPage = (newPage: number) => {
    setPage(newPage);
  };

  const setPageSize = (newSize: number) => {
    setSize(newSize);
    setPage(0); // 페이지 크기 변경 시 첫 페이지로 이동
  };

  const refetch = () => {
    fetchUsers();
  };

  return {
    users,
    isLoading,
    error,
    pagination,
    goToPage,
    setPageSize,
    refetch,
  };
}
