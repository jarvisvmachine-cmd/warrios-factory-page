import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, ShieldCheck, Repeat, Award } from "lucide-react";
import heroImg from "@/assets/hero-bjj.jpg";
import athleteImg from "@/assets/brand-athlete.jpg";
import logo from "@/assets/warriors-logo.png";
import catGi from "@/assets/cat-gi.jpg";
import catRash from "@/assets/cat-rashguard.jpg";
import catShorts from "@/assets/cat-shorts.jpg";
import catAcc from "@/assets/cat-accessories.jpg";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Warriors Factory — Kimonos & equipamiento de Brazilian Jiu-Jitsu" },
      { name: "description", content: "Kimonos BJJ, rashguards, shorts de lucha y equipamiento técnico de alto rendimiento." },
      { property: "og:title", content: "Warriors Factory — Equipamiento BJJ" },
      { property: "og:description", content: "Forjado para el tatami." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO — light, editorial split layout */}
      <section className="relative overflow-hidden bg-card">
        <div className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6 lg:col-span-5 order-2 md:order-1">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="Warriors Factory" className="h-14 w-auto" />
              <div>
                <p className="font-display text-lg tracking-[0.3em] leading-none text-foreground">WARRIORS FACTORY</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-1.5">Colección 2026</p>
              </div>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight text-foreground">
              LA MEJOR ARMADURA
              <br />
              PARA EL <span className="text-accent">COMBATE</span>.
            </h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Kimonos, rashguards y shorts diseñados con la precisión que exige el tatami.
              Materiales premium. Cortes anatómicos. Hecho para entrenar duro.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 uppercase tracking-[0.2em] text-xs rounded-sm h-12 px-8">
                <Link to="/products">
                  Ver tienda <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="uppercase tracking-[0.2em] text-xs rounded-sm h-12 px-8 border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
                <Link to="/about">Nuestra historia</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Calidad pro</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> Envío 48h</div>
              <div className="flex items-center gap-2"><Repeat className="h-4 w-4" /> 30 días</div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7 order-1 md:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-md bg-background shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Kimono BJJ blanco con cinturón negro"
                width={1920}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute top-5 left-5 bg-background/95 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] rounded-sm border border-border">
                Nuevo
              </div>
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="absolute bottom-5 right-5 h-16 w-auto opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>

        {/* announcement bar */}
        <div className="border-y border-border bg-background">
          <div className="container mx-auto px-4 md:px-8 py-3 flex flex-wrap justify-center md:justify-between items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Envío gratis desde 80€</span>
            <span className="hidden md:inline">Pago seguro</span>
            <span>Cambios en 30 días</span>
            <span className="hidden md:inline">Atención por WhatsApp</span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Explora</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">
              CATEGORÍAS
            </h2>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors">
            Ver tienda <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Kimonos", sub: "Gi", img: catGi },
            { label: "Rashguards", sub: "Licras", img: catRash },
            { label: "Shorts", sub: "Fight", img: catShorts },
            { label: "Accesorios", sub: "Cinturones", img: catAcc },
          ].map((c) => (
            <Link key={c.label} to="/products" className="group relative block overflow-hidden rounded-md bg-card aspect-[3/4]">
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-background/70">{c.sub}</p>
                <p className="mt-1 font-display text-2xl md:text-3xl tracking-wider text-background">
                  {c.label}
                </p>
                <span className="mt-3 inline-flex items-center text-[10px] uppercase tracking-[0.25em] text-background/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  Comprar <ArrowRight className="ml-2 h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="border-t border-border bg-card">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Selección</p>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">
                LO MÁS VENDIDO
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
            >
              Ver todo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <ProductGrid first={8} />
        </div>
      </section>

      {/* BRAND / MANIFESTO */}
      <section className="container mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-card">
              <img
                src={athleteImg}
                alt="Atleta de BJJ con cinturón negro"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-background border border-border rounded-md p-5 shadow-[var(--shadow-card)] max-w-[200px]">
              <Award className="h-5 w-5 text-accent" />
              <p className="mt-2 font-display text-2xl tracking-wider leading-none">IBJJF</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Aprobado competición</p>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Nuestra filosofía</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider leading-[0.95] text-foreground">
              MENOS ATAJOS.
              <br />
              MÁS <span className="text-accent">TÉCNICA</span>.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Cada gi nace de la observación obsesiva: tejidos pearl weave de 450gsm,
                costuras reforzadas en triple puntada y paneles anatómicos que dan libertad
                total en la guardia.
              </p>
              <p>
                No vendemos ropa. Forjamos herramientas para artistas marciales que
                entienden que la técnica vale tanto como el material que la sostiene.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-display text-3xl md:text-4xl text-foreground">10+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Años en el tatami</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-foreground">5K</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Atletas activos</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-foreground">450</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">gsm pearl weave</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-background/60 mb-3">Únete al dojo</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider leading-tight">
              EQUÍPATE COMO LOS QUE COMPITEN.
            </h2>
            <p className="mt-4 text-background/70 max-w-xl">
              Suscríbete y recibe un 10% en tu primer pedido, además de acceso anticipado a nuevos lanzamientos.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 uppercase tracking-[0.2em] text-xs rounded-sm h-12 px-8 w-full md:w-auto">
              <Link to="/products">
                Empieza ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
