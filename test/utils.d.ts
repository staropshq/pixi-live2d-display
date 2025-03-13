import type { Application } from "pixi.js";
import type { JSONObject, Live2DFactoryOptions, Live2DModelEvents, ModelSettings } from "../src";
import { Live2DModel } from "../src";
export declare const BASE_PATH = "../../../test/";
export declare function delay(ms: number): Promise<unknown>;
export declare function loadScript(url: string): Promise<unknown>;
export declare function defaultOptions(options?: Live2DFactoryOptions): Live2DFactoryOptions;
export declare function loadAsFiles(urlMap: Record<string, () => Promise<string>>, convertPath: (path: string) => string): Promise<File[]>;
export declare function createFile(blob: Blob, relativePath: string): File;
export declare function createModel(src: string | JSONObject | ModelSettings, { Class, listeners, ...options }?: Live2DFactoryOptions & {
    Class?: typeof Live2DModel;
    listeners?: {
        [K in keyof Live2DModelEvents]?: (this: Live2DModel, ...args: Live2DModelEvents[K]) => void;
    };
}): Promise<Live2DModel>;
export declare function addAllModels(app: Application, options?: Parameters<typeof createModel>[1]): Promise<Live2DModel<import("../src").InternalModel>[]>;
export declare class ManualPromise<T> extends Promise<T> {
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
    constructor();
    static get [Symbol.species](): PromiseConstructor;
}
export declare function overrideDescriptor<T extends object, K extends keyof T>(obj: T, prop: K, getDescriptor: (original: {
    value: T[K];
    descriptor: PropertyDescriptor | undefined;
}, restore: () => void) => PropertyDescriptor): () => void;
export declare function overrideValue<T extends object, K extends keyof T>(obj: T, prop: K, getValue: (original: T[K], restore: () => void) => T[K]): () => void;
export declare function asDisposable(dispose: () => void): Disposable;
export declare function normalizeFilter(filter: string | RegExp | ((src: string) => boolean)): (src: string) => boolean;
export interface MessageQueue<T> {
    produce: (item: T) => void;
    consumer: AsyncGenerator<T, void, void> & {
        ended: boolean;
    };
    waitFor: (check: (item: T) => boolean) => Promise<T>;
    stop: () => void;
}
export declare function messageQueue<T>(waitTimeoutMS?: number): MessageQueue<T>;
export interface BoxOptions<T> {
    waitTimeoutMS?: number;
    onPut?: (item: T) => void;
}
export interface Box<T> {
    put: (item: T) => Promise<void>;
    take: (check: (item: T) => boolean) => Promise<T>;
    peek: () => IterableIterator<T>;
}
export declare function createBox<T>({ onPut, waitTimeoutMS }?: BoxOptions<T>): Box<T>;
