// jshint esversion:6
import { ChevronDown, ChevronUp } from "../../assets/svg"
import { useAppDispatch } from "../../hooks"
import { cartActions } from "../../features/cartSlice"

interface CartItemProps {
    id: string
    title: string
    price: string
    img: string
    amount: number
}

function CartItem({ id, title, price, img, amount }: CartItemProps) {

    // Dispatch actions created in the reducer
    const dispatch = useAppDispatch();

    return (
        <>
            <article className="cart-item">
                <img src={img} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <h4 className="item-price">${price}</h4>
                    <button className="remove-btn" onClick={() => dispatch(cartActions.removeItem({ id }))}>remove</button>
                </div>
                <div>
                    <button className="amount-btn" onClick={() => dispatch(cartActions.increase({ id }))}>
                        <ChevronUp />
                    </button>
                    <p className="amount">{amount}</p>
                    <button className="amount-btn" onClick={() => {
                        if (amount === 1) {
                            dispatch(cartActions.removeItem({ id }));
                            return;
                        }
                        dispatch(cartActions.decrease({ id }))
                    }}>
                        <ChevronDown />
                    </button>
                </div>
            </article>
        </>
    );
}

export { CartItem };