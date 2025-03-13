export declare function rpc(): import("birpc").BirpcReturn<{
    hi: () => string;
    toMatchImageSnapshot: typeof import("./image-snapshot-server").handleToMatchImageSnapshot;
}, object>;
