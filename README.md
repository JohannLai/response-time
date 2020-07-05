# response-time
![Github Action Status](https://github.com/JohannLai/response-time/workflows/build/badge.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub license](https://img.shields.io/github/license/JohannLai/response-time)](https://github.com/JohannLai/response-time/blob/master/LICENSE)
[![tag](https://img.shields.io/badge/deno->=1.1.0-green.svg)](https://github.com/denoland/deno)
[![tag](https://img.shields.io/badge/std-0.59.0-green.svg)](https://github.com/denoland/deno)

`x-response-time` for deno middleware framework serve.

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

If you need response high resolution in nano time, set `hrtime` option to true, but you `must` set `--allow-hrtime ` flag when you run your deno app:
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
