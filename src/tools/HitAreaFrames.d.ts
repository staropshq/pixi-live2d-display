import type { Renderer } from "@pixi/core";
import { Graphics } from "@pixi/graphics";
import { Text } from "@pixi/text";
import type { FederatedPointerEvent } from "pixi.js";
export declare class HitAreaFrames extends Graphics {
    initialized: boolean;
    texts: Text[];
    strokeWidth: number;
    normalColor: number;
    activeColor: number;
    constructor();
    init(): void;
    onPointerMove(e: FederatedPointerEvent): void;
    /** @override */
    protected _render(renderer: Renderer): void;
}
