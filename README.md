# response-time for deno middleware framework serve.

## Usage

Basic usage

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

If you need response high resolution in nano time, set hrtime option to true, but you `must` setf `--allow-hrtime ` flag when you run your deno app:
```ts
app.use(responseTime({ hrtime: true }));
```

Sample response header with `hrtime = false (default)`:
```
x-response-Time: 2ms
```

Sample response header with hrtime = true:

```
x-response-time: 2.0621600000004037ms
```
## Note

Best to `.use()` at the top before any other middleware, to wrap all subsequent middleware.


## License

[MIT](https://github.com/JohannLai/response-time/blob/master/LICENSE)
