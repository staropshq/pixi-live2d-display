import type { Cubism2Spec } from "../types/Cubism2Spec";
declare class Live2DPartsParam {
    readonly id: string;
    paramIndex: number;
    partsIndex: number;
    link: Live2DPartsParam[];
    constructor(id: string);
    initIndex(model: Live2DModelWebGL): void;
}
export declare class Live2DPose {
    readonly coreModel: Live2DModelWebGL;
    opacityAnimDuration: DOMHighResTimeStamp;
    partsGroups: Live2DPartsParam[][];
    constructor(coreModel: Live2DModelWebGL, json: Cubism2Spec.PoseJSON);
    init(): void;
    normalizePartsOpacityGroup(partsGroup: Live2DPartsParam[], dt: DOMHighResTimeStamp): void;
    copyOpacity(partsGroup: Live2DPartsParam[]): void;
    update(dt: DOMHighResTimeStamp): void;
}
export {};
