import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

import { DefaultLayout } from "./layouts/DefautLayout/index";
import { Success } from "./pages/Sucess";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/success" element={<Success />} />
      </Route>
    </Routes>
  )
}