"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, UserCheck, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/a-propos", label: "À propos" },
    { href: "/conseil", label: "Conseil" },
    { href: "/pilotage", label: "Pilotage" },
    { href: "/formation", label: "Formation" },
    { href: "/etudes-de-cas", label: "Études de cas" },
    { href: "/auto-evaluation", label: "Auto-évaluation" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 xl:gap-6 flex-nowrap">
        
        {/* LOGO AWAAYA VERT FORÊT */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group z-50 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-awaaya-forest text-white font-heading font-black flex items-center justify-center text-xl shadow-sm group-hover:bg-awaaya-forestDark transition-colors">
            A
          </div>
          <div>
            <span className="font-heading font-black text-xl xl:text-2xl tracking-tight text-awaaya-forest block leading-none">
              AWAAYA
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5 hidden xl:block whitespace-nowrap">
              Conseils · Stratégies · Pilotage
            </span>
          </div>
        </Link>

        {/* NAVIGATION PRINCIPALE DESKTOP STRICTEMENT SUR UNE LIGNE (>= lg) */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-xs xl:text-sm font-semibold text-gray-700 flex-nowrap shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors py-1 shrink-0 ${
                  isActive 
                    ? "text-awaaya-forest font-bold border-b-2 border-awaaya-forest" 
                    : "hover:text-awaaya-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS DESKTOP & BOUTON HAMBURGER MOBILE */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-nowrap">
          <Link
            href="/espace-client/login"
            className="text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-awaaya-forest hidden sm:inline-block border border-gray-300 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl hover:bg-gray-50 transition-all whitespace-nowrap shrink-0"
          >
            Espace Client
          </Link>
          <Link
            href="/diagnostic"
            className="hidden md:inline-flex items-center gap-1.5 xl:gap-2 bg-awaaya-forest text-white text-xs xl:text-sm font-bold px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-xl hover:bg-awaaya-forestDark transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Diagnostic</span>
            <span className="hidden xl:inline">Stratégique</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </Link>

          {/* BOUTON HAMBURGER MOBILE / TABLETTE (< lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 text-gray-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-awaaya-forest"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* DRAWER MENU MOBILE RESPONSIVE PLEIN ÉCRAN FLUIDE (< lg) */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 overflow-y-auto border-t border-gray-200 flex flex-col justify-between p-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="space-y-6">
            <span className="text-[11px] font-black uppercase tracking-wider text-awaaya-forest">
              Menu de Navigation
            </span>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl font-heading text-base font-extrabold transition-all ${
                      isActive 
                        ? "bg-awaaya-forestPale text-awaaya-forest border border-awaaya-forest/20" 
                        : "text-gray-800 hover:bg-gray-50 hover:text-awaaya-forest"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-gray-200 space-y-3">
            <Link
              href="/espace-client/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-gray-800 hover:bg-gray-50 transition-all"
            >
              <UserCheck className="w-4 h-4 text-awaaya-forest" />
              <span>Accès Espace Client & Démo</span>
            </Link>

            <Link
              href="/diagnostic"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-awaaya-forest hover:bg-awaaya-forestDark text-white py-3.5 px-4 rounded-xl font-heading font-extrabold text-sm shadow-md transition-all"
            >
              <span>Demander un diagnostic 360°</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-center text-[11px] text-gray-500 pt-2">
              Cabinet AWAAYA · Abidjan, Côte d'Ivoire
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
