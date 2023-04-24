// jshint esversion:6
import { useDispatch } from "react-redux"
import { cartActions } from "../../features/cartSlice";
import { closeModal } from "../../features/modalSlice"

function Modal() {
    const dispatch = useDispatch();

    return (
        <>
            <aside className="modal-container">
                <div className="modal">
                    <h4>Remove all items from your shopping cart?</h4>
                    <div className="btn-container">
                        <button type="button" className="btn confirm-btn" onClick={() => {
                            dispatch(cartActions.clearCart());
                            dispatch(closeModal());
                        }}>confirm</button>
                        <button className="btn clear-btn" onClick={() => {
                            dispatch(closeModal());
                        }}>clear</button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export { Modal }