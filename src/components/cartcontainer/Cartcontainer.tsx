// jshint esversion:6
import { CartItemType } from "../../data";
import { CartItem } from "../cartitem";
import { openModal } from "../../features/modalSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";

function CartContainer() {
    const { cartItems, total, amount } = useAppSelector((store) => store.cart)

    // dispatch an action
    const dispatch = useAppDispatch();

    

    if (cartItems.length < 1) {
        return (
            <>
                <section className="cart">
                    <header>
                        <h2>your bag</h2>
                        <h4 className="empty-cart">is currently empty</h4>
                    </header>
                </section>
            </>
        );
    }

    return (
        <>
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                </header>
                <div>
                    {cartItems.map((item: CartItemType) => {
                        return (
                            <CartItem key={item.id} {...item} />
                        )
                    })}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>total <span>${total.toFixed()}</span></h4>
                    </div>
                    <button className="btn clear-btn" onClick={() => {
                        dispatch(openModal())
                    }}>clear cart</button>
                </footer>
            </section>
        </>
    );
}

export { CartContainer }