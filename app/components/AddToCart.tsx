"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store";
import { Product } from "@/typings/productTyping";
import React from "react";
import RemoveCart from "./RemoveCart";

function AddToCart({ product }: { product: Product }) {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  const checkHowManyItemInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  const AddToCartHandler = () => {
    console.log(product);

    addToCart(product);
  };

  if (checkHowManyItemInCart > 0) {
    return (
      <div className="flex space-x-5 items-center hover:!animate-none">
        <RemoveCart product={product} />
        <span>{checkHowManyItemInCart}</span>

        <Button onClick={AddToCartHandler}>+</Button>
      </div>
    );
  }

  return <Button onClick={AddToCartHandler}>Add to cart</Button>;
}

export default AddToCart;
