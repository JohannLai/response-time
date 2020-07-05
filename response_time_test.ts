export {
  assertEquals,
} from "https://deno.land/std@0.59.0/testing/asserts.ts";
import { App } from "https://deno.land/x/gh:johannlai:doa/mod.ts";
import { superdeno } from "https://deno.land/x/superdeno@main/mod.ts";
import { responseTime } from "./response_time.ts";

const test = Deno.test;

test({
  name: "should catch thrown errors in non-async functions",
  async fn() {
    const app = new App();

    app.use(responseTime());

    await superdeno(app.listen())
      .get("/")
      .expect("x-response-time", /^[0-9]{1,3}ms$/)
      .expect(404);
  },
});

test({
  name: "hrtime: true",
  async fn() {
    const app = new App();

    app.use(responseTime({
      hrtime: true,
    }));

    await superdeno(app.listen())
      .get("/")
      .expect("x-response-time", /^[0-9]{1,3}.[0-9]{3,20}ms$/)
      .expect(404);
  },
});
