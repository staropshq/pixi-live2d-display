import type { Cubism2Spec } from "../types/Cubism2Spec";
export declare class Live2DPhysics {
    readonly coreModel: Live2DModelWebGL;
    physicsHairs: PhysicsHair[];
    constructor(coreModel: Live2DModelWebGL, json: Cubism2Spec.PhysicsJSON);
    update(elapsed: DOMHighResTimeStamp): void;
}
