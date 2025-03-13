import type { Live2DFactoryContext } from "@/factory/Live2DFactory";
import type { Middleware } from "@/utils/middleware";
/**
 * A middleware that converts the source from a URL to a settings JSON object.
 */
export declare const urlToJSON: Middleware<Live2DFactoryContext>;
/**
 * A middleware that converts the source from a settings JSON object to a ModelSettings instance.
 */
export declare const jsonToSettings: Middleware<Live2DFactoryContext>;
export declare const waitUntilReady: Middleware<Live2DFactoryContext>;
/**
 * A middleware that populates the Live2DModel with optional resources.
 * Requires InternalModel in context when all the subsequent middlewares have finished.
 */
export declare const setupOptionals: Middleware<Live2DFactoryContext>;
/**
 * A middleware that populates the Live2DModel with essential resources.
 * Requires ModelSettings in context immediately, and InternalModel in context
 * when all the subsequent middlewares have finished.
 */
export declare const setupEssentials: Middleware<Live2DFactoryContext>;
/**
 * A middleware that creates the InternalModel. Requires ModelSettings in context.
 */
export declare const createInternalModel: Middleware<Live2DFactoryContext>;
