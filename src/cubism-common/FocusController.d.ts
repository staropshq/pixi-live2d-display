/**
 * Interpolates the transition of focus position.
 */
export declare class FocusController {
    /** The focus position. */
    targetX: number;
    /** The focus position. */
    targetY: number;
    /** Current position. */
    x: number;
    /** Current position. */
    y: number;
    /** Current velocity. */
    vx: number;
    /** Current velocity. */
    vy: number;
    /**
     * Sets the focus position.
     * @param x - X position in range `[-1, 1]`.
     * @param y - Y position in range `[-1, 1]`.
     * @param instant - Should the focus position be instantly applied.
     */
    focus(x: number, y: number, instant?: boolean): void;
    /**
     * Updates the interpolation.
     * @param dt - Delta time in milliseconds.
     */
    update(dt: DOMHighResTimeStamp): void;
}
