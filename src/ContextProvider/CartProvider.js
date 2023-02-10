import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from "../Reducer/CartReducer"

const CartContext = createContext()

const getLocalCartData = () => {
    let emptyCart = []
    let newCartData = localStorage.getItem('cartItem')
    if (newCartData === null) {
        return emptyCart;
    }
    else {
        return JSON.parse(newCartData)
    }
}

const initialState = {
    cart: getLocalCartData(),
    totalPrice: '',
    shippingFee: 80
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (quantity, productDetail) => {
        dispatch({ type: "ADD_TO_CART", payload: { quantity, productDetail } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // Adding Data into localStorage

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_PRICE" })
        localStorage.setItem("cartItem", JSON.stringify(state.cart))
    }, [state.cart])



    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};


const UserCartContext = () => {
    return useContext(CartContext)
};

export { CartProvider, UserCartContext };