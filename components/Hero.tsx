import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Play, Zap } from "lucide-react";
import { useRTL } from "@/hooks/useRTL";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [prompt, setPrompt] = React.useState("");
  const navigate = useNavigate();
  const { isRTL } = useRTL();

  const handleStart = () => {
    if (prompt.trim()) {
      navigate(`/generate?prompt=${encodeURIComponent(prompt)}`);
    } else {
      navigate("/generate");
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-64px)] flex justify-center items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#3A7DFF] text-xs font-bold rounded-full md:mb-8 mb-5 tracking-wider uppercase">
          <Zap size={14} fill="currentColor" />
          {t("hero.badge")}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1E4C9D] tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          {t("hero.headline")}
        </h1>
        <p className="md:text-xl text-lg text-gray-600 md:mb-12 mb-8 max-w-2xl mx-auto font-medium">
          {t("hero.subtext")}
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="p-2 bg-white rounded-2xl shadow-2xl border border-gray-200">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t("hero.placeholder")}
                className="w-full h-40 p-6 text-lg text-gray-800 bg-transparent border-0 focus:ring-0 resize-none rounded-xl"
              />
              <div className="flex flex-col sm:flex-row gap-4 p-4 border-t border-gray-100 items-center justify-between bg-gray-50 rounded-b-xl">
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                  <span>{t("hero.quickTemplates")}</span>
                  <button
                    onClick={() =>
                      setPrompt("E-commerce platform with product reviews")
                    }
                    className="hover:text-[#1E4C9D]"
                  >
                    {t("hero.templateStore")}
                  </button>
                  <button
                    onClick={() => setPrompt("SaaS Dashboard for analytics")}
                    className="hover:text-[#1E4C9D]"
                  >
                    {t("hero.templateSaas")}
                  </button>
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                  <a
                    href="https://initia-frontend-template.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center sm:gap-2 gap-1 sm:px-6 p-2 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm sm:text-base text-sm"
                  >
                    <Play size={18} fill="currentColor" className="shrink-0" />
                    {t("hero.secondary")}
                  </a>
                  <Link
                    to={`/generate${
                      prompt.trim()
                        ? `?prompt=${encodeURIComponent(prompt)}`
                        : ""
                    }`}
                    onClick={handleStart}
                    className="flex-1 sm:flex-none flex items-center justify-center sm:gap-2 gap-1 sm:px-10 p-2 bg-[#3A7DFF] text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200/50 active:scale-95 sm:text-base text-sm"
                  >
                    {t("hero.cta")}
                    <ArrowRight
                      size={18}
                      className={`shrink-0 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#DFE5EA]/40 -z-10 blur-3xl" />
    </section>
  );
};
