This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.

----

# MY SECTION

## Profiles

### .env.local

``` yml
```

### .env.dev

``` yml
```

### .env.qa

``` yml
```

### .env.stg

``` yml
```

### .env.prd

``` yml
```

## Architecture

> Atomic Design + FSD (Feature Sliced Design)

- app/: Next.js App Router (Routing, Layout)
- processes/: (선택) 여러 페이지에 걸친 복잡한 흐름
- pages/: 페이지 단위 구성
- widgets/: 여러 feature를 조합한 독립적 UI 블록
- features/: 비즈니스 가치가 있는 기능 단위 (예: auth-by-email)
- entities/: 비즈니스 엔티티 (예: user, product)
- shared/: 재사용 가능한 인프라 (API 클라이언트, UI Kit)
    - shared/ui/: 이 폴더 내부에 Atomic Design을 적용합니다. (atoms, molecules, organisms) 

### File Structure example
> 이 프로젝트와는 상관 없는 예시입니다.
``` bash
src/
├── app/                                # Next.js App Router 전용 영역
│   │                                  # ⚠️ 비즈니스 로직 금지
│   │                                  # 라우팅 + layout + metadata 만 담당
│   │
│   ├── layout.tsx                     # 전역 Layout (Header/Footer/Providers)
│   │                                  # → widgets / processes 조합만 허용
│   │
│   ├── page.tsx                       # "/" 루트 페이지
│   │                                  # → widgets 조합 (비즈니스 로직 X)
│   │
│   ├── login/                         # "/login" 라우트
│   │   └── page.tsx                   # 로그인 페이지 엔트리
│   │                                  # → widgets/login-form 사용
│   │
│   └── (auth)/                        # Route Group (URL에는 안 보임)
│       ├── layout.tsx                 # 인증 전용 레이아웃
│       └── register/
│           └── page.tsx
│
│
├── pages/                             # (선택) Page Composition Layer
│   │                                  # 📌 "페이지 조립" 책임만 가짐
│   │                                  # app/page.tsx 에서 직접 써도 되면 생략 가능
│   │
│   └── login/
│       └── LoginPage.tsx              # 로그인 페이지 UI 조합
│                                      # widgets + processes 조합
│
│
├── widgets/                           # 🧩 화면 단위 UI 블록
│   │                                  # 여러 feature를 조합한 "완성형 UI"
│   │
│   └── login-form/
│       ├── ui/
│       │   └── LoginForm.tsx           # 실제 화면에 보이는 로그인 폼
│       │                              # 내부에서 features/auth/login 사용
│       │
│       └── index.ts                   # 외부 공개 API
│
│
├── features/                          # 🎯 사용자 행동 단위
│   │                                  # (버튼 클릭, 제출, 좋아요, 검색 등)
│   │
│   └── auth/
│       ├── login/
│       │   ├── ui/                    # 로그인 "행동"과 직접 연결된 UI
│       │   │   └── LoginButton.tsx
│       │   │                          # 버튼 클릭 → 로그인 수행
│       │   │
│       │   ├── model/                 # 상태 / 로직 / 훅
│       │   │   ├── useLogin.ts        # 로그인 비즈니스 로직
│       │   │   └── login.schema.ts    # zod/yup validation
│       │   │
│       │   ├── api/                   # 서버 통신 로직
│       │   │   └── login.api.ts       # POST /auth/login
│       │   │
│       │   └── index.ts               # feature 공개 인터페이스
│       │
│       └── logout/
│           └── ...
│
│
├── entities/                          # 🧠 핵심 도메인 모델
│   │                                  # 시스템에서 가장 중요한 개념
│   │                                  # (User, Post, Product, Order ...)
│   │
│   └── user/
│       ├── model/
│       │   ├── user.ts                # User 타입 / interface
│       │   └── user.store.ts          # 전역 상태 (Zustand/Recoil)
│       │
│       ├── api/
│       │   └── user.api.ts            # GET /me, PATCH /user
│       │
│       ├── ui/
│       │   └── UserAvatar.tsx         # "User"를 표현하는 최소 UI
│       │
│       └── index.ts                   # entity 공개 API
│
│
├── processes/                         # 🔄 복합 플로우 / 시나리오
│   │                                  # 여러 feature + entity를
│   │                                  # "순서"와 "규칙"으로 묶음
│   │
│   └── auth/
│       ├── AuthGuard.tsx              # 인증 여부에 따라 라우팅 제어
│       │                              # 예) 로그인 안 했으면 /login 이동
│       │
│       └── index.ts
│
│
├── shared/                            # 🧱 전역 공용 자산
│   │                                  # ❗ 도메인 의존성 절대 금지
│   │
│   ├── ui/                            # 재사용 가능한 순수 UI
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Modal/
│   │
│   ├── lib/                           # 공용 유틸
│   │   ├── fetcher.ts                # 공통 fetch wrapper
│   │   └── clsx.ts
│   │
│   ├── config/
│   │   └── env.ts                    # 환경 변수 래핑
│   │
│   └── types/
│       └── common.ts                 # 전역 타입
│
│
└── index.ts                           # (선택) barrel export

```