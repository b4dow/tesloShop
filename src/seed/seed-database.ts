import { prisma } from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // 1. Borrar registros previos
  await Promise.all([
    await prisma.productImage.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.category.deleteMany(),
  ]);

  const { categories, products } = initialData;

  // Categories
  const categoriesData = categories.map((name) => ({ name }));
  await prisma.category.createMany({
    data: categoriesData,
  });
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
  console.log("seed executed");
})();
