declare interface Live2DMotion {
    onFinishHandler?(motion: this): void;
}
declare const originalUpdateParam: (model: Live2DModelWebGL, entry: Live2DObfuscated.MotionQueueEnt) => void;
