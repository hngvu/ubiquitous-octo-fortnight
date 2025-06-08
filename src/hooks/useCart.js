import { useAtom } from "jotai";
import { cartAtom} from "../store/cartAtom";

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity + 1 : 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
}