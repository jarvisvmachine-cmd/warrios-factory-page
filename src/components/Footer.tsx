import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-32">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl tracking-[0.25em] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              RONIN<span className="text-foreground/40">BJJ</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Equipamiento técnico para guerreros del tatami. Forjado por practicantes, probado en competición.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-foreground transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground mb-4 font-semibold">Tienda</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Kimonos</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Rashguards</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Shorts</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Accesorios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-foreground mb-4 font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Envíos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Devoluciones</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} RoninBJJ. Todos los derechos reservados.</span>
          <span className="uppercase tracking-widest">Oss.</span>
        </div>
      </div>
    </footer>
  );
}