import type { MotionManagerOptions } from "@/cubism-common/MotionManager";
import { MotionManager } from "@/cubism-common/MotionManager";
import { Cubism4ExpressionManager } from "@/cubism4/Cubism4ExpressionManager";
import type { Cubism4ModelSettings } from "@/cubism4/Cubism4ModelSettings";
import type { CubismSpec } from "@cubism/CubismSpec";
import type { CubismModel } from "@cubism/model/cubismmodel";
import { CubismMotion } from "@cubism/motion/cubismmotion";
import { CubismMotionQueueManager } from "@cubism/motion/cubismmotionqueuemanager";
export declare class Cubism4MotionManager extends MotionManager<CubismMotion, CubismSpec.Motion> {
    readonly definitions: Partial<Record<string, CubismSpec.Motion[]>>;
    readonly groups: {
        readonly idle: "Idle";
    };
    readonly motionDataType = "json";
    readonly queueManager: CubismMotionQueueManager;
    readonly settings: Cubism4ModelSettings;
    expressionManager?: Cubism4ExpressionManager;
    eyeBlinkIds: string[];
    lipSyncIds: string[];
    constructor(settings: Cubism4ModelSettings, options?: MotionManagerOptions);
    protected init(options?: MotionManagerOptions): void;
    isFinished(): boolean;
    protected _startMotion(motion: CubismMotion, onFinish?: (motion: CubismMotion) => void): number;
    protected _stopAllMotions(): void;
    createMotion(data: object, group: string, definition: CubismSpec.Motion): CubismMotion;
    getMotionFile(definition: CubismSpec.Motion): string;
    protected getMotionName(definition: CubismSpec.Motion): string;
    protected getSoundFile(definition: CubismSpec.Motion): string | undefined;
    protected updateParameters(model: CubismModel, now: DOMHighResTimeStamp): boolean;
    destroy(): void;
}
