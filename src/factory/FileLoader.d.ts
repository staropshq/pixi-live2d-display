import type { ModelSettings } from "@/cubism-common";
import type { Live2DFactoryContext } from "@/factory";
import type { Middleware } from "@/utils/middleware";
declare global {
    interface File {
        readonly webkitRelativePath: string;
    }
}
declare module "@/cubism-common/ModelSettings" {
    interface ModelSettings {
        /** @ignore */
        _objectURL?: string;
    }
}
export type ExtendedFileList = File[] & {
    settings?: ModelSettings;
};
/**
 * Experimental loader to load resources from uploaded files.
 *
 * This loader relies on
 * [webkitRelativePath](https://developer.mozilla.org/en-US/docs/Web/API/File/webkitRelativePath)
 * to recognize the file path.
 *
 * Though named as a "Loader", this class has nothing to do with Live2DLoader,
 * it only contains a middleware for the Live2DFactory.
 */
export declare class FileLoader {
    private static live2dFactory;
    /**
     * Stores all the object URLs of uploaded files.
     */
    static filesMap: {
        [settingsFileURL: string]: {
            [resourceFileURL: string]: string;
        };
    };
    /**
     * Resolves the path of a resource file to the object URL.
     * @param settingsURL - Object URL of the settings file.
     * @param filePath - Resource file path.
     * @return Resolved object URL.
     */
    static resolveURL(settingsURL: string, filePath: string): string;
    /**
     * Middleware for Live2DFactory.
     */
    static factory: Middleware<Live2DFactoryContext>;
    /**
     * Consumes the files by storing their object URLs. Files not defined in the settings will be ignored.
     */
    static upload(files: File[], settings: ModelSettings): Promise<void>;
    /**
     * Creates a ModelSettings by given files.
     * @return Promise that resolves with the created ModelSettings.
     */
    static createSettings(files: File[]): Promise<ModelSettings>;
    /**
     * Reads a file as text in UTF-8.
     */
    static readText(file: File): Promise<string>;
}
