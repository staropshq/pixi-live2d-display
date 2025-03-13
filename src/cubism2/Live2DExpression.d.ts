import type { Cubism2Spec } from "../types/Cubism2Spec";
export declare class Live2DExpression extends AMotion {
    readonly params: NonNullable<Cubism2Spec.ExpressionJSON["params"]>;
    constructor(json: Cubism2Spec.ExpressionJSON);
    /** @override */
    updateParamExe(model: Live2DModelWebGL, time: number, weight: number, motionQueueEnt: unknown): void;
}
