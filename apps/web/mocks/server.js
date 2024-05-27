import { createServer } from "@mswjs/http-middleware";
import { handlers } from "./handlers.js";

const httpServer = createServer(...handlers);

httpServer.listen(3000);
