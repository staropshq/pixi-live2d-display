import { CubismConfig } from "@cubism/config";
/**
 * Global configs.
 */
export declare const config: {
    LOG_LEVEL_VERBOSE: number;
    LOG_LEVEL_WARNING: number;
    LOG_LEVEL_ERROR: number;
    LOG_LEVEL_NONE: number;
    /**
     * Global log level.
     * @default config.LOG_LEVEL_WARNING
     */
    logLevel: number;
    /**
     * Enabling sound for motions.
     */
    sound: boolean;
    /**
     * Deferring motion and corresponding sound until both are loaded.
     */
    motionSync: boolean;
    /**
     * Default fading duration for motions without such value specified.
     */
    motionFadingDuration: number;
    /**
     * Default fading duration for idle motions without such value specified.
     */
    idleMotionFadingDuration: number;
    /**
     * Default fading duration for expressions without such value specified.
     */
    expressionFadingDuration: number;
    /**
     * If false, expression will be reset to default when playing non-idle motions.
     */
    preserveExpressionOnMotion: boolean;
    cubism4: typeof CubismConfig;
};
/**
 * Consistent with the `version` in package.json.
 */
export declare const VERSION: string;
