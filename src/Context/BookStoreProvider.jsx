import { useState } from "react";
import BookStoreContext from "./bookStorContext";



const BookStoreProvider = ({ children }) => {
  const [bookSearch, setBookSearch] = useState('');
  const [cartInfo, setCartInfo] = useState([]);
  // Handle Add To Cart
  const addToCart = (item) => {
    // make the quantity from str to  integer 
    item.quantity = parseInt(item.quantity);
    // Check if item's quantity is not 0
    if (item.quantity !== 0) {
      const isExist = cartInfo.find((e) => e.id === item.id);
      if (isExist) {

        setCartInfo(
          cartInfo.map((cartelement) => (cartelement.id === item.id ? item : cartelement)

          )

        );
        console.log(item);

      } else {
        const newCartValue = [...cartInfo, item];
        setCartInfo(newCartValue);
      }
    }

  }

  // Handle Remove From Cart
  const removeFromCart = (id) => {
    // const cart = cartInfo.filter((c) => c.id !== id);
    const cart = cartInfo.filter((e) => e.id !== id);
    // cart.splice(id, 1)
    setCartInfo(cart);
  }

  return (
    <BookStoreContext.Provider
      value={{
        cartInfo,
        addToCart,
        removeFromCart,
        cartInfolenght: cartInfo.length,
        bookSearch,
        setBookSearch
      }}
    >
      {children}
    </BookStoreContext.Provider>
  )
}

export default BookStoreProvider