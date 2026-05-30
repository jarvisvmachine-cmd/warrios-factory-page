import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Repeat,
  Award,
  Ruler,
  Shield,
  ScanLine,
} from "lucide-react";
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
      {
        name: "description",
        content:
          "Kimonos BJJ, rashguards, shorts y equipamiento técnico probado en entrenamiento duro y competición.",
      },
      { property: "og:title", content: "Warriors Factory — Equipamiento BJJ" },
      {
        property: "og:description",
        content:
          "Equipamiento de Brazilian Jiu-Jitsu probado para entrenar, competir y volver al tatami al día siguiente.",
      },
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
                <p className="font-display text-lg tracking-[0.3em] leading-none text-foreground">
                  WARRIORS FACTORY
                </p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-1.5">
                  Colección 2026
                </p>
              </div>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight text-foreground">
              LA MEJOR ARMADURA
              <br />
              PARA EL <span className="text-accent">COMBATE</span>.
            </h1>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Kimonos, rashguards y shorts pensados para entrenar duro, competir y aguantar lavados,
              agarres y rounds de verdad. Materiales serios, ajuste cómodo y estética limpia.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 uppercase tracking-[0.2em] text-xs rounded-sm h-12 px-8"
              >
                <Link to="/products">
                  Ver tienda <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="uppercase tracking-[0.2em] text-xs rounded-sm h-12 px-8 border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
              >
                <Link to="/about">Nuestra historia</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Probado en tatami
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" /> Envío 48h
              </div>
              <div className="flex items-center gap-2">
                <Repeat className="h-4 w-4" /> 30 días
              </div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7 order-1 md:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-md bg-background shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Kimono BJJ blanco con cinturón negro"
                width={1254}
                height={1254}
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
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Explora
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">
              CATEGORÍAS
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
          >
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
            <Link
              key={c.label}
              to="/products"
              className="group relative block overflow-hidden rounded-md bg-card aspect-[3/4]"
            >
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
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Selección
              </p>
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

      {/* KIMONO ANATOMY */}
      <section className="border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Anatomía del kimono
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-wider leading-[0.95] text-foreground">
                DISEÑADO PARA ENTRENAR.
                <br />
                HECHO PARA <span className="text-accent">DURAR</span>.
              </h2>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Un kimono no es solo una prenda. Es una herramienta de trabajo. Cada zona tiene
                  que aguantar agarres, tensión, sudor, lavados y muchas horas de tatami.
                </p>
                <p>
                  Por eso miramos el gi como se mira una pieza técnica: solapa firme, costuras
                  reforzadas, tejido estable y puntos de tensión preparados para entrenar fuerte.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Shield,
                    title: "Solapa firme",
                    text: "Estructura pensada para resistir agarres sin perder presencia.",
                  },
                  {
                    icon: ScanLine,
                    title: "Costuras clave",
                    text: "Refuerzos en hombros, axilas y zonas de fricción continua.",
                  },
                  {
                    icon: Ruler,
                    title: "Corte útil",
                    text: "Movimiento limpio sin exceso de tela ni sensación rígida.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-border rounded-md p-4 bg-card">
                    <item.icon className="h-5 w-5 text-accent" />
                    <h3 className="mt-4 font-display text-xl tracking-wider text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-md border border-border bg-card p-5 md:p-8 shadow-[var(--shadow-card)]">
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <p className="font-display text-2xl tracking-wider text-foreground">
                        GI TECH PATTERN
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                        Despiece técnico del kimono
                      </p>
                    </div>
                    <p className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      WF-2026
                    </p>
                  </div>

                  <div className="relative mt-8 aspect-[4/3] min-h-[280px]">
                    <svg
                      viewBox="0 0 720 520"
                      className="absolute inset-0 h-full w-full"
                      role="img"
                      aria-label="Plano técnico de un kimono desmontado"
                    >
                      <defs>
                        <pattern id="stitch" width="8" height="8" patternUnits="userSpaceOnUse">
                          <path
                            d="M0 4H8"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="2 3"
                          />
                        </pattern>
                      </defs>
                      <g
                        className="text-foreground"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          d="M314 78 L238 132 L198 252 L242 270 L278 178 L278 392 L442 392 L442 178 L478 270 L522 252 L482 132 L406 78 Z"
                          strokeWidth="3"
                          fill="var(--color-background)"
                        />
                        <path
                          d="M338 86 L300 158 L334 230 L360 178 L386 230 L420 158 L382 86"
                          strokeWidth="2"
                        />
                        <path
                          d="M300 158 L278 392 M420 158 L442 392"
                          strokeWidth="1.5"
                          strokeDasharray="6 8"
                        />
                        <path
                          d="M242 270 L198 252 M478 270 L522 252 M278 392 H442"
                          strokeWidth="5"
                          opacity="0.18"
                        />
                        <path
                          d="M278 178 L242 270 M442 178 L478 270"
                          strokeWidth="2"
                          strokeDasharray="4 7"
                        />
                        <path
                          d="M94 150 L190 112 L220 184 L124 222 Z"
                          strokeWidth="2.5"
                          fill="var(--color-background)"
                        />
                        <path
                          d="M530 112 L626 150 L596 222 L500 184 Z"
                          strokeWidth="2.5"
                          fill="var(--color-background)"
                        />
                        <path
                          d="M138 330 L252 330 L234 458 L154 458 Z"
                          strokeWidth="2.5"
                          fill="var(--color-background)"
                        />
                        <path
                          d="M468 330 L582 330 L566 458 L486 458 Z"
                          strokeWidth="2.5"
                          fill="var(--color-background)"
                        />
                        <path d="M154 458 H234 M486 458 H566" strokeWidth="5" opacity="0.18" />
                        <path d="M360 178 V392" strokeWidth="1.5" strokeDasharray="3 8" />
                        <circle cx="360" cy="178" r="5" fill="var(--color-accent)" stroke="none" />
                        <circle cx="278" cy="304" r="5" fill="var(--color-accent)" stroke="none" />
                        <circle cx="442" cy="304" r="5" fill="var(--color-accent)" stroke="none" />
                        <circle cx="234" cy="458" r="5" fill="var(--color-accent)" stroke="none" />
                      </g>
                      <g
                        className="text-muted-foreground"
                        fill="currentColor"
                        fontSize="13"
                        fontFamily="Inter, system-ui, sans-serif"
                        letterSpacing="1.5"
                      >
                        <text x="382" y="174">
                          SOLAPA REFORZADA
                        </text>
                        <path d="M374 170 H520" stroke="currentColor" strokeWidth="1" />
                        <text x="64" y="282">
                          MANGAS Y AGARRES
                        </text>
                        <path d="M202 276 H278" stroke="currentColor" strokeWidth="1" />
                        <text x="468" y="304">
                          COSTURAS DE TENSIÓN
                        </text>
                        <path d="M458 300 H442" stroke="currentColor" strokeWidth="1" />
                        <text x="250" y="486">
                          BAJOS Y FALDA
                        </text>
                        <path d="M242 462 H330" stroke="currentColor" strokeWidth="1" />
                      </g>
                    </svg>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <div className="border border-border bg-background/70 rounded-sm p-3">
                      Pearl weave estable para uso diario
                    </div>
                    <div className="border border-border bg-background/70 rounded-sm p-3">
                      Refuerzos donde el combate castiga
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND / MANIFESTO */}
      <section className="container mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-card">
              <img
                src={athleteImg}
                alt="Atleta de BJJ con cinturón negro"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-border bg-background rounded-md p-4 shadow-[var(--shadow-card)]">
                <Award className="h-5 w-5 text-accent" />
                <p className="mt-2 font-display text-2xl tracking-wider leading-none">IBJJF</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Aprobado competición
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Nuestra filosofía
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider leading-[0.95] text-foreground">
              HECHO PARA EL TATAMI.
              <br />
              LISTO PARA <span className="text-accent">COMPETIR</span>.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Cada gi está pensado para lo que pasa de verdad en un combate: tejido pearl weave de
                450gsm, refuerzos en las zonas de agarre y un corte que deja moverte sin pelearte
                con tu propio kimono.
              </p>
              <p>
                No va de parecer preparado en una foto. Va de llevar material que aguanta cuando
                estás cansado, sudado y todavía queda otra ronda.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-display text-3xl md:text-4xl text-foreground">10+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Diseñado desde el tatami
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-foreground">IBJJF</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Cortes de competición
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-foreground">450</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  gsm pearl weave
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-background/60 mb-3">
              Únete al dojo
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider leading-tight">
              EQUÍPATE PARA ENTRENAR COMO COMPITES.
            </h2>
            <p className="mt-4 text-background/70 max-w-xl">
              Piezas técnicas para BJJ, grappling y entrenamiento diario. Sin adornos inútiles:
              ajuste, resistencia y presencia.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 uppercase tracking-[0.2em] text-xs rounded-sm h-12 px-8 w-full md:w-auto"
            >
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
