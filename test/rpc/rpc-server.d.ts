import type { Plugin } from "vite";
import { handleToMatchImageSnapshot } from "./image-snapshot-server";
declare const rpcFunctions: {
    hi: () => string;
    toMatchImageSnapshot: typeof handleToMatchImageSnapshot;
};
export type RpcFunctions = typeof rpcFunctions;
export declare function testRpcPlugin(): Plugin;
export {};
