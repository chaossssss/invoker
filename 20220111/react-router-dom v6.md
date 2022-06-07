[react-router-dom v6 使用](https://blog.csdn.net/weixin_44051815/article/details/121413076)


1.嵌套路由的 path 可以不用写父级，会直接拼接；
2.动态路由通过 :style 的形式实现；
3.由于 /goods/list 的匹配度大于 /goods/* ，所以输入精确地址，会精确匹配，而不是匹配到动态路由；
4.嵌套路由必须在父级追加 Outlet 组件，作为子级组件的占位符，类似于 vue-router 中的 router-view 。
```
<Route path='/' element={<Home />}>
  <Route path='goods' element={<Goods />} >
    {/* 动态路由 */}
    <Route path=":id" element={<GoodsDetail />}/>
    <Route path="list" element={<GoodsList />}/>
  </Route>

  <Route path='customer' element={<Customer />} ></Route>
</Route>
```


路由表
useRoutes

// 入口文件，src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index";


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("root"));

// src/router/routes.tsx
import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../home/Home";
import Goods from "../goods/Goods";
import Customer from "../customer/Customer";
import NotFound from "../not-found/NotFound";
import GoodsDetail from "../goods/goods-detail/GoodsDetail";
import GoodsList from "../goods/goods-list/GoodsList";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/goods",
        element: <Goods />,
        children: [
          { index: true, element: <GoodsList /> },
          { path: ":id", element: <GoodsDetail /> }
        ]
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  }
];

export default routes;

// src/App.tsx
import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";

export default function App() {

  const element = useRoutes(routes);
  return (
    <>
      {element}
    </>
  );
}