import server from "./src/server";

const port = process.env.PORT || 3000;

Bun.serve({
  port,
  fetch: server.fetch,
});

