import { ProductGrid, Title } from "@/components";
import { Category } from "@/model";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: Promise<{ id: Category }>;
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  if (!products.length) {
    notFound();
  }

  return (
    <>
      <Title
        title={`Articulos  ${labels[id]}`}
        subtitle="Best Seller"
        className="mb-2"
      />
      {products.map((product) => (
        <ProductGrid key={product.slug} products={products} />
      ))}
    </>
  );
}
