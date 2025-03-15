export const revalidate = 60 * 60 * 24 * 7;
import { Metadata } from "next";
import { getProductBySlug } from "@/actions";
import {
  ProductMobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description,
      images: [`/products/${product?.image[1]}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 pb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        {/* Desktop Slideshow */}
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <StockLabel slug={product.slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* Selector de Tallas */}
        <SizeSelector
          selectedSize={product.sizes[2]}
          availableSizes={product.sizes}
        />
        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2} />
        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>
        {/* Descripcion */}
        <h3 className="font-bold text-sm ">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
