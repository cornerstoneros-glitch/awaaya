"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#F4F6F4]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-gray-200 shadow-lg text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
          <AlertTriangle className="w-7 h-7" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-heading font-black text-gray-900">
            Une interruption momentanée est survenue
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Le système a rencontré une anomalie lors du chargement de cette page. Vous pouvez retenter l'opération immédiatement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#0F281E] text-white text-xs font-extrabold shadow-sm transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Actualiser la page</span>
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Accueil</span>
          </Link>
        </div>

        {error.digest && (
          <p className="text-[10px] text-gray-400 font-mono">
            Réf. : {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}

