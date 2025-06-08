import { useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { motion, useAnimation } from "framer-motion";

export const CartIcon = (props) => {
  const { cart } = useCart();
  const controls = useAnimation();

  useEffect(() => {
    if (cart.length > 0) {
      controls.start({
        scale: [1, 1.3, 1],
        transition: { duration: 0.3 },
      });
    }
  }, [cart, controls]);

  const itemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <div className="relative">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={512}
          height={512}
          x={0}
          y={0}
          viewBox="0 0 48 48"
        style={{
          enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        fillRule="evenodd"
        className=""
        {...props}
      >
        <g>
          <path
            d="M14.519 13.5h-2.657a3.5 3.5 0 0 0-3.491 3.251l-1.714 24a3.5 3.5 0 0 0 3.491 3.749h27.704a3.502 3.502 0 0 0 3.491-3.749l-1.714-24a3.5 3.5 0 0 0-3.491-3.251H33.5V13A9.5 9.5 0 0 0 24 3.5c-5.055 0-9.727 4.026-9.5 9.5l.019.5zm18.981 3V24a1.5 1.5 0 0 1-3 0v-7.5h-13V24a1.5 1.5 0 0 1-3 0s.13-3.505.087-7.5h-2.725a.5.5 0 0 0-.498.464l-1.715 24a.5.5 0 0 0 .499.536h27.704a.502.502 0 0 0 .499-.536l-1.715-24a.5.5 0 0 0-.498-.464zm-3-3V13a6.5 6.5 0 1 0-13 0v.5z"
            fill="currentColor"
            opacity={1}
            data-original="#000000"
            className=""
          />
        </g>
      </svg>
      <motion.div animate={controls} className="">
      {itemCount > 0 && (
        <span className="absolute -bottom-1 -right-1 text-[10px] bg-[var(--color-golden)] text-[var(--color-dark-green)] px-1 rounded-full">
          {itemCount}
        </span>
      )}
    </motion.div>
    </div>
  );
};
