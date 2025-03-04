"use server";

import { prisma } from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;
  try {
    const products = await prisma.product.findMany({
      take: 8,
      skip: (page - 1) * take,
      include: {
        image: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

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
