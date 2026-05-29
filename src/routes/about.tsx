import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Nuestra historia — RoninBJJ" },
      { name: "description", content: "La filosofía detrás de RoninBJJ: equipamiento técnico forjado por practicantes." },
      { property: "og:title", content: "Nuestra historia — RoninBJJ" },
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
        EL CAMINO DEL <span className="text-primary">RONIN</span>
      </h1>
      <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          RoninBJJ nació en el tatami, entre rondas de sparring y conversaciones después del entrenamiento.
          Estábamos cansados de gis que se rompían en el primer torneo, de rashguards que perdían el color
          después de tres lavados, de shorts que no aguantaban una guardia profunda.
        </p>
        <p>
          Empezamos diseñando para nosotros. Para nuestros compañeros. Para los faixas que entrenan a las
          06:00 antes de ir a trabajar y para los competidores que viven de cada submission.
        </p>
        <p>
          Hoy fabricamos equipamiento técnico que sobrevive a la temporada IBJJF completa: pearl weave de
          competición, costuras reforzadas con triple puntada, paneles anatómicos cortados para el cuerpo
          de un grappler. Cada pieza la probamos antes de que llegue a tu bolsa.
        </p>
        <p className="text-foreground italic">
          Porque tu técnica merece equipamiento que esté a la altura.
        </p>
      </div>
    </div>
  );
}