// src/mocks/handlers.js
import { http, graphql, HttpResponse } from "msw";

export const handlers = [
  http.get("/user", () => {
    return HttpResponse.json({ firstName: "alex" });
  }),
];
