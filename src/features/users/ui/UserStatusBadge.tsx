import React from 'react';
import { UserStatus } from '@/entities/user/model/types';

interface UserStatusBadgeProps {
  status: string;
}

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const statusStyles = {
    ACTIVE: 'bg-green-500/20 text-green-400 border-green-500/30',
    INACTIVE: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        statusStyles[status as UserStatus] || statusStyles.INACTIVE
      }`}
    >
      {status}
    </span>
  );
}
