"use server";

import { prisma } from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      include: {
        image: {
          select: {
            url: true,
          },
        },
      },
      where: {
        slug: slug,
      },
    });

    if (!product) return null;

    return {
      ...product,
      images: product.image.map((image) => image.url),
    };
  } catch (error) {
    console.log(error);
    throw new Error("error al obtener producto por slug");
  }
};
