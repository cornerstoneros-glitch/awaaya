import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#F4F6F4]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-gray-200 shadow-lg text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#EBF5EE] text-[#1B4332] flex items-center justify-center mx-auto border border-[#1B4332]/20">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-black text-[#1B4332] bg-[#EBF5EE] px-3 py-1 rounded-full">
            Erreur 404
          </span>
          <h1 className="text-2xl font-heading font-black text-gray-900 mt-2">
            Page Introuvable
          </h1>
          <p className="text-xs text-gray-600 leading-relaxed">
            La page que vous recherchez a été déplacée ou n'est plus accessible.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1B4332] hover:bg-[#0F281E] text-white text-xs font-extrabold shadow-sm transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retourner à l'accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

