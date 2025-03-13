declare const enum EyeState {
    Idle = 0,
    Closing = 1,
    Closed = 2,
    Opening = 3
}
export declare class Live2DEyeBlink {
    readonly coreModel: Live2DModelWebGL;
    leftParam: number;
    rightParam: number;
    blinkInterval: DOMHighResTimeStamp;
    closingDuration: DOMHighResTimeStamp;
    closedDuration: DOMHighResTimeStamp;
    openingDuration: DOMHighResTimeStamp;
    eyeState: EyeState;
    eyeParamValue: number;
    closedTimer: number;
    nextBlinkTimeLeft: number;
    constructor(coreModel: Live2DModelWebGL);
    setEyeParams(value: number): void;
    update(dt: DOMHighResTimeStamp): void;
}
export {};
