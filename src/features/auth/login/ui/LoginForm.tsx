'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Input } from '@/shared/ui/atoms/Input';
import { FormField } from '@/shared/ui/molecules/FormField';
import { Button } from '@/shared/ui/atoms/Button';
import { useLogin } from '../model/use-login';

const loginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
  password: z.string().min(1, '비밀번호를 입력하세요'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { login, isLoading, error } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (err) {
      // Error is handled in useLogin hook
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField label="이메일" error={errors.email?.message} required>
        <Input type="email" {...register('email')} placeholder="example@email.com" />
      </FormField>

      <FormField label="비밀번호" error={errors.password?.message} required>
        <Input type="password" {...register('password')} placeholder="비밀번호를 입력하세요" />
      </FormField>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? '로그인 중...' : '로그인'}
      </Button>

      <div className="text-center text-sm text-zinc-400">
        계정이 없으신가요?{' '}
        <Link href="/auth/register" className="text-yellow-400 hover:underline">
          회원가입
        </Link>
      </div>
    </form>
  );
}
