import type { ExpressionManager } from "@/cubism-common/ExpressionManager";
import type { ModelSettings } from "@/cubism-common/ModelSettings";
import { MotionPriority, MotionState } from "@/cubism-common/MotionState";
import { utils } from "@pixi/core";
import type { JSONObject } from "../types/helpers";
export interface MotionManagerOptions {
    /**
     * How to preload the motions.
     * @default {@link MotionPreloadStrategy.NONE}
     */
    motionPreload?: MotionPreloadStrategy;
    /**
     * Specifies the idle motion group.
     * @default "idle" in Cubism 2 and "Idle" in Cubism 4.
     */
    idleMotionGroup?: string;
}
/**
 * Indicates how the motions will be preloaded.
 */
export declare enum MotionPreloadStrategy {
    /** Preload all the motions. */
    ALL = "ALL",
    /** Preload only the idle motions. */
    IDLE = "IDLE",
    /** No preload. */
    NONE = "NONE"
}
/**
 * Handles the motion playback.
 * @emits {@link MotionManagerEvents}
 */
export declare abstract class MotionManager<Motion = any, MotionSpec = any> extends utils.EventEmitter {
    /**
     * Tag for logging.
     */
    tag: string;
    /**
     * Motion definitions copied from ModelSettings.
     */
    abstract readonly definitions: Partial<Record<string, MotionSpec[]>>;
    /**
     * Motion groups with particular internal usages. Currently there's only the `idle` field,
     * which specifies the actual name of the idle motion group, so the idle motions
     * can be correctly found from the settings JSON of various Cubism versions.
     */
    abstract readonly groups: {
        idle: string;
    };
    /**
     * Indicates the content type of the motion files, varies in different Cubism versions.
     * This will be used as `xhr.responseType`.
     */
    abstract readonly motionDataType: "json" | "arraybuffer";
    /**
     * Can be undefined if the settings defines no expression.
     */
    abstract expressionManager?: ExpressionManager;
    /**
     * The ModelSettings reference.
     */
    readonly settings: ModelSettings;
    /**
     * The Motions. The structure is the same as {@link definitions}, initially each group contains
     * an empty array, which means all motions will be `undefined`. When a Motion has been loaded,
     * it'll fill the place in which it should be; when it fails to load, the place will be filled
     * with `null`.
     */
    motionGroups: Partial<Record<string, (Motion | undefined | null)[]>>;
    /**
     * Maintains the state of this MotionManager.
     */
    state: MotionState;
    /**
     * Audio element of the current motion if a sound file is defined with it.
     */
    currentAudio?: HTMLAudioElement;
    /**
     * Analyzer element for the current sound being played.
     */
    currentAnalyzer?: AnalyserNode;
    /**
     * Context element for the current sound being played.
     */
    currentContext?: AudioContext;
    /**
     * Flags there's a motion playing.
     */
    playing: boolean;
    /**
     * Flags the instances has been destroyed.
     */
    destroyed: boolean;
    protected constructor(settings: ModelSettings, options?: MotionManagerOptions);
    /**
     * Should be called in the constructor of derived class.
     */
    protected init(options?: MotionManagerOptions): void;
    /**
     * Sets up motions from the definitions, and preloads them according to the preload strategy.
     */
    protected setupMotions(options?: MotionManagerOptions): void;
    /**
     * Loads a Motion in a motion group. Errors in this method will not be thrown,
     * but be emitted with a "motionLoadError" event.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @return Promise that resolves with the Motion, or with undefined if it can't be loaded.
     * @emits {@link MotionManagerEvents.motionLoaded}
     * @emits {@link MotionManagerEvents.motionLoadError}
     */
    loadMotion(group: string, index: number): Promise<Motion | undefined>;
    /**
     * Loads the Motion. Will be implemented by Live2DFactory in order to avoid circular dependency.
     * @ignore
     */
    private _loadMotion;
    /**
     * Only play sound with lip sync
     * @param sound - The audio url to file or base64 content
     * ### OPTIONAL: {name: value, ...}
     * @param volume - Volume of the sound (0-1)
     * @param expression - In case you want to mix up a expression while playing sound (bind with Model.expression())
     * @param resetExpression - Reset expression before and after playing sound (default: true)
     * @param crossOrigin - Cross origin setting.
     * @returns Promise that resolves with true if the sound is playing, false if it's not
     */
    speak(sound: string, { volume, expression, resetExpression, crossOrigin, onFinish, onError, }?: {
        volume?: number;
        expression?: number | string;
        resetExpression?: boolean;
        crossOrigin?: string;
        onFinish?: () => void;
        onError?: (e: Error) => void;
    }): Promise<boolean>;
    /**
     * Starts a motion as given priority.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @param priority - The priority to be applied. default: 2 (NORMAL)
     * ### OPTIONAL: {name: value, ...}
     * @param sound - The audio url to file or base64 content
     * @param volume - Volume of the sound (0-1)
     * @param expression - In case you want to mix up a expression while playing sound (bind with Model.expression())
     * @param resetExpression - Reset expression before and after playing sound (default: true)
     * @param crossOrigin - Cross origin setting.
     * @return Promise that resolves with true if the motion is successfully started, with false otherwise.
     */
    startMotion(group: string, index: number, priority?: MotionPriority, { sound, volume, expression, resetExpression, crossOrigin, onFinish, onError, }?: {
        sound?: string;
        volume?: number;
        expression?: number | string;
        resetExpression?: boolean;
        crossOrigin?: string;
        onFinish?: () => void;
        onError?: (e: Error) => void;
    }): Promise<boolean>;
    /**
     * Starts a random Motion as given priority.
     * @param group - The motion group.
     * @param priority - The priority to be applied. (default: 1 `IDLE`)
     * ### OPTIONAL: {name: value, ...}
     * @param sound - The wav url file or base64 content+
     * @param volume - Volume of the sound (0-1) (default: 1)
     * @param expression - In case you want to mix up a expression while playing sound (name/index)
     * @param resetExpression - Reset expression before and after playing sound (default: true)
     * @return Promise that resolves with true if the motion is successfully started, with false otherwise.
     */
    startRandomMotion(group: string, priority?: MotionPriority, { sound, volume, expression, resetExpression, crossOrigin, onFinish, onError, }?: {
        sound?: string;
        volume?: number;
        expression?: number | string;
        resetExpression?: boolean;
        crossOrigin?: string;
        onFinish?: () => void;
        onError?: (e: Error) => void;
    }): Promise<boolean>;
    /**
     * Stop current audio playback and lipsync
     */
    stopSpeaking(): void;
    /**
     * Stops all playing motions as well as the sound.
     */
    stopAllMotions(): void;
    /**
     * Updates parameters of the core model.
     * @param model - The core model.
     * @param now - Current time in milliseconds.
     * @return True if the parameters have been actually updated.
     */
    update(model: object, now: DOMHighResTimeStamp): boolean;
    /**
     * Move the mouth
     *
     */
    mouthSync(): number;
    /**
     * Destroys the instance.
     * @emits {@link MotionManagerEvents.destroy}
     */
    destroy(): void;
    /**
     * Checks if the motion playback has finished.
     */
    abstract isFinished(): boolean;
    /**
     * Creates a Motion from the data.
     * @param data - Content of the motion file. The format must be consistent with {@link MotionManager#motionDataType}.
     * @param group - The motion group.
     * @param definition - The motion definition.
     * @return The created Motion.
     */
    abstract createMotion(data: ArrayBuffer | JSONObject, group: string, definition: MotionSpec): Motion;
    /**
     * Retrieves the motion's file path by its definition.
     * @return The file path extracted from given definition. Not resolved.
     */
    abstract getMotionFile(definition: MotionSpec): string;
    /**
     * Retrieves the motion's name by its definition.
     * @return The motion's name.
     */
    protected abstract getMotionName(definition: MotionSpec): string;
    /**
     * Retrieves the motion's sound file by its definition.
     * @return The motion's sound file, can be undefined.
     */
    protected abstract getSoundFile(definition: MotionSpec): string | undefined;
    /**
     * Starts the Motion.
     */
    protected abstract _startMotion(motion: Motion, onFinish?: (motion: Motion) => void): number;
    /**
     * Stops all playing motions.
     */
    protected abstract _stopAllMotions(): void;
    /**
     * Updates parameters of the core model.
     * @param model - The core model.
     * @param now - Current time in milliseconds.
     * @return True if the parameters have been actually updated.
     */
    protected abstract updateParameters(model: object, now: DOMHighResTimeStamp): boolean;
}
