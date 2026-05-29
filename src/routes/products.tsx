import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Tienda — Warriors Factory" },
      { name: "description", content: "Kimonos, rashguards, shorts y accesorios de Brazilian Jiu-Jitsu para entrenamiento y competición." },
      { property: "og:title", content: "Tienda — Warriors Factory" },
      { property: "og:description", content: "Equipamiento técnico de BJJ para entrenar duro y competir con confianza." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Catálogo completo</p>
        <h1 className="font-display text-5xl md:text-7xl tracking-wider">TIENDA</h1>
        <p className="mt-4 text-muted-foreground">
          Kimonos, rashguards, shorts de lucha y accesorios seleccionados para entrenar fuerte, competir y repetir mañana.
        </p>
      </div>
      <ProductGrid first={50} />
    </div>
  );
}
