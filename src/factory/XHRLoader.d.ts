import type { Live2DLoaderContext, Live2DLoaderTarget } from "@/factory/Live2DLoader";
import type { Middleware } from "@/utils/middleware";
/**
 * The basic XHR loader.
 *
 * A network error will be thrown with the following properties:
 * - `url` - The request URL.
 * - `status` - The HTTP status.
 * - `aborted` - True if the error is caused by aborting the XHR.
 */
export declare class XHRLoader {
    /**
     * All the created XHRs, keyed by their owners respectively.
     */
    static xhrMap: WeakMap<Live2DLoaderTarget, Set<XMLHttpRequest>>;
    /**
     * All the created XHRs as a flat array.
     */
    static allXhrSet: Set<XMLHttpRequest>;
    /**
     * Middleware for Live2DLoader.
     */
    static loader: Middleware<Live2DLoaderContext>;
    /**
     * Creates a managed XHR.
     * @param target - If provided, the XHR will be canceled when receiving an "destroy" event from the target.
     * @param url - The URL.
     * @param type - The XHR response type.
     * @param onload - Load listener.
     * @param onerror - Error handler.
     */
    static createXHR<T = any>(target: Live2DLoaderTarget | undefined, url: string, type: XMLHttpRequestResponseType, onload: (data: T) => void, onerror: (e: Error) => void): XMLHttpRequest;
    /**
     * Cancels all XHRs related to this target.
     */
    static cancelXHRs(this: Live2DLoaderTarget): void;
    /**
     * Release all XHRs.
     */
    static release(): void;
}
