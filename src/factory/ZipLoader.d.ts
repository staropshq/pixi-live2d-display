import type { ModelSettings } from "@/cubism-common";
import type { Live2DFactoryContext } from "@/factory/Live2DFactory";
import type { Middleware } from "@/utils/middleware";
type ZipReader = any;
/**
 * Experimental loader to load resources from a zip file.
 *
 * Though named as a "Loader", this class has nothing to do with Live2DLoader,
 * it only contains a middleware for the Live2DFactory.
 */
export declare class ZipLoader {
    private static live2dFactory;
    static ZIP_PROTOCOL: string;
    static uid: number;
    static factory: Middleware<Live2DFactoryContext>;
    static unzip(reader: ZipReader, settings: ModelSettings): Promise<File[]>;
    static createSettings(reader: ZipReader): Promise<ModelSettings>;
    static zipReader(data: Blob, url: string): Promise<ZipReader>;
    static getFilePaths(reader: ZipReader): Promise<string[]>;
    static getFiles(reader: ZipReader, paths: string[]): Promise<File[]>;
    static readText(reader: ZipReader, path: string): Promise<string>;
    static releaseReader(reader: ZipReader): void;
}
export {};
