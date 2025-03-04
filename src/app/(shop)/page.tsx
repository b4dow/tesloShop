import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";

export default async function Shop() {
  const { products } = await getPaginatedProductsWithImages();
  return (
    <>
      <Title title="Tienda" subtitle="Todos los Productos" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
