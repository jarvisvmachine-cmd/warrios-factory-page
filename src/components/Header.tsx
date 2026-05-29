import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-[0.2em] text-foreground">
            RONIN<span className="text-primary">BJJ</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
          <Link to="/" className="text-foreground/70 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
            Inicio
          </Link>
          <Link to="/products" className="text-foreground/70 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Tienda
          </Link>
          <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Historia
          </Link>
          <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Contacto
          </Link>
        </nav>

        <CartDrawer />
      </div>
    </header>
  );
}