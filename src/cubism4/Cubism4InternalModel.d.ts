import type { InternalModelOptions } from "@/cubism-common";
import type { CommonHitArea, CommonLayout } from "@/cubism-common/InternalModel";
import { InternalModel } from "@/cubism-common/InternalModel";
import type { Cubism4ModelSettings } from "@/cubism4/Cubism4ModelSettings";
import { Cubism4MotionManager } from "@/cubism4/Cubism4MotionManager";
import { CubismBreath } from "@cubism/effect/cubismbreath";
import { CubismEyeBlink } from "@cubism/effect/cubismeyeblink";
import type { CubismPose } from "@cubism/effect/cubismpose";
import type { CubismModel } from "@cubism/model/cubismmodel";
import type { CubismModelUserData } from "@cubism/model/cubismmodeluserdata";
import type { CubismPhysics } from "@cubism/physics/cubismphysics";
import { CubismRenderer_WebGL } from "@cubism/rendering/cubismrenderer_webgl";
import { Matrix } from "@pixi/core";
export declare class Cubism4InternalModel extends InternalModel {
    settings: Cubism4ModelSettings;
    coreModel: CubismModel;
    motionManager: Cubism4MotionManager;
    lipSync: boolean;
    breath: CubismBreath;
    eyeBlink?: CubismEyeBlink;
    pose?: CubismPose;
    physics?: CubismPhysics;
    userData?: CubismModelUserData;
    renderer: CubismRenderer_WebGL;
    idParamAngleX: string;
    idParamAngleY: string;
    idParamAngleZ: string;
    idParamEyeBallX: string;
    idParamEyeBallY: string;
    idParamBodyAngleX: string;
    idParamBreath: string;
    idParamMouthForm: string;
    /**
     * The model's internal scale, defined in the moc3 file.
     */
    readonly pixelsPerUnit: number;
    /**
     * Matrix that scales by {@link pixelsPerUnit}, and moves the origin from top-left to center.
     *
     * FIXME: This shouldn't be named as "centering"...
     */
    protected centeringTransform: Matrix;
    constructor(coreModel: CubismModel, settings: Cubism4ModelSettings, options?: InternalModelOptions);
    protected init(): void;
    protected getSize(): [number, number];
    protected getLayout(): CommonLayout;
    protected setupLayout(): void;
    updateWebGLContext(gl: WebGLRenderingContext, glContextID: number): void;
    bindTexture(index: number, texture: WebGLTexture): void;
    protected getHitAreaDefs(): CommonHitArea[];
    getDrawableIDs(): string[];
    getDrawableIndex(id: string): number;
    getDrawableVertices(drawIndex: number | string): Float32Array;
    updateTransform(transform: Matrix): void;
    update(dt: DOMHighResTimeStamp, now: DOMHighResTimeStamp): void;
    updateFocus(): void;
    updateFacialEmotion(mouthForm: number): void;
    updateNaturalMovements(dt: DOMHighResTimeStamp, now: DOMHighResTimeStamp): void;
    draw(gl: WebGLRenderingContext): void;
    destroy(): void;
}
