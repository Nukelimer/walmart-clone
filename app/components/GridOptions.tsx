import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import React from "react";

type Props = {
  title: string;
  className?: string;
  image?: string;
};

function GridOptions({ title, className, image }: Props) {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn(" grid-option relative", className)}>
      <h2>{title}</h2>

      {image && (
        <Image
          src={image}
          alt={title}
          fill
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-cover opacity-20 rounded-md"
        />
      )}
    </Link>
  );
}

export default GridOptions;
