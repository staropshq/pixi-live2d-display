import type { MotionManagerOptions } from "@/cubism-common/MotionManager";
import { MotionManager } from "@/cubism-common/MotionManager";
import { Cubism2ExpressionManager } from "@/cubism2/Cubism2ExpressionManager";
import type { Cubism2ModelSettings } from "@/cubism2/Cubism2ModelSettings";
import type { Cubism2Spec } from "../types/Cubism2Spec";
import "./patch-motion";
export declare class Cubism2MotionManager extends MotionManager<Live2DMotion, Cubism2Spec.Motion> {
    readonly definitions: Partial<Record<string, Cubism2Spec.Motion[]>>;
    readonly groups: {
        readonly idle: "idle";
    };
    readonly motionDataType = "arraybuffer";
    readonly queueManager: MotionQueueManager;
    readonly lipSyncIds: string[];
    readonly settings: Cubism2ModelSettings;
    expressionManager?: Cubism2ExpressionManager;
    constructor(settings: Cubism2ModelSettings, options?: MotionManagerOptions);
    protected init(options?: MotionManagerOptions): void;
    isFinished(): boolean;
    createMotion(data: ArrayBuffer, group: string, definition: Cubism2Spec.Motion): Live2DMotion;
    getMotionFile(definition: Cubism2Spec.Motion): string;
    protected getMotionName(definition: Cubism2Spec.Motion): string;
    protected getSoundFile(definition: Cubism2Spec.Motion): string | undefined;
    protected _startMotion(motion: Live2DMotion, onFinish?: (motion: Live2DMotion) => void): number;
    protected _stopAllMotions(): void;
    protected updateParameters(model: Live2DModelWebGL, now: DOMHighResTimeStamp): boolean;
    destroy(): void;
}
