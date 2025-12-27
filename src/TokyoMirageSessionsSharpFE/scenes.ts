import { GfxDevice } from "../gfx/platform/GfxPlatform.js";
import { SceneGfx, SceneGroup, ViewerRenderInput } from "../viewer.js";
import { SceneContext, SceneDesc } from "../SceneBase.js";
import * as BFRES from "./bfres.js";

class TokyoMirageSessionsSharpFEScene implements SceneGfx
{
    public render(device: GfxDevice, viewerInput: ViewerRenderInput): void
    {
    }

    public destroy(device: GfxDevice): void
    {
    }
}

class TokyoMirageSessionsSharpFESceneDesc implements SceneDesc
{
    constructor(public id: string, public name: string) {}

    public async createScene(device: GfxDevice, context: SceneContext): Promise<SceneGfx>
    {
        const dataFetcher = context.dataFetcher;
        const apak = dataFetcher.fetchData("TokyoMirageSessionsSharpFE/${this.id}/model.apak");
        const bfres = BFRES.parse(await dataFetcher.fetchData("TokyoMirageSessionsSharpFE/d008_01.bfres"));
        return new TokyoMirageSessionsSharpFEScene();
    }
}

const id = `TokyoMirageSessionsSharpFE`;
const name = "Tokyo Mirage Sessions ♯FE";
const sceneDescs =
[
    new TokyoMirageSessionsSharpFESceneDesc("d008_01", "Illusory Urahara"),
];

export const sceneGroup: SceneGroup = { id, name, sceneDescs };
