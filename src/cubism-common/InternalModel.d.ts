import { FocusController } from "@/cubism-common/FocusController";
import type { ModelSettings } from "@/cubism-common/ModelSettings";
import type { MotionManager, MotionManagerOptions } from "@/cubism-common/MotionManager";
import { Matrix, utils } from "@pixi/core";
/**
 * Common layout definition shared between all Cubism versions.
 */
export interface CommonLayout {
    centerX?: number;
    centerY?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}
/**
 * Common hit area definition shared between all Cubism versions.
 */
export interface CommonHitArea {
    id: string;
    name: string;
    index: number;
}
export interface Bounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface InternalModelOptions extends MotionManagerOptions {
}
/**
 * A wrapper that manages the states of a Live2D core model, and delegates all operations to it.
 * @emits {@link InternalModelEvents}
 */
export declare abstract class InternalModel extends utils.EventEmitter {
    /**
     * The managed Live2D core model.
     */
    abstract readonly coreModel: object;
    abstract readonly settings: ModelSettings;
    focusController: FocusController;
    abstract motionManager: MotionManager;
    pose?: any;
    physics?: any;
    /**
     * Original canvas width of the model. Note this doesn't represent the model's real size,
     * as the model can overflow from its canvas.
     */
    readonly originalWidth: number;
    /**
     * Original canvas height of the model. Note this doesn't represent the model's real size,
     * as the model can overflow from its canvas.
     */
    readonly originalHeight: number;
    /**
     * Canvas width of the model, scaled by the `width` of the model's layout.
     */
    readonly width: number;
    /**
     * Canvas height of the model, scaled by the `height` of the model's layout.
     */
    readonly height: number;
    /**
     * Local transformation, calculated from the model's layout.
     */
    localTransform: Matrix;
    /**
     * The final matrix to draw the model.
     */
    drawingMatrix: Matrix;
    /**
     * The hit area definitions, keyed by their names.
     */
    hitAreas: Record<string, CommonHitArea>;
    /**
     * Flags whether `gl.UNPACK_FLIP_Y_WEBGL` should be enabled when binding the textures.
     */
    textureFlipY: boolean;
    /**
     * WebGL viewport when drawing the model. The format is `[x, y, width, height]`.
     */
    viewport: [number, number, number, number];
    /**
     * Flags this instance has been destroyed.
     */
    destroyed: boolean;
    /**
     * Should be called in the constructor of derived class.
     */
    protected init(): void;
    /**
     * Sets up the model's size and local transform by the model's layout.
     */
    protected setupLayout(): void;
    /**
     * Sets up the hit areas by their definitions in settings.
     */
    protected setupHitAreas(): void;
    /**
     * Hit-test on the model.
     * @param x - Position in model canvas.
     * @param y - Position in model canvas.
     * @return The names of the *hit* hit areas. Can be empty if none is hit.
     */
    hitTest(x: number, y: number): string[];
    /**
     * Hit-test for a single hit area.
     * @param hitAreaName - The hit area's name.
     * @param x - Position in model canvas.
     * @param y - Position in model canvas.
     * @return True if hit.
     */
    isHit(hitAreaName: string, x: number, y: number): boolean;
    /**
     * Gets a drawable's bounds.
     * @param index - Index of the drawable.
     * @param bounds - Object to store the output values.
     * @return The bounds in model canvas space.
     */
    getDrawableBounds(index: number, bounds?: Bounds): Bounds;
    /**
     * Updates the model's transform.
     * @param transform - The world transform.
     */
    updateTransform(transform: Matrix): void;
    /**
     * Updates the model's parameters.
     * @param dt - Elapsed time in milliseconds from last frame.
     * @param now - Current time in milliseconds.
     */
    update(dt: DOMHighResTimeStamp, now: DOMHighResTimeStamp): void;
    /**
     * Destroys the model and all related resources.
     * @emits {@link InternalModelEvents.destroy | destroy}
     */
    destroy(): void;
    /**
     * Gets all the hit area definitions.
     * @return Normalized definitions.
     */
    protected abstract getHitAreaDefs(): CommonHitArea[];
    /**
     * Gets the model's original canvas size.
     * @return `[width, height]`
     */
    protected abstract getSize(): [number, number];
    /**
     * Gets the layout definition.
     * @return Normalized definition.
     */
    protected abstract getLayout(): CommonLayout;
    /**
     * Gets all the drawables' IDs.
     * @return IDs.
     */
    abstract getDrawableIDs(): string[];
    /**
     * Finds the index of a drawable by its ID.
     * @return The index.
     */
    abstract getDrawableIndex(id: string): number;
    /**
     * Gets a drawable's vertices.
     * @param index - Either the index or the ID of the drawable.
     * @throws Error when the drawable cannot be found.
     */
    abstract getDrawableVertices(index: number | string): Float32Array;
    /**
     * Updates WebGL context bound to this model.
     * @param gl - WebGL context.
     * @param glContextID - Unique ID for given WebGL context.
     */
    abstract updateWebGLContext(gl: WebGLRenderingContext, glContextID: number): void;
    /**
     * Binds a texture to the model. The index must be the same as that of this texture
     * in the {@link ModelSettings.textures} array.
     */
    abstract bindTexture(index: number, texture: WebGLTexture): void;
    /**
     * Draws the model.
     */
    abstract draw(gl: WebGLRenderingContext): void;
}
