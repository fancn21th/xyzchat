import { createServer } from "@mswjs/http-middleware";
import { handlers } from "./handlers.mjs";

const httpServer = createServer(...handlers);

httpServer.listen(4321);
