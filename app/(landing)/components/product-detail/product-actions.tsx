"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
  product: Product;
  stock: number;
};

const ProductActions = ({ product, stock }: TProductActionsProps) => {
  const { addItem } = useCartStore();
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addItem(product, qty);
  };

  const handleCheckout = () => {
    addItem(product);
    push("/checkout");
  };

  return (
    <div className="flex items-center gap-4 mt-8">
      <div className="flex h-[48px] border border-gray-500 inline-flex w-fit">
        <div className="w-12 aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col w-8">
          <button
            className="flex-1 flex items-center cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty < stock ? qty + 1 : qty)}
          >
            <FiChevronUp />
          </button>
          <button
            className="flex-1 flex items-center cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button className="h-[50px] px-8 flex items-center gap-2" onClick={handleAddToCart}>
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button variant="dark" className="h-[50px] px-8 flex items-center gap-2" onClick={handleCheckout}>
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
};

export default ProductActions;