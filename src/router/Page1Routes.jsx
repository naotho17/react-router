import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// page1Routesという配列を返す

// この配列の中にオブジェクトをおいていく
export const page1Routes = [
  {
    // page1のネストされたルーティングでは、①path(URL)②eaxctかどうか
    // ③実際にレンダリングしていくコンポーネント に違いがあったので以下。
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
