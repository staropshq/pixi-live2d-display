import { Application } from "@pixi/app";
import type { Awaitable, TestContext } from "vitest";
export declare const TEST_MODEL2: Readonly<{
    mocData: (() => Promise<ArrayBuffer>) & import("lodash").MemoizedFunction;
    coreModel: () => Promise<Live2DModelWebGL>;
    name: "shizuku";
    cubismVersion: 2;
    modelJsonUrl: string;
    modelJson: {
        type: string;
        name: string;
        model: string;
        textures: string[];
        physics: string;
        pose: string;
        expressions: {
            name: string;
            file: string;
        }[];
        hit_areas: {
            name: string;
            id: string;
        }[];
        motions: {
            idle: {
                file: string;
                fade_in: number;
                fade_out: number;
            }[];
            tap_body: {
                file: string;
                sound: string;
            }[];
            pinch_in: {
                file: string;
                sound: string;
            }[];
            pinch_out: {
                file: string;
                sound: string;
            }[];
            shake: {
                file: string;
                sound: string;
                fade_in: number;
            }[];
            flick_head: {
                file: string;
                sound: string;
            }[];
        };
    };
    modelJsonWithUrl: {
        url: string;
        type: string;
        name: string;
        model: string;
        textures: string[];
        physics: string;
        pose: string;
        expressions: {
            name: string;
            file: string;
        }[];
        hit_areas: {
            name: string;
            id: string;
        }[];
        motions: {
            idle: {
                file: string;
                fade_in: number;
                fade_out: number;
            }[];
            tap_body: {
                file: string;
                sound: string;
            }[];
            pinch_in: {
                file: string;
                sound: string;
            }[];
            pinch_out: {
                file: string;
                sound: string;
            }[];
            shake: {
                file: string;
                sound: string;
                fade_in: number;
            }[];
            flick_head: {
                file: string;
                sound: string;
            }[];
        };
    };
    files: (() => Promise<File[]>) & import("lodash").MemoizedFunction;
    width: 1280;
    height: 1380;
    layout: {
        center_x: number;
        y: number;
        width: number;
    };
    hitTests: {
        x: number;
        y: number;
        hitArea: string[];
    }[];
    interaction: {
        exp: string;
        motion: {
            body: string;
        };
    };
}>;
export declare const TEST_MODEL4: Readonly<{
    mocData: (() => Promise<ArrayBuffer>) & import("lodash").MemoizedFunction;
    coreModel: () => Promise<import("@cubism/model/cubismmodel").CubismModel>;
    name: "haru";
    cubismVersion: 4;
    modelJsonUrl: string;
    modelJson: {
        Version: number;
        FileReferences: {
            Moc: string;
            Textures: string[];
            Physics: string;
            Pose: string;
            DisplayInfo: string;
            Expressions: {
                Name: string;
                File: string;
            }[];
            Motions: {
                Idle: {
                    File: string;
                }[];
                Tap: {
                    File: string;
                    Sound: string;
                }[];
            };
        };
        Groups: {
            Target: string;
            Name: string;
            Ids: string[];
        }[];
        HitAreas: {
            Id: string;
            Name: string;
        }[];
    };
    modelJsonWithUrl: {
        url: string;
        Version: number;
        FileReferences: {
            Moc: string;
            Textures: string[];
            Physics: string;
            Pose: string;
            DisplayInfo: string;
            Expressions: {
                Name: string;
                File: string;
            }[];
            Motions: {
                Idle: {
                    File: string;
                }[];
                Tap: {
                    File: string;
                    Sound: string;
                }[];
            };
        };
        Groups: {
            Target: string;
            Name: string;
            Ids: string[];
        }[];
        HitAreas: {
            Id: string;
            Name: string;
        }[];
    };
    files: (() => Promise<File[]>) & import("lodash").MemoizedFunction;
    width: 2400;
    height: 4500;
    layout: {
        Width: number;
        X: number;
    };
    hitTests: {
        x: number;
        y: number;
        hitArea: string[];
    }[];
    interaction: {
        exp: string;
        motion: {
            Body: string;
        };
    };
}>;
export declare const ALL_TEST_MODELS: (Readonly<{
    mocData: (() => Promise<ArrayBuffer>) & import("lodash").MemoizedFunction;
    coreModel: () => Promise<Live2DModelWebGL>;
    name: "shizuku";
    cubismVersion: 2;
    modelJsonUrl: string;
    modelJson: {
        type: string;
        name: string;
        model: string;
        textures: string[];
        physics: string;
        pose: string;
        expressions: {
            name: string;
            file: string;
        }[];
        hit_areas: {
            name: string;
            id: string;
        }[];
        motions: {
            idle: {
                file: string;
                fade_in: number;
                fade_out: number;
            }[];
            tap_body: {
                file: string;
                sound: string;
            }[];
            pinch_in: {
                file: string;
                sound: string;
            }[];
            pinch_out: {
                file: string;
                sound: string;
            }[];
            shake: {
                file: string;
                sound: string;
                fade_in: number;
            }[];
            flick_head: {
                file: string;
                sound: string;
            }[];
        };
    };
    modelJsonWithUrl: {
        url: string;
        type: string;
        name: string;
        model: string;
        textures: string[];
        physics: string;
        pose: string;
        expressions: {
            name: string;
            file: string;
        }[];
        hit_areas: {
            name: string;
            id: string;
        }[];
        motions: {
            idle: {
                file: string;
                fade_in: number;
                fade_out: number;
            }[];
            tap_body: {
                file: string;
                sound: string;
            }[];
            pinch_in: {
                file: string;
                sound: string;
            }[];
            pinch_out: {
                file: string;
                sound: string;
            }[];
            shake: {
                file: string;
                sound: string;
                fade_in: number;
            }[];
            flick_head: {
                file: string;
                sound: string;
            }[];
        };
    };
    files: (() => Promise<File[]>) & import("lodash").MemoizedFunction;
    width: 1280;
    height: 1380;
    layout: {
        center_x: number;
        y: number;
        width: number;
    };
    hitTests: {
        x: number;
        y: number;
        hitArea: string[];
    }[];
    interaction: {
        exp: string;
        motion: {
            body: string;
        };
    };
}> | Readonly<{
    mocData: (() => Promise<ArrayBuffer>) & import("lodash").MemoizedFunction;
    coreModel: () => Promise<import("@cubism/model/cubismmodel").CubismModel>;
    name: "haru";
    cubismVersion: 4;
    modelJsonUrl: string;
    modelJson: {
        Version: number;
        FileReferences: {
            Moc: string;
            Textures: string[];
            Physics: string;
            Pose: string;
            DisplayInfo: string;
            Expressions: {
                Name: string;
                File: string;
            }[];
            Motions: {
                Idle: {
                    File: string;
                }[];
                Tap: {
                    File: string;
                    Sound: string;
                }[];
            };
        };
        Groups: {
            Target: string;
            Name: string;
            Ids: string[];
        }[];
        HitAreas: {
            Id: string;
            Name: string;
        }[];
    };
    modelJsonWithUrl: {
        url: string;
        Version: number;
        FileReferences: {
            Moc: string;
            Textures: string[];
            Physics: string;
            Pose: string;
            DisplayInfo: string;
            Expressions: {
                Name: string;
                File: string;
            }[];
            Motions: {
                Idle: {
                    File: string;
                }[];
                Tap: {
                    File: string;
                    Sound: string;
                }[];
            };
        };
        Groups: {
            Target: string;
            Name: string;
            Ids: string[];
        }[];
        HitAreas: {
            Id: string;
            Name: string;
        }[];
    };
    files: (() => Promise<File[]>) & import("lodash").MemoizedFunction;
    width: 2400;
    height: 4500;
    layout: {
        Width: number;
        X: number;
    };
    hitTests: {
        x: number;
        y: number;
        hitArea: string[];
    }[];
    interaction: {
        exp: string;
        motion: {
            Body: string;
        };
    };
}>)[];
type TestModel = (typeof ALL_TEST_MODELS)[number];
export declare function testEachModel(name: string, fn: (ctx: TestContext & CustomContext & {
    model: TestModel;
}) => Awaitable<void>): void;
export declare function describeEachModel(name: string, fn: (ctx: {
    model: TestModel;
}) => Awaitable<void>): void;
export declare const TEST_TEXTURE: string;
export declare const TEST_SOUND: string;
interface CustomContext {
    loaderMock: {
        getAll: () => {
            url: string;
        }[];
        rewrite: (fn: (url: string) => string) => void;
        block: (filter: string | RegExp | ((url: string) => boolean)) => void;
        unblock: (filter: string | RegExp | ((url: string) => boolean), transformData?: (data: any) => any) => void;
        blockAll: () => void;
        unblockAll: () => void;
        onLoaded: (filter: string | RegExp | ((url: string) => boolean)) => Promise<void>;
    };
    app: Application;
    timer: void;
    objectURLs: string[];
}
export declare const test: import("vitest").TestAPI<{
    loaderMock: {
        getAll: () => {
            url: string;
        }[];
        rewrite: (fn: (url: string) => string) => void;
        block: (filter: string | RegExp | ((url: string) => boolean)) => void;
        unblock: (filter: string | RegExp | ((url: string) => boolean), transformData?: (data: any) => any) => void;
        blockAll: () => void;
        unblockAll: () => void;
        onLoaded: (filter: string | RegExp | ((url: string) => boolean)) => Promise<void>;
    };
    app: Application<import("pixi.js").ICanvas>;
    timer: void;
    objectURLs: string[];
}>;
export {};
