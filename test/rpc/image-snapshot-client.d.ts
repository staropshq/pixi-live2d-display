interface CustomMatchers<T = unknown> {
    toMatchImageSnapshot(): Promise<void>;
}
declare module "vitest" {
    interface Assertion<T = any> extends CustomMatchers<T> {
    }
    interface AsymmetricMatchersContaining extends CustomMatchers {
    }
}
export {};
