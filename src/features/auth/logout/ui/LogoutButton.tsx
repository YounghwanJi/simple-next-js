'use client';

import { useLogout } from '../model/use-logout';

export function LogoutButton() {
  const { logout } = useLogout();

  return (
    <button
      onClick={logout}
      className="w-full px-4 py-3 text-left text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors flex items-center gap-3"
    >
      <span className="text-xl">🚪</span>
      <span className="font-medium">Logout</span>
    </button>
  );
}
