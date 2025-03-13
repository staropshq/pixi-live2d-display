import type { CubismStartupOption } from "@cubism/live2dcubismframework";
/**
 * Promises that the Cubism 4 framework is ready to work.
 * @return Promise that resolves if the startup has succeeded, rejects if failed.
 */
export declare function cubism4Ready(): Promise<void>;
/**
 * Starts up Cubism 4 framework.
 */
export declare function startUpCubism4(options?: CubismStartupOption): void;
