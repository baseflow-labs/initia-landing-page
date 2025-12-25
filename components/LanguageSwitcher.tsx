import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useRTL } from "@/hooks/useRTL";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const { isRTL } = useRTL();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇯🇴" },
    // Add more languages here as you create translation files
    // { code: 'es', name: 'Español', flag: '🇪🇸' },
    // { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative w-fit">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} className="text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage.flag}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute ${
              isRTL ? "right-0" : "left-0"
            } mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors ${
                  i18n.language === lang.code
                    ? "bg-blue-50 text-[#3A7DFF]"
                    : "text-gray-700"
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {i18n.language === lang.code && (
                  <span className="ml-auto text-[#3A7DFF]">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
