
const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {

        let { quantity, productDetail } = action.payload

        let cartProduct;

        let prevPrice = parseFloat(productDetail.price.replace(/,/g, ''))

        let currentPrice = prevPrice * quantity;


        let existingItem = state.cart.find((cartItem) => (
            cartItem.id === productDetail._id
        ))

        if (existingItem) {
            let updatedCart = state.cart.map((currentItem) => {
                if (currentItem.id === productDetail._id) {
                    let newQuantity = parseInt(currentItem.quantity + quantity)
                    let newAmount = currentItem.price + prevPrice

                    return {
                        ...currentItem,
                        quantity: newQuantity,
                        price: newAmount
                    }
                }
                else {
                    return currentItem
                }
            })
            return {
                ...state,
                cart: updatedCart,
            }
        }
        else {
            cartProduct = {
                id: productDetail._id,
                image: productDetail.images[0].i,
                name: productDetail.title,
                quantity: quantity,
                price: currentPrice
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((currentItem) => currentItem.id !== action.payload)
        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let totalPrice = state.cart.reduce((initialValue, currentElem) => {
            let { price } = currentElem

            initialValue = initialValue + price

            return initialValue
        }, 0)

        return {
            ...state,
            totalPrice: totalPrice
        }
    }


    return state
};

export default CartReducer;