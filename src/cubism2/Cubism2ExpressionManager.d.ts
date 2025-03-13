import type { MotionManagerOptions } from "@/cubism-common";
import { ExpressionManager } from "@/cubism-common/ExpressionManager";
import type { Cubism2ModelSettings } from "@/cubism2/Cubism2ModelSettings";
import type { Cubism2Spec } from "../types/Cubism2Spec";
import { Live2DExpression } from "./Live2DExpression";
export declare class Cubism2ExpressionManager extends ExpressionManager<Live2DExpression> {
    readonly queueManager: MotionQueueManager;
    readonly definitions: Cubism2Spec.Expression[];
    readonly settings: Cubism2ModelSettings;
    constructor(settings: Cubism2ModelSettings, options?: MotionManagerOptions);
    isFinished(): boolean;
    getExpressionIndex(name: string): number;
    getExpressionFile(definition: Cubism2Spec.Expression): string;
    createExpression(data: object, definition: Cubism2Spec.Expression | undefined): Live2DExpression;
    protected _setExpression(motion: Live2DExpression): number;
    protected stopAllExpressions(): void;
    protected updateParameters(model: Live2DModelWebGL, dt: number): boolean;
}
