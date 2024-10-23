# Terminology

## Layering

UI or Frontend is also refereed as HCI, Human Computer Interaction.

Fundamentally, it serves the data to user and collect the data from user, back and forth.

## Streaming

- openai

  - [streaming](https://platform.openai.com/docs/api-reference/streaming)

    - it follows [server-sent-events](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events)

    in this text, it emphasizes that the parsing of the event message is non-trivial, and should be done with care.

- langchain

  - [0.1 streaming](https://js.langchain.com/v0.1/docs/expression_language/streaming/)

- event stream @ MDN

  [event stream format](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)

  - a quick look

    > The event stream is a simple stream of text data which must be encoded using UTF-8. Messages in the event stream are separated by a pair of newline characters. A colon as the first character of a line is in essence a comment, and is ignored.

    ```bash
    : this is a test stream

    data: some text

    data: another message
    data: with two lines
    ```

  - [The chat completion chunk object](https://platform.openai.com/docs/api-reference/chat/streaming)

    ```javascript

    {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"role":"assistant","content":""},"logprobs":null,"finish_reason":null}]}
    {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"Hello"},"logprobs":null,"finish_reason":null}]}
    {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{},"logprobs":null,"finish_reason":"stop"}]}

    ```
