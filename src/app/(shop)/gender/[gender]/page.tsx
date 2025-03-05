export const revalidate = 60;
import { notFound } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@/model";

interface Props {
  params: Promise<{ gender: Gender }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = await params;
  const searchParamsPage = await searchParams;

  const page = searchParamsPage.page ? parseInt(searchParamsPage.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    gender,
    page,
  });

  const labels: Record<Gender, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  if (!products.length) notFound();

  return (
    <>
      <Title
        title={`Articulos  ${labels[gender]}`}
        subtitle="Best Seller"
        className="mb-2"
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
