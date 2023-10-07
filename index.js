const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello from bun + docker");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
