'use client';

import { useGetUsers } from '@/features/users/model/use-get-users';
import { Table, Column } from '@/shared/ui/molecules/Table';
import { Pagination } from '@/shared/ui/molecules/Pagination';
import { User } from '@/entities/user/model/types';
import { UserStatusBadge } from '@/features/users/ui/UserStatusBadge';
import { UserRoleBadge } from '@/features/users/ui/UserRoleBadge';

export default function UsersPage() {
  const { users, isLoading, error, pagination, goToPage } = useGetUsers(0, 10);

  const columns: Column<User>[] = [
    {
      key: 'id',
      header: 'ID',
      width: '80px',
    },
    {
      key: 'name',
      header: '이름',
      width: '150px',
    },
    {
      key: 'email',
      header: '이메일',
      width: '250px',
    },
    {
      key: 'phoneNumber',
      header: '전화번호',
      width: '150px',
      render: (user) => user.phoneNumber || '-',
    },
    {
      key: 'role',
      header: '역할',
      width: '120px',
      render: (user) => <UserRoleBadge role={user.role} />,
    },
    {
      key: 'status',
      header: '상태',
      width: '120px',
      render: (user) => <UserStatusBadge status={user.status} />,
    },
    {
      key: 'createdAt',
      header: '가입일',
      width: '150px',
      render: (user) =>
        user.createdAt
          ? new Date(user.createdAt).toLocaleDateString('ko-KR')
          : '-',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Users</h1>
        <p className="text-zinc-400">
          전체 {pagination.totalElements}명의 사용자
        </p>
      </div>

      <div className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden">
        {/* 로딩 상태 */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
          </div>
        )}

        {/* 에러 상태 */}
        {error && !isLoading && (
          <div className="px-6 py-12 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-yellow-400 hover:underline"
            >
              다시 시도
            </button>
          </div>
        )}

        {/* 테이블 */}
        {!isLoading && !error && (
          <>
            <Table
              data={users}
              columns={columns}
              keyExtractor={(user) => user.id}
              emptyMessage="등록된 사용자가 없습니다."
            />

            {/* Pagination */}
            {pagination.totalPages > 0 && (
              <div className="px-6 pb-6">
                <Pagination
                  currentPage={pagination.page}
                  totalPages={pagination.totalPages}
                  onPageChange={goToPage}
                  hasNext={pagination.hasNext}
                  hasPrev={pagination.hasPrev}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
