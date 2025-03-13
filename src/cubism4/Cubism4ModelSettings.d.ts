import { ModelSettings } from "@/cubism-common/ModelSettings";
import type { CubismSpec } from "@cubism/CubismSpec";
import { CubismModelSettingsJson } from "@cubism/settings/cubismmodelsettingsjson";
export interface Cubism4ModelSettings extends CubismModelSettingsJson {
}
export declare class Cubism4ModelSettings extends ModelSettings {
    json: CubismSpec.ModelJSON;
    moc: string;
    textures: string[];
    static isValidJSON(json: any): json is CubismSpec.ModelJSON;
    constructor(json: CubismSpec.ModelJSON & {
        url: string;
    });
    replaceFiles(replace: (file: string, path: string) => string): void;
}
