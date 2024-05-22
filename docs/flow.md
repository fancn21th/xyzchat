# Flow

> Generally speaking the way how end user use this project comes down to two steps
>
> - Step 1: make the app connect to AI model
> - Step 2: tuning the theme, layout, and style

## Question 1: Goal ?

As a tech pre-sales guy, when I want to present yet another AI application or just a AI chat demo for our customers, I don't want to start from scratch. Picking-up a github project, evaluate and decide. At last couple of hours later the demo is done.

- So there is a demo of whole story not only present how it looks, but also how it works
- So there is a website to present the demo, but the app should be standalone and reusable
- So there is an AI app standalone.
- So there is a monorepo hosts both website and standalone all together

## Question 2: Source of truth ? Data (state / behavior | in / out) ?

As a engineer, I ask myself where to start ? The UI or the State / Behavior ? What is the common sense to build a AI app ?

What i meant is that we have to start from beginning with something serious like [workflow](https://github.com/open-webui/open-webui/blob/main/docs/README.md), right ?

The data returned from server is the single source of truth for an AI app. How many different kinds of data we have to deal with ? Emmmmm, with little effort to explore via Github, the [vercel ai](https://sdk.vercel.ai/docs/introduction) comes to rescue.

Still We need an agent to wrap it up and make it become the lower dependency. The agent itself is the real source of truth for the app.

In frontend word or more specifically in React word, the source of truth is the state / behavior. which is commonly encapsulated as hook. Let's see how Open Source community handle it as table below.

| Project              | Data Layer | Comment |
| :---------------- | :------: | ----: |
| [nextjs-vllm-ui](https://github.com/yoziru/nextjs-vllm-ui)       |   ai/react   | coupled with ai/react |
| [chatbot-ui](https://github.com/mckaywrigley/chatbot-ui)       |   context   |  |
| [ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)       |  custom hook    | desktop support |
| [LibreChat](https://github.com/danny-avila/LibreChat)       |    messages tree  | [how to use](https://www.librechat.ai/docs/local/npm) |
| [Open Webui]()       |     |  |
| [dify]()       |     |  |

## Question 3: Standalone components and How they are glued together ?

## Question 4: Customizable Style ?

According to [anatomy of shadcn-ui](https://manupa.dev/blog/anatomy-of-shadcn-ui), a single component broken down to those parts

- headless
  - state
  - behavior

- style
  - structural
  - visual

`shadcn-ui` gave us those tools below to customize the style of a component.

- Class Variance Authority(CVA)
  - a function for defining the variance of a component
  - return another function applied styles conditionally

- VariantProps
  - expose the available variants as an Enum on the variants prop

- cn
  - mix of clsx & twMerge libs
  - clsx
    conditionally apply styles
  - twMerge
    fix `CSS Cascade affects Tailwind` caveat

On top of above, the most natural way to customize the style is ...
