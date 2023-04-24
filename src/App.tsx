// jshint esversion:6
import { useEffect } from "react";
import { Navbar, CartContainer } from "./components";
import { Modal } from "./components";
import { getCartItems, cartActions } from "./features/cartSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export default function App() {

  const dispatch = useAppDispatch();

  const { cartItems, isLoading } = useAppSelector((store) => store.cart);
  const { isOpen } = useAppSelector((store) => store.modal);

  // useEffect(() => {
  //   console.log("Fetching data from API");
  //   dispatch(getCartItems());
  // }, [])

  useEffect(() => {
    dispatch(getCartItems());
  }, [])

  useEffect(() => {
    dispatch(cartActions.calculateTotals());
  }, [cartItems])

  if (isLoading) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}