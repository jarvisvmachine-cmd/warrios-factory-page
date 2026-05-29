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
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary rounded-sm">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || product.node.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest">
            Sin imagen
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Button
          onClick={handleAdd}
          disabled={isLoading || !variant}
          size="icon"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
        </Button>
      </div>
      <div className="mt-4 flex justify-between items-start gap-2">
        <div>
          {product.node.productType && (
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1">
              {product.node.productType}
            </p>
          )}
          <h3 className="text-sm font-medium leading-tight">{product.node.title}</h3>
        </div>
        <p className="text-sm font-display tracking-wider whitespace-nowrap">
          {parseFloat(price.amount).toFixed(2)} {price.currencyCode}
        </p>
      </div>
    </Link>
  );
}