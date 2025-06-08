import { useAtom } from "jotai";
import { cartAtom } from "../store/cartAtom";
import { CrossIcon, MinusIcon, PlusIcon } from "../icons";
import { Link } from "react-router";
import { Breadcrumb } from "antd";
const Cart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
    const delivery = 5.99; 
    const tax = subtotal * 0.1; 
    const total = subtotal + delivery + tax;
  return (
    <>
      <Breadcrumb className="">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item >Cart</Breadcrumb.Item>
      </Breadcrumb>
      {(!cart || cart.length === 0) ? (<><div
       className="flex flex-col items-center justify-center py-8 space-y-8">
        <img className="w-lg" src="https://theme.hstatic.net/200000921511/1001294690/14/cart_empty_background.png?v=738" alt="" />
        <Link to="/orchids" className=" text-black border-2 font-bold py-3 px-6">
          Shopping now
        </Link>
        </div></>) : (<>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      <div className="lg:col-span-2 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-xl bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
                <div>
                    <CrossIcon
                        className="w-2 h-2 cursor-pointer text-gray-500 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                    />
                </div>
              <img
                src={item.image}
                alt={item.orchidName}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.orchidName}</h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg px-2">
                <div
                  onClick={() => updateQuantity(item.id, -1)}
                  className="relative flex items-center justify-center w-6 h-6 cursor-pointer text-[#18230F] group-hover:text-black group-active:text-gray-600"
                >
                  <MinusIcon className="w-4 h-4 text-[#18230F]" />
                </div>
                <span className="mx-2">{item.quantity}</span>
                <div
                  className="relative flex items-center justify-center w-6 h-6 cursor-pointer text-[#18230F] group-hover:text-black group-active:text-gray-600"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <PlusIcon className="w-4 h-4 text-[#18230F]" />
                </div>
              </div>
              <p className="font-semibold">${(subtotal).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="border p-4 rounded-xl bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Coupon Code</h3>
          <input
            type="text"
            placeholder="Enter Your Coupon Code"
            className="w-full p-2 border rounded mb-2"
          />
          <button className="w-full py-2 border text-blue-600 border-blue-600 rounded hover:bg-blue-50">
            Apply Your Coupon
          </button>
        </div>

        <div className="border p-4 rounded-xl bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between text-sm">
            <span>Discount</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery</span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="border p-4 rounded-xl bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <div className="flex gap-2 mb-4"></div>
          <button
            className="cursor-pointer w-full
              bg-[#18230F] text-white font-bold py-3 px-6 rounded-lg shadow-lg
              hover:bg-black hover:text-[#ffe066] hover:shadow-xl
              transition-all duration-150 ease-in-out"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
    </>)}
    </>
  );
};

export default Cart;
