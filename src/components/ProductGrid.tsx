import { useQuery } from "@tanstack/react-query";
import { ShopifyProduct, STOREFRONT_QUERY, storefrontApiRequest } from "@/lib/shopify";
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";

export function ProductGrid({ first = 12, query }: { first?: number; query?: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", first, query],
    queryFn: async () => {
      const res = await storefrontApiRequest(STOREFRONT_QUERY, { first, query: query ?? null });
      return (res?.data?.products?.edges ?? []) as ShopifyProduct[];
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <div className="text-center py-24 border border-dashed border-border rounded-sm">
        <p className="font-display text-2xl tracking-wider text-muted-foreground">
          PRODUCTOS EN PREPARACIÓN
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Estamos cargando el catálogo técnico. Vuelve en breve o escríbenos para consultar disponibilidad.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
      {data.map((p) => (
        <ProductCard key={p.node.id} product={p} />
      ))}
    </div>
  );
}
