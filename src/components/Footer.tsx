import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/warriors-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-32">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Warriors Factory" className="h-12 w-auto" />
              <h3 className="font-display text-3xl tracking-[0.25em]">
                WARRIORS<span className="text-foreground/40">FACTORY</span>
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Equipamiento técnico para BJJ y grappling. Diseñado desde el tatami, probado en entrenamiento duro.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_6px_0_rgba(0,0,0,0.25),0_10px_20px_-6px_rgba(220,80,140,0.55)] transition-all duration-150 active:translate-y-[5px] active:shadow-[0_1px_0_rgba(0,0,0,0.25),0_4px_10px_-4px_rgba(220,80,140,0.45)]"
                style={{ background: "linear-gradient(135deg,#f58529 0%,#dd2a7b 45%,#8134af 80%,#515bd4 100%)" }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_6px_0_rgba(0,0,0,0.25),0_10px_20px_-6px_rgba(24,119,242,0.55)] transition-all duration-150 active:translate-y-[5px] active:shadow-[0_1px_0_rgba(0,0,0,0.25),0_4px_10px_-4px_rgba(24,119,242,0.45)]"
                style={{ background: "linear-gradient(180deg,#1877F2 0%,#0b5fd1 100%)" }}
              >
                <Facebook className="h-5 w-5 fill-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_6px_0_rgba(0,0,0,0.25),0_10px_20px_-6px_rgba(255,0,0,0.55)] transition-all duration-150 active:translate-y-[5px] active:shadow-[0_1px_0_rgba(0,0,0,0.25),0_4px_10px_-4px_rgba(255,0,0,0.45)]"
                style={{ background: "linear-gradient(180deg,#FF0000 0%,#c40000 100%)" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M9.5 8.5v7l6-3.5-6-3.5z" fill="#ffffff" />
                </svg>
              </a>
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
          <span>© {new Date().getFullYear()} Warriors Factory. Todos los derechos reservados.</span>
          <span className="uppercase tracking-widest">Oss.</span>
        </div>
      </div>
    </footer>
  );
}
