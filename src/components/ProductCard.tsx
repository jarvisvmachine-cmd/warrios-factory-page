import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Loader2, Plus } from "lucide-react";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <Link
      to="/product/$handle"
      params={{ handle: product.node.handle }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-card rounded-md border border-border/60">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || product.node.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest">
            Sin imagen
          </div>
        )}
        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Button
            onClick={handleAdd}
            disabled={isLoading || !variant}
            className="w-full bg-foreground text-background hover:bg-foreground/90 uppercase tracking-[0.2em] text-xs rounded-sm h-10"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : (<><Plus className="h-4 w-4 mr-2" /> Añadir</>)}
          </Button>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-start gap-3">
        <div className="min-w-0">
          {product.node.productType && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
              {product.node.productType}
            </p>
          )}
          <h3 className="text-sm font-semibold leading-tight text-foreground truncate">{product.node.title}</h3>
        </div>
        <p className="text-sm font-semibold tracking-tight whitespace-nowrap text-foreground">
          {parseFloat(price.amount).toFixed(2)} {price.currencyCode}
        </p>
      </div>
    </Link>
  );
}