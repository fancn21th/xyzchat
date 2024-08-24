import { createServer } from "@mswjs/http-middleware";
import { handlers } from "./handlers";

const httpServer = createServer(...handlers);

httpServer.listen(4321);
