import { Github, Menu, X } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logoFull from "./logo-full.png";
import { HashLink } from "react-router-hash-link";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { href: "/#how-it-works", label: t("footer.howItWorks") },
    { href: "/#pricing", label: t("footer.pricing") },
    { href: "/#who-is-it-for", label: t("footer.whoIsItFor") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "instant",
              });
            }}
            className="flex items-center"
          >
            <img src={logoFull} alt="Logo" className="h-8" />
          </Link>

          <div className="hidden md:flex lg:gap-6 md:gap-4 items-center">
            {links.map(({ href, label }, i) => (
              <HashLink
                to={href}
                className="text-gray-600 hover:text-[#1E4C9D] font-medium transition-colors text-center"
                key={i}
              >
                {label}
              </HashLink>
            ))}

            <LanguageSwitcher />

            <a
              href="https://github.com/baseflow-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1E4C9D] font-medium transition-colors"
            >
              <Github size={18} />
            </a>

            <Link
              to="/generate"
              className="bg-[#3A7DFF] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-sm active:scale-95"
            >
              {t("header.startGenerating")}
            </Link>
            <Link
              to="/auth?mode=login"
              className="text-gray-600 hover:text-[#1E4C9D] font-medium transition-colors"
            >
              {t("header.signIn")}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="*:block md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 absolute w-full top-full">
          {links.map(({ href, label }, i) => (
            <a
              href={href}
              className="text-gray-600 hover:text-[#1E4C9D] font-medium transition-colors"
              key={i}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="https://github.com/baseflow-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#1E4C9D] font-medium transition-colors"
          >
            <Github size={18} />
          </a>
          <Link
            to="/auth?mode=login"
            className="text-gray-600 hover:text-[#1E4C9D] font-medium transition-colors"
          >
            {t("header.signIn")}
          </Link>
          <Link
            to="/generate"
            className="bg-[#3A7DFF] text-white text-center px-5 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-sm active:scale-95"
          >
            {t("header.startGenerating")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#DFE5EA] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img src={logoFull} alt="Initia Logo" className="h-8 mb-4" />

            <p className="text-gray-600 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">
              {t("footer.product")}
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <HashLink to="/#how-it-works" className="hover:text-[#1E4C9D]">
                  {t("footer.howItWorks")}
                </HashLink>
              </li>
              <li>
                <HashLink to="/#pricing" className="hover:text-[#1E4C9D]">
                  {t("footer.pricing")}
                </HashLink>
              </li>
              <li>
                <HashLink to="/#who-is-it-for" className="hover:text-[#1E4C9D]">
                  {t("footer.whoIsItFor")}
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">
              {t("footer.about")}
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a
                  href="https://github.com/baseflow-labs/initia-frontend-template/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1E4C9D]"
                >
                  {t("footer.license")}
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-[#1E4C9D]"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-[#1E4C9D]"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">
              {t("footer.connect")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/baseflow-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1E4C9D]"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Initia. {t("footer.copyright")}
          </p>
          <p className="mt-4 md:mt-0">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
