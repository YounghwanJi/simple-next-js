import { RegisterForm } from '@/features/auth/register/ui/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">회원가입</h1>
          <p className="text-zinc-400">새 계정을 만들어보세요</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
