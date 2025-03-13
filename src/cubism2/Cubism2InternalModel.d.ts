import type { InternalModelOptions } from "@/cubism-common";
import type { CommonHitArea, CommonLayout } from "@/cubism-common/InternalModel";
import { InternalModel } from "@/cubism-common/InternalModel";
import type { Cubism2ModelSettings } from "./Cubism2ModelSettings";
import { Cubism2MotionManager } from "./Cubism2MotionManager";
import { Live2DEyeBlink } from "./Live2DEyeBlink";
import type { Live2DPhysics } from "./Live2DPhysics";
import type { Live2DPose } from "./Live2DPose";
export declare class Cubism2InternalModel extends InternalModel {
    settings: Cubism2ModelSettings;
    coreModel: Live2DModelWebGL;
    motionManager: Cubism2MotionManager;
    eyeBlink?: Live2DEyeBlink;
    physics?: Live2DPhysics;
    pose?: Live2DPose;
    eyeballXParamIndex: number;
    eyeballYParamIndex: number;
    angleXParamIndex: number;
    angleYParamIndex: number;
    angleZParamIndex: number;
    bodyAngleXParamIndex: number;
    breathParamIndex: number;
    textureFlipY: boolean;
    lipSync: boolean;
    /**
     * Number of the drawables in this model.
     */
    drawDataCount: number;
    /**
     * If true, the face culling will always be disabled when drawing the model,
     * regardless of the model's internal flags.
     */
    disableCulling: boolean;
    private hasDrawn;
    constructor(coreModel: Live2DModelWebGL, settings: Cubism2ModelSettings, options?: InternalModelOptions);
    protected init(): void;
    protected getSize(): [number, number];
    protected getLayout(): CommonLayout;
    updateWebGLContext(gl: WebGLRenderingContext, glContextID: number): void;
    bindTexture(index: number, texture: WebGLTexture): void;
    protected getHitAreaDefs(): CommonHitArea[];
    getDrawableIDs(): string[];
    getDrawableIndex(id: string): number;
    getDrawableVertices(drawIndex: number | string): Float32Array;
    hitTest(x: number, y: number): string[];
    update(dt: DOMHighResTimeStamp, now: DOMHighResTimeStamp): void;
    updateFocus(): void;
    updateNaturalMovements(dt: DOMHighResTimeStamp, now: DOMHighResTimeStamp): void;
    draw(gl: WebGLRenderingContext): void;
    destroy(): void;
}
