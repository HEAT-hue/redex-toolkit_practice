// jshint esversion:6
import { CartIcon } from "../../assets/svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Navbar() {

    // Destructure the properties you need
    const { amount } = useSelector((store: RootState) => store.cart);

    return (
        <>
            <nav>
                <div className="nav-center">
                    <h3>redux toolkit</h3>
                    <div className="nav-container">
                        <CartIcon />
                        <div className="amount-container">
                            <p className="total-amount">{amount}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { Navbar }