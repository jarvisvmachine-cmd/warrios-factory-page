import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contacto — RoninBJJ" },
      { name: "description", content: "Contacta con el equipo de RoninBJJ. Pedidos, dudas técnicas y patrocinios." },
      { property: "og:title", content: "Contacto — RoninBJJ" },
      { property: "og:description", content: "Habla con el equipo de RoninBJJ." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-24 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contacto</p>
      <h1 className="font-display text-5xl md:text-7xl tracking-wider leading-none">
        HABLEMOS.
      </h1>
      <p className="mt-6 text-muted-foreground text-lg max-w-xl">
        Para pedidos, devoluciones, dudas técnicas sobre tallaje o propuestas de patrocinio.
        Respondemos en menos de 24 horas.
      </p>

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <div className="p-6 bg-card border border-border rounded-sm">
          <Mail className="h-5 w-5 text-primary mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
          <a href="mailto:info@roninbjj.com" className="text-sm hover:text-primary">info@roninbjj.com</a>
        </div>
        <div className="p-6 bg-card border border-border rounded-sm">
          <Instagram className="h-5 w-5 text-primary mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Instagram</p>
          <a href="#" className="text-sm hover:text-primary">@roninbjj</a>
        </div>
        <div className="p-6 bg-card border border-border rounded-sm">
          <MapPin className="h-5 w-5 text-primary mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Sede</p>
          <p className="text-sm">España</p>
        </div>
      </div>
    </div>
  );
}