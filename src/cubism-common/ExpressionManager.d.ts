import type { ModelSettings } from "@/cubism-common/ModelSettings";
import type { MotionManagerOptions } from "@/cubism-common/MotionManager";
import { utils } from "@pixi/core";
import type { ExpressionManagerEvents } from "../types/events";
import type { JSONObject } from "../types/helpers";
/**
 * Abstract expression manager.
 * @emits {@link ExpressionManagerEvents}
 */
export declare abstract class ExpressionManager<Expression = any, ExpressionSpec = any> extends utils.EventEmitter<keyof ExpressionManagerEvents> {
    /**
     * Tag for logging.
     */
    tag: string;
    /**
     * Expression definitions copied from ModelSettings.
     */
    abstract readonly definitions: ExpressionSpec[];
    /**
     * The ModelSettings reference.
     */
    readonly settings: ModelSettings;
    /**
     * The Expressions. The structure is the same as {@link definitions}, initially there's only
     * an empty array, which means all expressions will be `undefined`. When an Expression has
     * been loaded, it'll fill the place in which it should be; when it fails to load,
     * the place will be filled with `null`.
     */
    expressions: (Expression | null | undefined)[];
    /**
     * An empty Expression to reset all the expression parameters.
     */
    defaultExpression: Expression;
    /**
     * Current Expression. This will not be overwritten by {@link ExpressionManager#defaultExpression}.
     */
    currentExpression: Expression;
    /**
     * The pending Expression.
     */
    reserveExpressionIndex: number;
    /**
     * Flags the instance has been destroyed.
     */
    destroyed: boolean;
    protected constructor(settings: ModelSettings, options?: MotionManagerOptions);
    /**
     * Should be called in the constructor of derived class.
     */
    protected init(): void;
    /**
     * Loads an Expression. Errors in this method will not be thrown,
     * but be emitted with an "expressionLoadError" event.
     * @param index - Index of the expression in definitions.
     * @return Promise that resolves with the Expression, or with undefined if it can't be loaded.
     * @emits {@link ExpressionManagerEvents.expressionLoaded}
     * @emits {@link ExpressionManagerEvents.expressionLoadError}
     */
    protected loadExpression(index: number): Promise<Expression | undefined>;
    /**
     * Loads the Expression. Will be implemented by Live2DFactory in order to avoid circular dependency.
     * @ignore
     */
    private _loadExpression;
    /**
     * Sets a random Expression that differs from current one.
     * @return Promise that resolves with true if succeeded, with false otherwise.
     */
    setRandomExpression(): Promise<boolean>;
    /**
     * Resets model's expression using {@link ExpressionManager#defaultExpression}.
     */
    resetExpression(): void;
    /**
     * Restores model's expression to {@link currentExpression}.
     */
    restoreExpression(): void;
    /**
     * Sets an Expression.
     * @param index - Either the index, or the name of the expression.
     * @return Promise that resolves with true if succeeded, with false otherwise.
     */
    setExpression(index: number | string): Promise<boolean>;
    /**
     * Updates parameters of the core model.
     * @return True if the parameters are actually updated.
     */
    update(model: object, now: DOMHighResTimeStamp): boolean;
    /**
     * Destroys the instance.
     * @emits {@link ExpressionManagerEvents.destroy}
     */
    destroy(): void;
    /**
     * Checks if the expression playback has finished.
     */
    abstract isFinished(): boolean;
    /**
     * Retrieves the expression's index by its name.
     * @return The index. `-1` if not found.
     */
    abstract getExpressionIndex(name: string): number;
    /**
     * Retrieves the expression's file path by its definition.
     * @return The file path extracted from given definition. Not resolved.
     */
    abstract getExpressionFile(definition: ExpressionSpec): string;
    /**
     * Creates an Expression from the data.
     * @param data - Content of the expression file.
     * @param definition - The expression definition. Can be undefined in order to create {@link ExpressionManager#defaultExpression}.
     * @return The created Expression.
     */
    abstract createExpression(data: JSONObject, definition: ExpressionSpec | undefined): Expression;
    /**
     * Applies the Expression to the model.
     */
    protected abstract _setExpression(motion: Expression): number;
    /**
     * Cancels expression playback.
     */
    protected abstract stopAllExpressions(): void;
    /**
     * Updates parameters of the core model.
     * @return True if the parameters are actually updated.
     */
    protected abstract updateParameters(model: object, now: DOMHighResTimeStamp): boolean;
}
