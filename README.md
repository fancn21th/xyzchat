# xyzchat 项目

## How to dev

- open terminal 1

```bash
pnpm dev
```

- open terminal 2 (optional if you want to use mock data)

```bash
pnpm mock
```

## 项目目标

- 当你决定开发一个新的 AI 聊天 App 的时候 你就会想到 `xyzchat`
  - 开箱即用的功能, `xyzchat` 覆盖了绝大部分常用的功能, 你可以很方便的开关这些功能
  - 样式的定制化, 你可以很方便的修改 `xyzchat`  所有的样式, 使其适应你的 UI/UX 设计需求

## 设计思想

- 第一性原理

  - 拆解问题：将复杂的问题分解成更小、更基本的部分。
  - 寻找基本事实：找到这些部分中最基本、最确定的事实和原理。
  - 重建解决方案：基于这些基本事实和原理，重新构建解决方案，而不是依赖现有的假设和惯例。

- 大道至简

  - 苹果和特斯拉的成功就是简化了复杂的事物

- 无处不代理

  - 代理模式可以降低 耦合度

- 不要轻易深入到细节设计, 先完成最重要的设计

  - 细节可以后续再设计与优化

## 技术实现

- 设计系统 与 组件库
  - radix ui
  - shadcn/ui
  - storybook

- 聊天应用
  - react hook
  - ai sdk

- 网站
  - next.js

## 工作流

整个项目的需求是如何推进的, 类似于里程碑, 参考 [flow](./docs/flow.md)

## 改进项目

整个项目的推进以业务优先, 但是一些改进项目也需要跟踪, 参考 [todo](./docs/todo.md)
