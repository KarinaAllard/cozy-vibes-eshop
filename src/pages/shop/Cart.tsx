import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { CartItem } from "../../types/CartItem";
import { CartActionType } from "../../reducers/CartReducer";
import { Button } from "../../components/Button";
import { FaMinus, FaPlus, FaTrash } from "../../icons";
import { Link } from "react-router";

export const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    const totalCartPrice = cart.reduce(
        (total, item: CartItem) => total + item.product.price * item.quantity,
        0
    );

    const handleRemoveFromCart = (cartItem: CartItem) => {
        dispatch({
            type: CartActionType.REMOVE_ITEM,
            payload: cartItem,
        })
    }

    const handleChangeQuantity = (cartItem: CartItem, change: number) => {
        const newQuantity = cartItem.quantity + change;

        if(newQuantity > cartItem.product.stock) {
            alert("Oops, this item does not have enough stock!");
            return;
        }
        
        dispatch({
            type: CartActionType.CHANGE_QUANTITY,
            payload: { ...cartItem, quantity: change },
        });
    };

    const handleResetCart = () => {
        dispatch({
            type: CartActionType.RESET_CART,
            payload: null,
        });
    };

    return (

        <div className="flex flex-col items-center mb-20">
            <h1 className="bg-[var(--dusty-rose)] text-[var(--soft-ivory)] w-full mb-10">Shopping Cart</h1>

            {cart.length === 0 ? (
                <h3>Your cart is empty</h3>
            ) : (
                <div className="max-w-7xl">
                    <div className="">
                        {cart.map((item) => (
                            <div key={item.product.id} className="max-w-xs md:max-w-md">
                                <div className="flex flex-col items-center">
                                    <div className="p-8">
                                    <img className="border border-[var(--warm-light-gray)]" src={item.product.image} alt={item.product.name} />
                                    </div>
                                    <div className="h-16">
                                        <h4 className="">{item.product.name}</h4>
                                        <p className="text-[var(--moss-green)] font-black">€{item.product.price}</p>
                                    </div>
                                    <div className="w-full border-t pt-2 border-[var(--warm-light-gray)]">
                                        <p><b>Amount:</b> {item.quantity}</p>
                                        <p><b>Total:</b> €{item.product.price * item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex gap-5 items-center justify-center mt-6">
                                        <Button variant="secondary" className="minus-btn" onClick={() => handleChangeQuantity(item, -1)}><FaMinus /></Button>
                                        <span>{item.quantity}</span>
                                        <Button variant="secondary" className="plus-btn" onClick={() => handleChangeQuantity(item, 1)}><FaPlus /></Button>
                                    </div>
                                    <div className="">
                                        <Button variant="delete" className="px-16" onClick={() => handleRemoveFromCart(item)}><FaTrash /></Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-5 mt-10 items-center">
                        <h3>Total: €{totalCartPrice}</h3>
                        <Button variant="delete" className="trash-btn" onClick={handleResetCart}>Clear Cart</Button>
                        <Button variant="submit" className="submit-btn" disabled={cart.length === 0}><Link to={"/checkout"}>Proceed to Checkout</Link></Button>
                    </div>
                </div>
            )}
        </div>
    )
}