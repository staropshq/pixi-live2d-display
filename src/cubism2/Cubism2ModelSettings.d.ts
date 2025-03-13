import { ModelSettings } from "@/cubism-common/ModelSettings";
import type { Cubism2Spec } from "../types/Cubism2Spec";
export declare class Cubism2ModelSettings extends ModelSettings {
    json: Cubism2Spec.ModelJSON;
    moc: string;
    textures: string[];
    pose?: string;
    physics?: string;
    layout?: Cubism2Spec.Layout;
    hitAreas?: Cubism2Spec.HitArea[];
    initParams?: Cubism2Spec.InitParam[];
    initOpacities?: Cubism2Spec.InitOpacity[];
    expressions?: Cubism2Spec.Expression[];
    motions: Record<string, Cubism2Spec.Motion[]>;
    /**
     * Checks if a JSON object is valid model settings.
     * @param json
     */
    static isValidJSON(json: any): json is Cubism2Spec.ModelJSON;
    constructor(json: Cubism2Spec.ModelJSON & {
        url: string;
    });
    /**
     * Validates and copies *optional* properties from raw JSON.
     */
    protected copy(json: Cubism2Spec.ModelJSON): void;
    replaceFiles(replace: (file: string, path: string) => string): void;
}
