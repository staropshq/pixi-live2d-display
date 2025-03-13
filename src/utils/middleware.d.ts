export type Middleware<T> = (context: T, next: (err?: any) => Promise<void>) => Promise<void>;
/**
 * Run middlewares with given context.
 * @see https://github.com/koajs/compose/blob/master/index.js
 *
 * @param middleware
 * @param context
 */
export declare function runMiddlewares<T>(middleware: Middleware<T>[], context: T): Promise<void>;
