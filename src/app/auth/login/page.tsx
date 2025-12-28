import { LoginForm } from '@/features/auth/login/ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">로그인</h1>
          <p className="text-zinc-400">계정에 로그인하세요</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
