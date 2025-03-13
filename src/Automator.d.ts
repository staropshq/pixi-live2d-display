import type { Ticker } from "@pixi/core";
import type { FederatedPointerEvent } from "pixi.js";
import type { Live2DModel } from "./Live2DModel";
export interface AutomatorOptions {
    /**
     * Should the internal model be automatically updated by `PIXI.Ticker.shared`.
     * @default ture
     */
    autoUpdate?: boolean;
    /**
     * Should the internal model automatically reacts to interactions by listening for pointer events.
     * @default true
     * @deprecated since v0.5.0, reading/writing this property is equivalent to reading/writing `autoHitTest && autoFocus`.
     */
    autoInteract?: boolean;
    /**
     * Automatically hit-test the model when `pointertap` event is triggered.
     * @default true
     */
    autoHitTest?: boolean;
    /**
     * Automatically update the focus position when `globalpointermove` event is triggered.
     * @default true
     */
    autoFocus?: boolean;
    /**
     * The ticker to be used for automatic updates.
     * @default `PIXI.Ticker.shared` from the global PIXI namespace.
     */
    ticker?: Ticker;
}
export declare class Automator {
    private static defaultTicker?;
    model: Live2DModel;
    private destroyed;
    private _ticker?;
    get ticker(): Ticker | undefined;
    set ticker(ticker: Ticker | undefined);
    private _autoUpdate;
    /**
     * @see {@link AutomatorOptions.autoUpdate}
     */
    get autoUpdate(): boolean;
    set autoUpdate(autoUpdate: boolean);
    private _autoHitTest;
    /**
     * @see {@link AutomatorOptions.autoHitTest}
     */
    get autoHitTest(): boolean;
    set autoHitTest(autoHitTest: boolean);
    private _autoFocus;
    /**
     * @see {@link AutomatorOptions.autoFocus}
     */
    get autoFocus(): boolean;
    set autoFocus(autoFocus: boolean);
    /**
     * @see {@link AutomatorOptions.autoInteract}
     */
    get autoInteract(): boolean;
    set autoInteract(autoInteract: boolean);
    constructor(model: Live2DModel, { autoUpdate, autoHitTest, autoFocus, autoInteract, ticker, }?: AutomatorOptions);
    onTickerUpdate(): void;
    onTap(event: FederatedPointerEvent): void;
    onPointerMove(event: FederatedPointerEvent): void;
    destroy(): void;
}
