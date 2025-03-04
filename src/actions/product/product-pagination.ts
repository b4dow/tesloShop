"use server";

import { prisma } from "@/lib/prisma";

export const getPaginatedProductsWithImages = async () => {
  try {
    const products = await prisma.product.findMany({
      take: 8,
      include: {
        image: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    console.log(products);
    return {
      products: products.map((product) => ({
        ...product,
        images: product.image.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("error al cargar los productos");
  }
};
