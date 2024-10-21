# xyzchat 项目

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

- build components

```bash
pnpm dev:component
```

- build mobile app

## 项目目标

- 对于 AI Chatbot 的不断探索 吸纳主流 Chatbot 开发技术
- 在 设计系统层面 进行 横向的扩展
- 基于 AI SDK 的 custom provider 提供模型的扩展

## 设计思想

- 第一性原理

  - 拆解问题：将复杂的问题分解成更小、更基本的部分。
  - 寻找基本事实：找到这些部分中最基本、最确定的事实和原理。
  - 重建解决方案：基于这些基本事实和原理，重新构建解决方案，而不是依赖现有的假设和惯例。

- 大道至简

  - 苹果和特斯拉的成功就是简化了复杂的事物, 将复杂度从用户的角度进行了转移

- 无处不代理

  - 代理模式可以降低 耦合度
  - 代理的泛化
    - 代理的目的是为了解耦, 但是代理的实现可以是多种多样的 简而言之 不直接依赖 间接依赖就是代理

- 不要轻易深入到细节设计, 先完成最重要的设计

  - 细节可以后续再设计与优化

## 技术实现

- 设计系统 与 组件库
  - radix ui
  - shadcn/ui
  - storybook

- 聊天应用
  - ai sdk
  - next.js

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
│   └── core                        # core ui components
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

## 工作流

整个项目的需求是如何推进的, 类似于里程碑, 参考 [flow](./docs/flow.md)

## 改进项目

整个项目的推进以业务优先, 但是一些改进项目也需要跟踪, 参考 [todo](./docs/todo.md)
