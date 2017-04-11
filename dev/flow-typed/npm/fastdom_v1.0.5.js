declare module 'fastdom' {
  declare type Fastdom = {
    measure(fn: Function, ctx: ?Object): number;
    mutate(fn: Function, ctx: ?Object): number;
    extend(props: Object): Fastdom;
  }

  declare module.exports: Fastdom;
}
