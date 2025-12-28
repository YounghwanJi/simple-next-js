import React from 'react';
import { UserRole } from '@/entities/user/model/types';

interface UserRoleBadgeProps {
  role: string;
}

export function UserRoleBadge({ role }: UserRoleBadgeProps) {
  const roleStyles = {
    ADMIN: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    USER: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
        roleStyles[role as UserRole] || roleStyles.USER
      }`}
    >
      {role}
    </span>
  );
}
