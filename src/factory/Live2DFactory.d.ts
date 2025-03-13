import type { Live2DModel, Live2DModelOptions } from "@/Live2DModel";
import type { InternalModel, ModelSettings } from "@/cubism-common";
import { ExpressionManager, MotionManager } from "@/cubism-common";
import type { Middleware } from "@/utils/middleware";
import type { JSONObject } from "../types/helpers";
export interface Live2DFactoryOptions extends Live2DModelOptions {
    /**
     * Whether to check the consistency of the moc file. It's an internal
     * function of Cubism core and only available since Cubism 4 R7.
     * @default false
     */
    checkMocConsistency?: boolean;
    /**
     * String to use for crossOrigin properties on `<img>` elements when loading textures.
     * @default undefined
     */
    crossOrigin?: string;
    /**
     * Callback invoked when the model has been loaded.
     * @default undefined
     */
    onLoad?(): void;
    /**
     * Callback invoked when error occurs while loading the model.
     * @default undefined
     */
    onError?(e: Error): void;
}
/**
 * The context transferred through the model creation middlewares.
 */
export interface Live2DFactoryContext {
    source: any;
    options: Live2DFactoryOptions;
    live2dModel: Live2DModel;
    internalModel?: InternalModel;
    settings?: ModelSettings;
}
/**
 * Represents a Cubism version.
 */
export interface Live2DRuntime {
    /**
     * The version number. Higher version takes priority when matching the runtime.
     */
    version: number;
    /**
     * Checks if the source belongs to this runtime.
     * @param source - Either a settings JSON object or a ModelSettings instance.
     * @return True if the source belongs to this runtime.
     */
    test(source: any): boolean;
    ready(): Promise<void>;
    /**
     * Checks if the data is a valid moc to create the core model.
     * @param modelData - The moc content.
     * @return True if the data is valid.
     */
    isValidMoc(modelData: ArrayBuffer): boolean;
    /**
     * Creates a ModelSettings.
     * @param json - The settings JSON object.
     * @return Created ModelSettings.
     */
    createModelSettings(json: JSONObject): ModelSettings;
    /**
     * Creates a core model.
     * @param data - Content of the moc file.
     * @return Created core model.
     */
    createCoreModel(data: ArrayBuffer, options?: Live2DFactoryOptions): any;
    /**
     * Creates an InternalModel.
     * @param coreModel - Core model that *must* belong to this runtime.
     * @param settings - ModelSettings of this model.
     * @param options - Options that will be passed to the InternalModel's constructor.
     * @return Created InternalModel.
     */
    createInternalModel(coreModel: any, settings: ModelSettings, options?: Live2DFactoryOptions): InternalModel;
    /**
     * Creates a pose.
     * @param coreModel - Core model that *must* belong to this runtime.
     * @param data - Content of the pose file.
     * @return Created pose.
     */
    createPose(coreModel: any, data: any): any;
    /**
     * Creates a physics.
     * @param coreModel - Core model that *must* belong to this runtime.
     * @param data - Content of the physics file.
     * @return Created physics.
     */
    createPhysics(coreModel: any, data: any): any;
}
/**
 * Handles all the network load tasks.
 *
 * - Model creation: requested by {@link Live2DModel.from}.
 * - Motion loading: implements the load method of MotionManager.
 * - Expression loading: implements the load method of ExpressionManager.
 */
export declare class Live2DFactory {
    /**
     * All registered runtimes, sorted by versions in descending order.
     */
    static runtimes: Live2DRuntime[];
    static urlToJSON: Middleware<Live2DFactoryContext>;
    static jsonToSettings: Middleware<Live2DFactoryContext>;
    static waitUntilReady: Middleware<Live2DFactoryContext>;
    static setupOptionals: Middleware<Live2DFactoryContext>;
    static setupEssentials: Middleware<Live2DFactoryContext>;
    static createInternalModel: Middleware<Live2DFactoryContext>;
    /**
     * Middlewares to run through when setting up a Live2DModel.
     */
    static live2DModelMiddlewares: Middleware<Live2DFactoryContext>[];
    /**
     * load tasks of each motion. The structure of each value in this map
     * is the same as respective {@link MotionManager.definitions}.
     */
    static motionTasksMap: WeakMap<MotionManager<any, any>, Record<string, (Promise<any> | undefined)[]>>;
    /**
     * Load tasks of each expression.
     */
    static expressionTasksMap: WeakMap<ExpressionManager<any, any>, (Promise<any> | undefined)[]>;
    /**
     * Registers a Live2DRuntime.
     */
    static registerRuntime(runtime: Live2DRuntime): void;
    /**
     * Finds a runtime that matches given source.
     * @param source - Either a settings JSON object or a ModelSettings instance.
     * @return The Live2DRuntime, or undefined if not found.
     */
    static findRuntime(source: any): Live2DRuntime | undefined;
    /**
     * Sets up a Live2DModel, populating it with all defined resources.
     * @param live2dModel - The Live2DModel instance.
     * @param source - Can be one of: settings file URL, settings JSON object, ModelSettings instance.
     * @param options - Options for the process.
     * @return Promise that resolves when all resources have been loaded, rejects when error occurs.
     */
    static setupLive2DModel<IM extends InternalModel>(live2dModel: Live2DModel<IM>, source: string | object | IM["settings"], options?: Live2DFactoryOptions): Promise<void>;
    /**
     * Loads a Motion and registers the task to {@link motionTasksMap}. The task will be automatically
     * canceled when its owner - the MotionManager instance - has been destroyed.
     * @param motionManager - MotionManager that owns this Motion.
     * @param group - The motion group.
     * @param index - Index in the motion group.
     * @return Promise that resolves with the Motion, or with undefined if it can't be loaded.
     */
    static loadMotion<Motion, MotionSpec>(motionManager: MotionManager<Motion, MotionSpec>, group: string, index: number): Promise<Motion | undefined>;
    /**
     * Loads an Expression and registers the task to {@link expressionTasksMap}. The task will be automatically
     * canceled when its owner - the ExpressionManager instance - has been destroyed.
     * @param expressionManager - ExpressionManager that owns this Expression.
     * @param index - Index of the Expression.
     * @return Promise that resolves with the Expression, or with undefined if it can't be loaded.
     */
    static loadExpression<Expression, ExpressionSpec>(expressionManager: ExpressionManager<Expression, ExpressionSpec>, index: number): Promise<Expression | undefined>;
    static releaseTasks(this: MotionManager | ExpressionManager): void;
}
