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
| [Open Webui](https://github.com/open-webui/open-webui3)       |     |  |
| [dify](https://github.com/langgenius/dify)       |     |  |
| [anything llm](https://github.com/Mintplex-Labs/anything-llm)       |     |  |

## Question 3: Standalone components and How they are glued together ?

The implementation of the xyzchat should base on the design.  No matter how your design is completed it will somehow end up with something called `design system`. It is not the industry standard, but every big company has its own design system. You can also easily trace it back to the [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/). The author of Atomic Design, Brad Frost, is believed to be the first one to introduce the concept of design system. Great job! Brad.

Btw if you want to really appreciate the power of metaphor that Brad used in Atomic Design, you better review the related chemistry textbook. Trust me it is worth it.

Like how every living thing is made up of cells in a very sophisticated way.

![cell](https://cdn.britannica.com/03/114903-050-502CFE8D/Cutaway-drawing-cell.jpg)

Determining what design system is made of is never a easy job. However it is where the fun begins right?  Just give it a try. Besides you never start from scratch. There are many tools out there for you. Many wonderful design systems are open sourced. Take [polaris](https://polaris.shopify.com/getting-started) for example, we could build the design system based on it.

At this time I would like to start from layout the most basic part of design system. The glue connected every component together.

## Question 4: Customizable Style ?

According to [anatomy of shadcn-ui](https://manupa.dev/blog/anatomy-of-shadcn-ui), a single component broken down to those parts

- headless[^headless/renderless]
  - state
  - behavior

- style
  - structural
  - visual

`shadcn-ui` gave us those tools below to customize the style of a component.

> In short the tools below serve for the purpose of customizing the style of a component. It assumes that your component must has variants. And the style will be adjusted based on the variants. It is all about the style and the css behind it.

- [Class Variance Authority(CVA)](https://cva.style/docs)
  - a function for defining the variance of a component
  - return another function applied styles conditionally
  - an example in react [cva + tailwind / react](https://github.com/joe-bell/cva/blob/main/examples/react-with-tailwindcss/src/components/button/button.tsx)

- VariantProps
  - expose the available variants as an Enum on the variants prop
  - generated the types for the variants prop

- cn
  - mix of clsx & twMerge libs
  - clsx
    conditionally apply styles
  - twMerge
    fix `CSS Cascade affects Tailwind` caveat

Caveats:

- do use tailwind cli to do the css class tree shaking

[^headless/renderless]: headless/renderless:
    [*A example in vue.js*](https://codesandbox.io/p/sandbox/renderless-02-component-different-layout-8o2n2?file=%2Fsrc%2FApp.vue).
