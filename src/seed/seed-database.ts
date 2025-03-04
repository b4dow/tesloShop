import { prisma } from "../lib/prisma";

async function main() {
  // 1. Borrar registros previos
  await Promise.all([
    await prisma.productImage.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.category.deleteMany(),
  ]);
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
  console.log("seed executed");
})();
