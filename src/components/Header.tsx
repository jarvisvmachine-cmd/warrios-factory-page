import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";
import logo from "@/assets/warriors-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Warriors Factory"
            className="h-11 md:h-12 w-auto"
          />
          <span className="font-display text-xl md:text-2xl tracking-[0.3em] leading-none text-foreground hidden sm:inline">
            WARRIORS
            <span className="block tracking-[0.5em] text-muted-foreground mt-1 text-base">FACTORY</span>
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