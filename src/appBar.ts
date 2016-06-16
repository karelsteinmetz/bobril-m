import * as b from "bobril";

export interface IAppBarData {
}

interface IAppBarCtx extends b.IBobrilCtx {
    data: IAppBarData;
}

export const AppBar = b.createComponent<IAppBarData>({
    render(ctx: IAppBarCtx, me: b.IBobrilNode) {
        me.children = "AppBar";
    }
})