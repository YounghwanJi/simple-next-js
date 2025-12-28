'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoutButton } from '@/features/auth/logout/ui/LogoutButton';

const MENU_ITEMS = [
  { label: 'Overview', href: '/dashboard', icon: '📊' },
  { label: 'Users', href: '/dashboard/users', icon: '👥' },
  { label: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
  { label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
  { label: 'Profile', href: '/dashboard/profile', icon: '👤' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-zinc-900 border-r border-white/5 h-screen flex flex-col">
      <div className="p-6 border-b border-white/5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/5">
        <LogoutButton />
      </div>
    </aside>
  );
}
