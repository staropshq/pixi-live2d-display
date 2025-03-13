/**
 * Indicates the motion priority.
 */
export declare enum MotionPriority {
    /** States that the model is currently not playing any motion. This priority cannot be applied to a motion. */
    NONE = 0,
    /** Low priority, used when starting idle motions automatically. */
    IDLE = 1,
    /** Medium priority. */
    NORMAL = 2,
    /** High priority. Motions as this priority will always be played regardless of the current priority. */
    FORCE = 3
}
/**
 * Handles the state of a MotionManager.
 */
export declare class MotionState {
    /**
     * Tag for logging.
     */
    tag: string;
    /**
     * When enabled, the states will be dumped to the logger when an exception occurs.
     */
    debug: boolean;
    /**
     * Priority of the current motion. Will be `MotionPriority.NONE` if there's no playing motion.
     */
    currentPriority: MotionPriority;
    /**
     * Priority of the reserved motion, which is still in loading and will be played once loaded.
     * Will be `MotionPriority.NONE` if there's no reserved motion.
     */
    reservePriority: MotionPriority;
    /**
     * Group of current motion.
     */
    currentGroup?: string;
    /**
     * Index of current motion in its group.
     */
    currentIndex?: number;
    /**
     * Group of the reserved motion.
     */
    reservedGroup?: string;
    /**
     * Index of the reserved motion in its group.
     */
    reservedIndex?: number;
    /**
     * Group of the reserved idle motion.
     */
    reservedIdleGroup?: string;
    /**
     * Index of the reserved idle motion in its group.
     */
    reservedIdleIndex?: number;
    /**
     * Reserves the playback for a motion.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @param priority - The priority to be applied.
     * @return True if the reserving has succeeded.
     */
    reserve(group: string, index: number, priority: MotionPriority): boolean;
    /**
     * Requests the playback for a motion.
     * @param motion - The Motion, can be undefined.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @param priority - The priority to be applied.
     * @return True if the request has been approved, i.e. the motion is allowed to play.
     */
    start(motion: any, group: string, index: number, priority: MotionPriority): boolean;
    /**
     * Notifies the motion playback has finished.
     */
    complete(): void;
    /**
     * Sets the current motion.
     */
    setCurrent(group: string | undefined, index: number | undefined, priority: MotionPriority): void;
    /**
     * Sets the reserved motion.
     */
    setReserved(group: string | undefined, index: number | undefined, priority: MotionPriority): void;
    /**
     * Sets the reserved idle motion.
     */
    setReservedIdle(group: string | undefined, index: number | undefined): void;
    /**
     * Checks if a Motion is currently playing or has reserved.
     * @return True if active.
     */
    isActive(group: string, index: number): boolean;
    /**
     * Resets the state.
     */
    reset(): void;
    /**
     * Checks if an idle motion should be requests to play.
     */
    shouldRequestIdleMotion(): boolean;
    /**
     * Checks if the model's expression should be overridden by the motion.
     */
    shouldOverrideExpression(): boolean;
    /**
     * Dumps the state for debugging.
     */
    dump(requestedGroup?: string, requestedIndex?: number): string;
}
