import { Route, Routes } from "react-router-dom";
import AmazonClone from ".";
import Item from "./Item";
import SignIn from "./Login/SignIn";
import Cart from "./Cart";
import NavBelt from "./NavBelt";
import NavMain from "./NavMain";
import Checkout from "./Checkout";

export default () => {
  return (
    <>
      <NavBelt />
      <NavMain />
      <Routes>
        <Route>
          <Route path="/" element={<AmazonClone />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Item />} />
        </Route>
      </Routes>
    </>
  );
};
