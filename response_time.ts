/**
 * Add X-Response-Time header field.
 * @param {Dictionary} options options dictionary. { hrtime }
 *
 *        hrtime: boolean.
 *          `true` to use time in nanoseconds， must run deno with `--allow-hrtime`
 *          `false` to use time in milliseconds.
 *          Default is `false` to keep back compatible.
 * @return {Function}
 * @api public
 */
export function responseTime(options?: {
    hrtime: boolean
}) {
    let hrtime = options && options.hrtime;

    return function responseTime(ctx: any, next: any) {
        let start = ctx[Symbol.for('request-received.startAt')] ? ctx[Symbol.for('request-received.startAt')] : performance.now();
        return next().then(() => {
          let delta = performance.now() - start;
    

          if (!hrtime) {
            // truncate to milliseconds.
            delta = Math.round(delta);
          }
          ctx.set('X-Response-Time', delta + 'ms');
        });
    };
}