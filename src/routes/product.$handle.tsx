import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft } from "lucide-react";
import { PRODUCT_BY_HANDLE_QUERY, storefrontApiRequest } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

export const Route = createFileRoute("/product/$handle")({
  component: ProductDetail,
});

function ProductDetail() {
  const { handle } = Route.useParams();
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const { data, isLoading: loading } = useQuery({
    queryKey: ["product", handle],
    queryFn: async () => {
      const r = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
      return r?.data?.productByHandle;
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <p className="font-display text-3xl tracking-wider">PRODUCTO NO ENCONTRADO</p>
        <Link to="/products" className="text-primary underline mt-4 inline-block">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const variants = data.variants.edges.map((e: any) => e.node);
  const variant = variants.find((v: any) => v.id === selectedVariantId) || variants[0];
  const images = data.images.edges.map((e: any) => e.node);

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: { node: data } as any,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
            {images[activeImage] && (
              <img src={images[activeImage].url} alt={data.title} className="w-full h-full object-cover" />
            )}
          </div>
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-5 gap-2">
              {images.map((img: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square overflow-hidden rounded-sm border-2 ${
                    i === activeImage ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          {data.productType && (
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{data.productType}</p>
          )}
          <h1 className="font-display text-4xl md:text-5xl tracking-wider">{data.title}</h1>
          <p className="mt-4 text-3xl font-display tracking-wider text-primary">
            {parseFloat(variant?.price.amount ?? data.priceRange.minVariantPrice.amount).toFixed(2)}{" "}
            {variant?.price.currencyCode ?? data.priceRange.minVariantPrice.currencyCode}
          </p>

          {data.description && (
            <p className="mt-8 text-muted-foreground leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
          )}

          {variants.length > 1 && (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Variante</p>
              <div className="flex flex-wrap gap-2">
                {variants.map((v: any) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariantId(v.id)}
                    disabled={!v.availableForSale}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      (selectedVariantId ?? variants[0].id) === v.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-foreground"
                    } ${!v.availableForSale ? "opacity-40 line-through" : ""}`}
                  >
                    {v.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleAdd}
            disabled={isLoading || !variant?.availableForSale}
            size="lg"
            className="mt-10 w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest rounded-none h-14"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : variant?.availableForSale ? (
              "Añadir al carrito"
            ) : (
              "Agotado"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}