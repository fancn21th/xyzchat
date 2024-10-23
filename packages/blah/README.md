# Vercel AI SDK - Mistral Provider

The **[Mistral provider](https://sdk.vercel.ai/providers/ai-sdk-providers/mistral)** for the [Vercel AI SDK](https://sdk.vercel.ai/docs) contains language model support for the Mistral chat API.

## Setup

The Mistral provider is available in the `@ai-sdk/blah` module. You can install it with

```bash
npm i @ai-sdk/blah
```

## Provider Instance

You can import the default provider instance `mistral` from `@ai-sdk/blah`:

```ts
import { mistral } from '@ai-sdk/blah';
```

## Example

```ts
import { mistral } from '@ai-sdk/blah';
import { generateText } from 'ai';

const { text } = await generateText({
  model: mistral('mistral-large-latest'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

## Documentation

Please check out the **[Mistral provider](https://sdk.vercel.ai/providers/ai-sdk-providers/mistral)** for more information.
