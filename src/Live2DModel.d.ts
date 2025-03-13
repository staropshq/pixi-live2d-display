import type { InternalModel, ModelSettings, MotionPriority } from "@/cubism-common";
import type { MotionManagerOptions } from "@/cubism-common/MotionManager";
import type { Live2DFactoryOptions } from "@/factory/Live2DFactory";
import type { Renderer, Texture, Ticker } from "@pixi/core";
import { ObservablePoint, Point } from "@pixi/core";
import { Container } from "@pixi/display";
import { Automator, type AutomatorOptions } from "./Automator";
import { Live2DTransform } from "./Live2DTransform";
import type { JSONObject } from "./types/helpers";
export interface Live2DModelOptions extends MotionManagerOptions, AutomatorOptions {
}
export type Live2DConstructor = {
    new (options?: Live2DModelOptions): Live2DModel;
};
/**
 * A wrapper that allows the Live2D model to be used as a DisplayObject in PixiJS.
 *
 * ```js
 * const model = await Live2DModel.from('shizuku.model.json');
 * container.add(model);
 * ```
 * @emits {@link Live2DModelEvents}
 */
export declare class Live2DModel<IM extends InternalModel = InternalModel> extends Container {
    /**
     * Creates a Live2DModel from given source.
     * @param source - Can be one of: settings file URL, settings JSON object, ModelSettings instance.
     * @param options - Options for the creation.
     * @return Promise that resolves with the Live2DModel.
     */
    static from<M extends Live2DConstructor = typeof Live2DModel>(this: M, source: string | JSONObject | ModelSettings, options?: Live2DFactoryOptions): Promise<InstanceType<M>>;
    /**
     * Synchronous version of `Live2DModel.from()`. This method immediately returns a Live2DModel instance,
     * whose resources have not been loaded. Therefore this model can't be manipulated or rendered
     * until the "load" event has been emitted.
     *
     * ```js
     * // no `await` here as it's not a Promise
     * const model = Live2DModel.fromSync('shizuku.model.json');
     *
     * // these will cause errors!
     * // app.stage.addChild(model);
     * // model.motion('tap_body');
     *
     * model.once('load', () => {
     *     // now it's safe
     *     app.stage.addChild(model);
     *     model.motion('tap_body');
     * });
     * ```
     */
    static fromSync<M extends Live2DConstructor = typeof Live2DModel>(this: M, source: string | JSONObject | ModelSettings, options?: Live2DFactoryOptions): InstanceType<M>;
    /**
     * Registers the class of `PIXI.Ticker` for auto updating.
     * @deprecated Use {@link Live2DModelOptions.ticker} instead.
     */
    static registerTicker(tickerClass: typeof Ticker): void;
    /**
     * Tag for logging.
     */
    tag: string;
    /**
     * The internal model. Though typed as non-nullable, it'll be undefined until the "ready" event is emitted.
     */
    internalModel: IM;
    /**
     * Pixi textures.
     */
    textures: Texture[];
    /** @override */
    transform: Live2DTransform;
    /**
     * The anchor behaves like the one in `PIXI.Sprite`, where `(0, 0)` means the top left
     * and `(1, 1)` means the bottom right.
     */
    anchor: ObservablePoint<any>;
    /**
     * An ID of Gl context that syncs with `renderer.CONTEXT_UID`. Used to check if the GL context has changed.
     */
    protected glContextID: number;
    /**
     * Elapsed time in milliseconds since created.
     */
    elapsedTime: DOMHighResTimeStamp;
    /**
     * Elapsed time in milliseconds from last frame to this frame.
     */
    deltaTime: DOMHighResTimeStamp;
    automator: Automator;
    constructor(options?: Live2DModelOptions);
    /**
     * A handler of the "modelLoaded" event, invoked when the internal model has been loaded.
     */
    protected init(options?: Live2DModelOptions): void;
    /**
     * A callback that observes {@link anchor}, invoked when the anchor's values have been changed.
     */
    protected onAnchorChange(): void;
    /**
     * Shorthand to start a motion.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @param priority - The priority to be applied. (0: No priority, 1: IDLE, 2:NORMAL, 3:FORCE) (default: 2)
     * ### OPTIONAL: `{name: value, ...}`
     * @param sound - The audio url to file or base64 content
     * @param volume - Volume of the sound (0-1) (default: 0.5)
     * @param expression - In case you want to mix up a expression while playing sound (bind with Model.expression())
     * @param resetExpression - Reset the expression to default after the motion is finished (default: true)
     * @return Promise that resolves with true if the motion is successfully started, with false otherwise.
     */
    motion(group: string, index?: number, priority?: MotionPriority, { sound, volume, expression, resetExpression, crossOrigin, onFinish, onError, }?: {
        sound?: string;
        volume?: number;
        expression?: number | string;
        resetExpression?: boolean;
        crossOrigin?: string;
        onFinish?: () => void;
        onError?: (e: Error) => void;
    }): Promise<boolean>;
    /**
     * Stops all playing motions as well as the sound.
     */
    stopMotions(): void;
    /**
     * Shorthand to start speaking a sound with an expression.
     * @param sound - The audio url to file or base64 content
     * ### OPTIONAL: {name: value, ...}
     * @param volume - Volume of the sound (0-1)
     * @param expression - In case you want to mix up a expression while playing sound (bind with Model.expression())
     * @param resetExpression - Reset the expression to default after the motion is finished (default: true)
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
     * Stop current audio playback and lipsync
     */
    stopSpeaking(): void;
    /**
     * Shorthand to set an expression.
     * @param id - Either the index, or the name of the expression. If not presented, a random expression will be set.
     * @return Promise that resolves with true if succeeded, with false otherwise.
     */
    expression(id?: number | string): Promise<boolean>;
    /**
     * Updates the focus position. This will not cause the model to immediately look at the position,
     * instead the movement will be interpolated.
     * @param x - Position in world space.
     * @param y - Position in world space.
     * @param instant - Should the focus position be instantly applied.
     */
    focus(x: number, y: number, instant?: boolean): void;
    /**
     * Tap on the model. This will perform a hit-testing, and emit a "hit" event
     * if at least one of the hit areas is hit.
     * @param x - Position in world space.
     * @param y - Position in world space.
     * @emits {@link Live2DModelEvents.hit}
     */
    tap(x: number, y: number): void;
    /**
     * Hit-test on the model.
     * @param x - Position in world space.
     * @param y - Position in world space.
     * @return The names of the *hit* hit areas. Can be empty if none is hit.
     */
    hitTest(x: number, y: number): string[];
    /**
     * Calculates the position in the canvas of original, unscaled Live2D model.
     * @param position - A Point in world space.
     * @param result - A Point to store the new value. Defaults to a new Point.
     * @param skipUpdate - True to skip the update transform.
     * @return The Point in model canvas space.
     */
    toModelPosition(position: Point, result?: Point, skipUpdate?: boolean): Point;
    /**
     * A method required by `PIXI.InteractionManager` to perform hit-testing.
     * @param point - A Point in world space.
     * @return True if the point is inside this model.
     */
    containsPoint(point: Point): boolean;
    /** @override */
    protected _calculateBounds(): void;
    /**
     * Updates the model. Note this method just updates the timer,
     * and the actual update will be done right before rendering the model.
     * @param dt - The elapsed time in milliseconds since last frame.
     */
    update(dt: DOMHighResTimeStamp): void;
    _render(renderer: Renderer): void;
    /**
     * Destroys the model and all related resources. This takes the same options and also
     * behaves the same as `PIXI.Container#destroy`.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param [options.children=false] - if set to true, all the children will have their destroy
     *  method called as well. 'options' will be passed on to those calls.
     * @param [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */
    destroy(options?: {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }): void;
}
