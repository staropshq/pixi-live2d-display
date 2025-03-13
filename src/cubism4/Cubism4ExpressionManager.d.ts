import type { MotionManagerOptions } from "@/cubism-common";
import { ExpressionManager } from "@/cubism-common/ExpressionManager";
import type { Cubism4ModelSettings } from "@/cubism4/Cubism4ModelSettings";
import type { CubismSpec } from "@cubism/CubismSpec";
import type { CubismModel } from "@cubism/model/cubismmodel";
import { CubismExpressionMotion } from "@cubism/motion/cubismexpressionmotion";
import { CubismMotionQueueManager } from "@cubism/motion/cubismmotionqueuemanager";
export declare class Cubism4ExpressionManager extends ExpressionManager<CubismExpressionMotion, CubismSpec.Expression> {
    readonly queueManager: CubismMotionQueueManager;
    readonly definitions: CubismSpec.Expression[];
    constructor(settings: Cubism4ModelSettings, options?: MotionManagerOptions);
    isFinished(): boolean;
    getExpressionIndex(name: string): number;
    getExpressionFile(definition: CubismSpec.Expression): string;
    createExpression(data: object, definition: CubismSpec.Expression | undefined): CubismExpressionMotion;
    protected _setExpression(motion: CubismExpressionMotion): number;
    protected stopAllExpressions(): void;
    protected updateParameters(model: CubismModel, now: DOMHighResTimeStamp): boolean;
}
