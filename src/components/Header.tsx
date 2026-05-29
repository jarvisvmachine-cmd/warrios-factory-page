import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          <span className="font-display text-2xl md:text-3xl tracking-[0.25em] text-foreground">
            WARRIORS<span className="text-foreground/40">FACTORY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-medium">
          <Link to="/" className="text-foreground/60 hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            Inicio
          </Link>
          <Link to="/products" className="text-foreground/60 hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>
            Tienda
          </Link>
          <Link to="/about" className="text-foreground/60 hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>
            Historia
          </Link>
          <Link to="/contact" className="text-foreground/60 hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>
            Contacto
          </Link>
        </nav>

        <CartDrawer />
      </div>
    </header>
  );
}