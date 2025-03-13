import type { MatcherState, SyncExpectationResult } from "@vitest/expect";
import type { SnapshotState } from "@vitest/snapshot";
import type { OverrideProperties } from "type-fest";
declare const KNOWN_ACCESSED_CTX_PROPS: readonly ["testPath", "currentTestName", "isNot", "snapshotState"];
type KnownAccessedCtxProps = (typeof KNOWN_ACCESSED_CTX_PROPS)[number];
type FakeMatcherState = OverrideProperties<Pick<MatcherState, KnownAccessedCtxProps>, {
    snapshotState: FakeSnapshotState;
}>;
export type FakeMatcherStateSerialized = OverrideProperties<FakeMatcherState, {
    snapshotState: FakeSnapshotStateSerialized;
}>;
type FakeSnapshotState = {
    updated: SnapshotState["updated"];
    added: SnapshotState["added"];
    matched: SnapshotState["matched"];
    unmatched: SnapshotState["unmatched"];
    _updateSnapshot: string;
    _counters: Map<string, number>;
};
type FakeSnapshotStateSerialized = OverrideProperties<FakeSnapshotState, {
    _counters: Record<string, number>;
}>;
export declare function handleToMatchImageSnapshot({ ctx, received, options, }: {
    ctx: FakeMatcherStateSerialized;
    received: string;
    options: unknown;
}): OverrideProperties<SyncExpectationResult, {
    message: string;
}>;
export {};
