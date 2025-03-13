import type { JSONObject } from "../types/helpers";
/**
 * Parses, and provides access to the settings JSON.
 */
export declare abstract class ModelSettings {
    json: JSONObject;
    /**
     * The model's name, typically used for displaying or logging. By default it's inferred from
     * the URL by taking the folder name (the second to last component). In Cubism 2 it'll be overwritten
     * by the `name` field of settings JSON.
     */
    name: string;
    /**
     * URL of the model settings file, used to resolve paths of the resource files defined in settings.
     * This typically ends with `.model.json` in Cubism 2 and `.model3.json` in Cubism 4.
     */
    url: string;
    /**
     * Relative path of he moc file, typically ends with `.moc` in Cubism 2 and `.moc3` in Cubism 4.
     */
    abstract moc: string;
    /**
     * Relative paths of the texture images.
     */
    abstract textures: string[];
    /**
     * Relative path of the pose file.
     */
    pose?: string;
    /**
     * Relative path of the physics file.
     */
    physics?: string;
    /**
     * @param json - The settings JSON object.
     * @param json.url - The `url` field must be defined to specify the settings file's URL.
     */
    protected constructor(json: JSONObject & {
        url: string;
    });
    /**
     * Resolves a relative path using the {@link url}. This is used to resolve the resource files
     * defined in the settings.
     * @param path - Relative path.
     * @return Resolved path.
     */
    resolveURL(path: string): string;
    /**
     * Replaces the resource files by running each file through the `replacer`.
     * @param replacer - Invoked with two arguments: `(file, path)`, where `file` is the file definition,
     * and `path` is its property path in the ModelSettings instance. A string must be returned to be the replacement.
     *
     * ```js
     * modelSettings.replaceFiles((file, path) => {
     *     // file = "foo.moc", path = "moc"
     *     // file = "foo.png", path = "textures[0]"
     *     // file = "foo.mtn", path = "motions.idle[0].file"
     *     // file = "foo.motion3.json", path = "motions.idle[0].File"
     *
     *     return "bar/" + file;
     * });
     * ```
     */
    replaceFiles(replacer: (file: string, path: string) => string): void;
    /**
     * Retrieves all resource files defined in the settings.
     * @return A flat array of the paths of all resource files.
     *
     * ```js
     * modelSettings.getDefinedFiles();
     * // returns: ["foo.moc", "foo.png", ...]
     * ```
     */
    getDefinedFiles(): string[];
    /**
     * Validates that the files defined in the settings exist in given files. Each file will be
     * resolved by {@link resolveURL} before comparison.
     * @param files - A flat array of file paths.
     * @return All the files which are defined in the settings and also exist in given files,
     * *including the optional files*.
     * @throws Error if any *essential* file is defined in settings but not included in given files.
     */
    validateFiles(files: string[]): string[];
}
