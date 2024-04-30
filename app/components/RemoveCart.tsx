"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store";
import { Product } from "@/typings/productTyping";
import React from "react";

function RemoveCart({ product }: { product: Product }) {
  const removeFromCart = useCartStore((state) => state.removeItemFromCart);

  const removeHandler = () => {
    removeFromCart(product);
  };
  return <Button onClick={removeHandler} className="bg-walmart hover:bg-walmart/90"> -</Button>;
}

export default RemoveCart;
