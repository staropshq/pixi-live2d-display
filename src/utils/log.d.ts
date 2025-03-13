/**
 * A simple tagged logger.
 *
 * You can replace the methods with your own ones.
 *
 * ```js
 * import { logger } from 'pixi-live2d-display';
 *
 * logger.log = (tag, ...messages) => {
 *     console.log(tag, 'says:', ...messages);
 * };
 * ```
 */
export declare const logger: {
    log(tag: string, ...messages: any[]): void;
    warn(tag: string, ...messages: any[]): void;
    error(tag: string, ...messages: any[]): void;
};
