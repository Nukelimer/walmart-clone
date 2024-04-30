import { Badge } from "@/components/ui/badge";
import { Organic } from "@/typings/searchTypings";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Product({ product }: { product: Organic }) {


  return (
    <Link
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
      className="p-5  h-full rounded-md relative flex flex-col hover:transition-all hover:animate-pulse hover:scale-110 hover:delay-1000">
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        className="mx-auto"
        style={{ width: "auto", height: "auto" }}
      />

      <p className="text-xl font-bold">
        {product.price?.currency}
        {product.price.price}
      </p>

      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">{product.badge}</Badge>
          )}
  
          <p className="font-light">{product.title}</p>
          
          {
              product.rating && <p className={`${product.rating.rating < 2.5 ?'text-red-800': product.rating.rating < 3.5 ? 'text-yellow-500': 'text-green-500'} text-sm font-semibold`}>
               {product.rating.rating}/5.0   



              </p> 
          }
    </Link>
  );
}

export default Product;
