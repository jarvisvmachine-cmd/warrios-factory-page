import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl tracking-[0.2em]">
              RONIN<span className="text-primary">BJJ</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Equipamiento técnico para guerreros del tatami. Forjado por practicantes, probado en competición.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Kimonos</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Rashguards</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Shorts</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Accesorios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">Sobre nosotros</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contacto</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Envíos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Devoluciones</a></li>
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