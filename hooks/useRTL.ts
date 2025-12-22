import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const RTL_LANGUAGES = ["ar", "he", "fa", "ur"];

export const useRTL = () => {
  const { i18n } = useTranslation();

  const isRTL = RTL_LANGUAGES.includes(i18n.language);

  useEffect(() => {
    const html = document.documentElement;
    const direction = isRTL ? "rtl" : "ltr";
    const lang = i18n.language;

    html.setAttribute("dir", direction);
    html.setAttribute("lang", lang);
  }, [i18n.language, isRTL]);

  return { isRTL, language: i18n.language };
};
