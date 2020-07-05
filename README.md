# response-time for deno middleware framework serve.

## Usage

```ts
import { App } from "https://deno.land/x/gh:johannlai:doa/mod.ts";
import { responseTime } from "https://deno.land/x/gh:johannlai:response-time/mod.ts";

app.use(responseTime());
app.use(async ctx => {
  ctx.status = 200;
  ctx.body = "Hello World";
});

app.listen({ port: 8000 });
```
