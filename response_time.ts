export function responseTime(options?: {
    hrtime: boolean
}) {
    let hrtime = options && options.hrtime;

    return function responseTime(ctx: any, next: any) {
        let start = ctx[Symbol.for('request-received.startAt')] ? ctx[Symbol.for('request-received.startAt')] : performance.now();
        return next().then(() => {
          let delta = performance.now() - start;
        
          console.log(start, delta);

          if (!hrtime) {
            // truncate to milliseconds.
            delta = Math.round(delta);
          }
          ctx.set('X-Response-Time', delta + 'ms');
        });
    };
}