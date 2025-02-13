# xyzchat 项目

## Prerequisites

You better have solid understanding of the following technologies:

- [React](https://reactjs.org/)

You should also have a basic understanding of the following technologies:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Turbo](https://turbo.hotwired.dev/)
- [Storybook](https://storybook.js.org/)
- [Radix UI](https://radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [AI SDK](https://sdk.vercel.ai/)

Nevertheless, you can still follow along if you are willing to learn.

- Firstly you would find the biz logic in mobile app only has less than 100 lines of code [chat/page.tsx](./apps/mobile/src/app/(chat)/page.tsx).

  This is because the details are hidden in the core components as well as blah project.

- Secondly you would find component development is separated from the mobile app development.

  Even it seems over-engineering, but I find engineer tend to have a good interface design unconsciously otherwise it will be pain in the a** that those components are hard to integrate.

## screenshot

<img src="./assets/screencapture-1024.png" alt="Description" width="200" />

## How to setup

> This is a monorepo project driven by turbo

```bash
pnpm install
```

## How to build

```bash
pnpm build
```

## How to dev

- for ui components & design system

  ```bash
  pnpm dev:component
  ```

- for mobile app

  ```bash
  pnpm dev
  ```

  open [http://localhost:3000](http://localhost:3000)

## 项目目标

- 对于 AI Chatbot 的不断探索 吸纳主流 Chatbot 开发技术
- 在 设计系统层面 进行 横向的扩展
- 基于 AI SDK 的 custom provider 提供模型的扩展

## 项目结构

```
.
├── README.md
├── apps
│   ├── mobile                      # mobile app
│   └── mock-api                    # mock the custom ai api server
├── deploy.sh
├── docs                            # docs
├── package.json
├── packages
│   ├── blah                        # AI SDK custom provider
│   └── core                        # core ui components
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

## 计划 / 里程碑

参考 [flow](./docs/flow.md)

## 改进项目

整个项目的推进以业务优先, 但是一些改进项目也需要跟踪, 参考 [todo](./docs/todo.md)

## 技术实现

- 设计系统 与 组件库

  - radix ui
  - shadcn/ui
  - storybook

- 聊天应用
  - ai sdk
  - next.js
