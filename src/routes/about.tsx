import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Nuestra historia — Warriors Factory" },
      { name: "description", content: "La filosofía detrás de Warriors Factory: equipamiento técnico de BJJ probado desde el tatami." },
      { property: "og:title", content: "Nuestra historia — Warriors Factory" },
      { property: "og:description", content: "Equipamiento BJJ creado por y para guerreros del tatami." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Nuestra historia</p>
      <h1 className="font-display text-5xl md:text-7xl tracking-wider leading-none">
        LA FILOSOFÍA <span className="text-primary">WARRIORS FACTORY</span>
      </h1>
      <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Warriors Factory nace de una idea simple: el material de lucha tiene que aguantar la vida real
          del tatami. Agarres fuertes, lavados constantes, rounds largos y días en los que entrenas aunque
          el cuerpo no negocie.
        </p>
        <p>
          Diseñamos para gente que entrena de verdad: los que llegan a las 06:00 antes de trabajar, los que
          preparan competición y los que quieren un gi que no moleste cuando la técnica empieza a pesar.
        </p>
        <p>
          Trabajamos con tejidos pearl weave, refuerzos donde el rival tira de verdad y cortes pensados para
          BJJ. La referencia es clara: piezas aptas para entrenar fuerte y con medidas orientadas a competición
          IBJJF cuando el producto lo indique.
        </p>
        <p className="text-foreground italic">
          Porque tu técnica merece equipamiento que esté a la altura.
        </p>
      </div>
    </div>
  );
}
