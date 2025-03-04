import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function Shop(props: Props) {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page,
    });
  console.log({ currentPage, totalPages });

  if (products.length === 0) redirect("/");
  return (
    <>
      <Title title="Tienda" subtitle="Todos los Productos" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
