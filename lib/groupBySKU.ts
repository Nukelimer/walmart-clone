import { Product } from "@/typings/productTyping";

export const groupBySKU = (products: Product[]): Record<string, Product[]> => {
  return products?.reduce(
    (accumulator: Record<string, Product[]>, subsequent: Product) => {
      const sku = subsequent.meta.sku;

      if (!accumulator[sku]) {
        accumulator[sku] = [];
      }

      accumulator[sku].push(subsequent);
      return accumulator;
    },
    {}
  );
};
