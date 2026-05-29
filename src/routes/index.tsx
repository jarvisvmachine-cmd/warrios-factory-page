import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-bjj.jpg";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoninBJJ — Kimonos & equipamiento de Brazilian Jiu-Jitsu" },
      { name: "description", content: "Kimonos BJJ, rashguards, shorts de lucha y equipamiento técnico de alto rendimiento." },
      { property: "og:title", content: "RoninBJJ — Equipamiento BJJ" },
      { property: "og:description", content: "Forjado para el tatami." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Combate de Brazilian Jiu-Jitsu"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="relative h-full container mx-auto px-4 md:px-8 flex items-center">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Temporada 2026 — Nueva colección
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-foreground">
              FORJADO EN
              <br />
              EL <span className="text-primary">TATAMI</span>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed">
              Kimonos, rashguards y shorts de lucha diseñados para el guerrero moderno.
              Cada costura prueba la presión del combate real.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest rounded-none h-12 px-8">
                <Link to="/products">
                  Comprar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="uppercase tracking-widest rounded-none h-12 px-8 border-foreground/30 hover:bg-foreground/5">
                <Link to="/about">Nuestra historia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { label: "Kimonos", sub: "Gi" },
            { label: "Rashguards", sub: "Licras" },
            { label: "Shorts", sub: "Fight" },
            { label: "Accesorios", sub: "Cinturones" },
          ].map((c) => (
            <Link
              key={c.label}
              to="/products"
              className="px-6 py-8 text-center hover:bg-secondary/40 transition-colors group"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{c.sub}</p>
              <p className="mt-2 font-display text-2xl tracking-wider group-hover:text-primary transition-colors">
                {c.label}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container mx-auto px-4 md:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Selección</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              EQUIPO DESTACADO
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Ver todo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <ProductGrid first={8} />
      </section>

      {/* MANIFESTO */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Filosofía</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider leading-none">
              SIN ATAJOS.
              <br />
              <span className="text-primary">SIN EXCUSAS.</span>
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Cada gi nace de la observación obsesiva: tejidos pearl weave de 450gsm, costuras reforzadas
              en triple puntada, paneles anatómicos que permiten libertad total en la guardia.
            </p>
            <p>
              No vendemos ropa. Forjamos herramientas para artistas marciales que entienden que la
              técnica vale tanto como el material que la sostiene.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
