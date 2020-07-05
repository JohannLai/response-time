import { App } from "https://deno.land/x/gh:johannlai:doa/mod.ts";
import { responseTime } from "https://deno.land/x/gh:johannlai:response-time/mod.ts";

const app = new App();

// logger
app.use(responseTime({hrtime: true}));

// response
app.use(async (ctx) => {
  ctx.status = 200;
  ctx.set("x-user-name", "johann");
  ctx.body = "Hello World";
});

await app.listen({ port: 8000 });

