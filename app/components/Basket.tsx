"use client";

import React from "react";
import { useCartStore } from "@/store";
import { groupBySKU } from "@/lib/groupBySKU";
import { sumCartTotal } from "@/lib/sumCartTotal";
import Image from "next/image";
import AddToCart from "./AddToCart";
export default function Basket() {
  const cart = useCartStore((state) => state.cart);

  // const basketTotal = getCartTotal(cart);
  const grouped = groupBySKU(cart);
  const Total = sumCartTotal(cart);

  return (
    <div className="max-w-7xl mx-auto ">
      <ul className="space-y-5 divide-y-2 ">
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];
          const total = sumCartTotal(grouped[sku]);
         
          return (
            <li
              key={sku}
              className="p-3 my-2 flex items-center justify-between flex-row">
              {item.images[0] && (
                <Image
                  src={item?.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className="flex space-x-4 pl-4 flex-col md:flex-row">
                <div className="w-[200px] md:w-full">
                  <p className="line-clamp-2 font-bold">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="line-clamp-1 font-light text-sm mt-2"
                  />
                </div>

                <div className="flex flex-col border rounded-md p-5">
                          <AddToCart product={item} />
                          <p className="mt-4 font-bold text-right">{ total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
