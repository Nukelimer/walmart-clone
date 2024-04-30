import fetchProduct from "@/lib/fetchProducts";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddToCart from "../components/AddToCart";

type Props = {
  searchParams: {
    url: string;
  };
};

async function ProductHome({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);

  console.log(product);

  if (!product) {
    return notFound();
  }

  return (
    <>
      {product.out_of_stock ? (
        <div className=" flex flex-col justify-center items-center h-screen ">
          <h1 className="text-2xl animate-pulse pb-6">This item is out of Stock at the moment, check for other items.</h1>

          <Image
            alt="disappointed"
            src={"/disappointed.png"}
            width={300}
            height={300}
          />
        </div>
      ) : (
        <div className=" hover:transition-all hover:animate-pulse hover:delay-1000 cursor-pointer p-4 lg:p-10 flex flex-col md:flex-row w-full">
          <div className=" hidden md:inline space-y-4">
            {product?.images.map((img, i) => {
              return (
                <Image
                  key={img + crypto.randomUUID()}
                  src={img}
                  alt={product.title}
                  width={90}
                  height={90}
                  className="border rounded-md"
                />
              );
            })}
          </div>

          <Carousel
            opts={{
              loop: true,
            }}
            className="w-3/5 mb-10 lg:m-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20">
            <CarouselContent>
              {product?.images.map((img, i) => {
                return (
                  <CarouselItem key={i}>
                    <div className="p-1">
                      <div className="flex aspect-square items-center justify-center p-2 relative">
                        <Image
                          key={img + crypto.randomUUID()}
                          src={img}
                          alt={product.title}
                          width={300}
                          height={300}
                          className="border rounded-md"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="md:ml-20 " />
            <CarouselNext className="md:mr-20 " />
          </Carousel>

          <div className="flex-1 border rounded-md w-full p-5 space-y-5">
            <h1 className="text-2xl font-bold">{product.title}</h1>

            <div className="spacex-2">
              {product?.breadcrumbs.map((breadcrumbs, i) => {
                return (
                  <Badge
                    key={i + crypto.randomUUID()}
                    className={breadcrumbs}
                    variant={"outline"}>
                    {breadcrumbs}
                  </Badge>
                );
              })}
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="py-5"
            />

            {product.rating && (
              <p
                className={`${
                  product.rating.rating < 2.5
                    ? "text-red-800"
                    : product.rating.rating < 3.5
                    ? "text-yellow-500"
                    : "text-green-500"
                } text-sm font-semibold`}>
                {product.rating.rating}/5.0 of{" "}
                <span>{product.rating.count} rating.</span>
              </p>
            )}

            <p className="text-2xl font-bold mt-2">
              {product?.currency} {product?.price}
            </p>

                          
                          <AddToCart product={ product} />
            <hr />

            <h3 className="font-bold text-xl pt-10">Specifications.</h3>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-extrabold">
                    Specification.
                  </TableHead>
                  <TableHead className="font-extrabold">Value.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {product?.specifications.map((specification) => {
                  // console.log(specification);

                  return (
                    <TableRow key={specification.key}>
                      <TableCell className="font-bold">
                        {specification.key}
                      </TableCell>

                      <TableCell>{specification.value}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductHome;
