'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Input } from '@/shared/ui/atoms/Input';
import { FormField } from '@/shared/ui/molecules/FormField';
import { Button } from '@/shared/ui/atoms/Button';
import { useRegister } from '../model/use-register';

const registerSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
  name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
  phoneNumber: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, '전화번호 형식: 010-1234-5678'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const { register: registerUser, isLoading, error } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);
    } catch (err) {
      // Error is handled in useRegister hook
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField label="이름" error={errors.name?.message} required>
        <Input {...register('name')} placeholder="홍길동" />
      </FormField>

      <FormField label="이메일" error={errors.email?.message} required>
        <Input type="email" {...register('email')} placeholder="example@email.com" />
      </FormField>

      <FormField label="전화번호" error={errors.phoneNumber?.message} required>
        <Input {...register('phoneNumber')} placeholder="010-1234-5678" />
      </FormField>

      <FormField label="비밀번호" error={errors.password?.message} required>
        <Input type="password" {...register('password')} placeholder="최소 6자 이상" />
      </FormField>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? '가입 중...' : '회원가입'}
      </Button>

      <div className="text-center text-sm text-zinc-400">
        이미 계정이 있으신가요?{' '}
        <Link href="/auth/login" className="text-yellow-400 hover:underline">
          로그인
        </Link>
      </div>
    </form>
  );
}
