import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code,
  Layers,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import logo from "./components/logo.png";
import { Wizard } from "./components/Wizard";
import { useRTL } from "./hooks/useRTL";

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  return (
    <div className="bg-white">
      <Hero />

      {/* How it Works Section */}
      <section className="py-24 bg-[#DFE5EA]/30" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#1E4C9D] mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t("howItWorks.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl font-black text-[#3A7DFF]/10 absolute top-4 right-4 group-hover:text-[#3A7DFF]/20 transition-colors">
                  0{idx}
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#3A7DFF] mb-6">
                  {idx === 1 && <Code size={24} />}
                  {idx === 2 && <Layers size={24} />}
                  {idx === 3 && <Zap size={24} />}
                  {idx === 4 && <CheckCircle2 size={24} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`howItWorks.steps.step${idx}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(`howItWorks.steps.step${idx}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section, always free open-source, see the source code on GitHub */}
      <section
        className="py-24 relative overflow-hidden bg-[#1E4C9D]"
        id="pricing"
      >
        {/* subtle background glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#3A7DFF] blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/15">
              <span className="text-sm text-white/80">
                {t("pricing.headline")}
              </span>
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-black text-white">
              {t("pricing.title")}
            </h2>

            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
              {t("pricing.subtitle")}
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-white">
                    {t("pricing.headline")}
                  </div>

                  <ul className="mt-6 space-y-3 text-white/85">
                    <li className="flex gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#3A7DFF]" />
                      <span>{t("pricing.bullets.b1")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#3A7DFF]" />
                      <span>{t("pricing.bullets.b2")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#3A7DFF]" />
                      <span>{t("pricing.bullets.b3")}</span>
                    </li>
                  </ul>

                  <p className="mt-6 text-sm text-white/70">
                    {t("pricing.finePrint")}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:min-w-[220px]">
                  <Link
                    to="/generate"
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white text-[#1E4C9D] hover:opacity-95 transition"
                  >
                    {t("pricing.primaryCta")}
                  </Link>

                  <a
                    href="https://github.com/baseflow-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/25 text-white hover:bg-white/10 transition"
                  >
                    {t("pricing.secondaryCta")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24" id="who-is-it-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-[#1E4C9D] mb-20 leading-tight text-center flex items-center justify-center">
            <img src={logo} alt="Initia Logo" className="h-10 mb-4 mt-4 me-3" />

            {t("forWhom.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  {t("forWhom.startupFounders.title")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("forWhom.startupFounders.description")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                <Users size={20} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  {t("forWhom.indieDevelopers.title")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("forWhom.indieDevelopers.description")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                <CheckCircle2 size={20} />
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  {t("forWhom.students.title")}
                </h4>
                <p className="text-gray-600 text-sm">
                  {t("forWhom.students.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div>
                <h3 className="text-3xl font-black text-[#1E4C9D] mt-10 mb-8 leading-tight">
                  {t("features.title")}
                </h3>

                <ul>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="mb-10 font-bold">
                      <div className="text-[#1E4C9D] text-lg mb-2">
                        {t(`features.items.${i}.title`)}
                      </div>

                      <div className="text-gray-600 text-justify">
                        <small>{t(`features.items.${i}.description`)}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative" style={{ direction: "ltr" }}>
              <div className="bg-[#1E4C9D] p-8 rounded-3xl shadow-2xl relative z-10 overflow-hidden text-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-mono opacity-50">
                    src/schema.json
                  </div>
                </div>
                <pre className="text-sm font-mono leading-relaxed opacity-90 overflow-x-auto">
                  {`{
  "tables": {
    "User": {
      "email": {
        "type": "string",
        "unique": true
      },
      "name": {
        "type": "string",
        "nullable": true
      }
    },
    "Project": {
      "name": {
        "type": "string"
      },
      "owner": {
        "type": "string",
        "references": "User.id"
      }
    }
  },
  "relations": [
    {
      "from": "User",
      "to": "Project",
      "type": "one-to-many", // 1 user can have many projects
    }
  ]
}`}
                </pre>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1E4C9D] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-blue-100 mb-12 text-lg max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/generate"
              className="px-12 py-5 bg-[#3A7DFF] text-white rounded-2xl font-black text-xl hover:bg-white hover:text-[#1E4C9D] transition-all flex items-center justify-center gap-3"
            >
              {t("cta.button")}{" "}
              {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
            </Link>
          </div>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

const AuthPage = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-[#1E4C9D] mb-2">
            {isLogin ? t("auth.login") : t("auth.register")}
          </h2>
          <p className="text-gray-500">{t("auth.tagline")}</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                {t("auth.fullName")}
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
                placeholder={t("auth.fullNamePlaceholder")}
              />
            </div>
          )}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              {t("auth.email")}
            </label>
            <input
              type="email"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              placeholder={t("auth.emailPlaceholder")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              {t("auth.password")}
            </label>
            <input
              type="password"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500"
              placeholder={t("auth.passwordPlaceholder")}
            />
          </div>
          <button className="w-full py-4 bg-[#3A7DFF] text-white rounded-xl font-bold shadow-lg hover:shadow-blue-100 transition-all active:scale-[0.98]">
            {isLogin ? t("auth.signInButton") : t("auth.createAccountButton")}
          </button>
        </form>
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#3A7DFF] font-bold hover:underline"
          >
            {isLogin ? t("auth.switchToSignup") : t("auth.switchToLogin")}
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-xs text-gray-400 font-medium uppercase tracking-widest mb-6">
            {t("auth.orContinueWith")}
          </p>
          <button className="w-full py-4 flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            {t("auth.google")}
          </button>
        </div>
      </div>
    </div>
  );
};

const PolicySection: React.FC<{
  title: string;
  text: string;
  bullets?: string[];
}> = ({ title, text, bullets }) => {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">{text}</p>

        {bullets?.length ? (
          <ul className="mt-4 list-disc ps-5 text-gray-700 space-y-2">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  const lastUpdated = "2025-12-22"; // update when you change the policy

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-[#DFE5EA]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-[#3A7DFF]" />
            <span className="text-gray-700">{t("privacy.badge")}</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-black text-[#1E4C9D]">
            {t("privacy.title")}
          </h1>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            {t("privacy.subtitle")}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            {t("privacy.lastUpdated")}{" "}
            <span className="font-medium text-gray-700">{lastUpdated}</span>
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          <PolicySection
            title={t("privacy.sections.whoWeAre.title")}
            text={t("privacy.sections.whoWeAre.text")}
          />

          <PolicySection
            title={t("privacy.sections.whatWeCollect.title")}
            text={t("privacy.sections.whatWeCollect.text")}
            bullets={[
              t("privacy.sections.whatWeCollect.bullets.account"),
              t("privacy.sections.whatWeCollect.bullets.oauth"),
              t("privacy.sections.whatWeCollect.bullets.usage"),
              t("privacy.sections.whatWeCollect.bullets.cookies"),
              t("privacy.sections.whatWeCollect.bullets.generated"),
            ]}
          />

          <PolicySection
            title={t("privacy.sections.howWeUse.title")}
            text={t("privacy.sections.howWeUse.text")}
            bullets={[
              t("privacy.sections.howWeUse.bullets.provide"),
              t("privacy.sections.howWeUse.bullets.auth"),
              t("privacy.sections.howWeUse.bullets.security"),
              t("privacy.sections.howWeUse.bullets.improve"),
              t("privacy.sections.howWeUse.bullets.communicate"),
            ]}
          />

          <PolicySection
            title={t("privacy.sections.legalBases.title")}
            text={t("privacy.sections.legalBases.text")}
            bullets={[
              t("privacy.sections.legalBases.bullets.contract"),
              t("privacy.sections.legalBases.bullets.legitimate"),
              t("privacy.sections.legalBases.bullets.consent"),
            ]}
          />

          <PolicySection
            title={t("privacy.sections.cookies.title")}
            text={t("privacy.sections.cookies.text")}
            bullets={[
              t("privacy.sections.cookies.bullets.essential"),
              t("privacy.sections.cookies.bullets.preferences"),
              t("privacy.sections.cookies.bullets.analytics"),
            ]}
          />

          <PolicySection
            title={t("privacy.sections.sharing.title")}
            text={t("privacy.sections.sharing.text")}
            bullets={[
              t("privacy.sections.sharing.bullets.providers"),
              t("privacy.sections.sharing.bullets.google"),
              t("privacy.sections.sharing.bullets.legal"),
              t("privacy.sections.sharing.bullets.noSell"),
            ]}
          />

          <PolicySection
            title={t("privacy.sections.retention.title")}
            text={t("privacy.sections.retention.text")}
          />

          <PolicySection
            title={t("privacy.sections.security.title")}
            text={t("privacy.sections.security.text")}
          />

          <PolicySection
            title={t("privacy.sections.yourRights.title")}
            text={t("privacy.sections.yourRights.text")}
            bullets={[
              t("privacy.sections.yourRights.bullets.access"),
              t("privacy.sections.yourRights.bullets.correct"),
              t("privacy.sections.yourRights.bullets.delete"),
              t("privacy.sections.yourRights.bullets.withdraw"),
            ]}
          />

          <PolicySection
            title={t("privacy.sections.children.title")}
            text={t("privacy.sections.children.text")}
          />

          <PolicySection
            title={t("privacy.sections.international.title")}
            text={t("privacy.sections.international.text")}
          />

          <div className="rounded-2xl border bg-[#1E4C9D] px-6 py-8 text-white">
            <h2 className="text-2xl font-extrabold">
              {t("privacy.sections.contact.title")}
            </h2>
            <p className="mt-3 text-white/90 leading-relaxed">
              {t("privacy.sections.contact.text")}
            </p>

            <div className="mt-4 grid gap-2 text-sm">
              <div className="flex flex-wrap gap-2">
                <span className="font-semibold">
                  {t("privacy.contact.emailLabel")}
                </span>
                <span className="text-white/90">
                  {t("privacy.contact.emailValue")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="font-semibold">
                  {t("privacy.contact.locationLabel")}
                </span>
                <span className="text-white/90">
                  {t("privacy.contact.locationValue")}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500">{t("privacy.disclaimer")}</p>
        </div>
      </section>
    </main>
  );
};

// app/terms/page.tsx  (Next.js App Router)
// or src/pages/terms.tsx

const TermsOfServicePage = () => {
  const { t } = useTranslation();
  const lastUpdated = "2025-12-22";

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-[#DFE5EA]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-[#3A7DFF]" />
            <span className="text-gray-700">{t("terms.badge")}</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl font-black text-[#1E4C9D]">
            {t("terms.title")}
          </h1>

          <p className="mt-4 text-gray-700 text-lg">{t("terms.subtitle")}</p>

          <p className="mt-3 text-sm text-gray-500">
            {t("terms.lastUpdated")}{" "}
            <span className="font-medium text-gray-700">{lastUpdated}</span>
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <Section
          title={t("terms.sections.acceptance.title")}
          text={t("terms.sections.acceptance.text")}
        />
        <Section
          title={t("terms.sections.service.title")}
          text={t("terms.sections.service.text")}
        />
        <Section
          title={t("terms.sections.accounts.title")}
          text={t("terms.sections.accounts.text")}
        />
        <Section
          title={t("terms.sections.openSource.title")}
          text={t("terms.sections.openSource.text")}
        />
        <Section
          title={t("terms.sections.usage.title")}
          text={t("terms.sections.usage.text")}
        />
        <Section
          title={t("terms.sections.generatedCode.title")}
          text={t("terms.sections.generatedCode.text")}
        />
        <Section
          title={t("terms.sections.availability.title")}
          text={t("terms.sections.availability.text")}
        />
        <Section
          title={t("terms.sections.disclaimer.title")}
          text={t("terms.sections.disclaimer.text")}
        />
        <Section
          title={t("terms.sections.limitation.title")}
          text={t("terms.sections.limitation.text")}
        />
        <Section
          title={t("terms.sections.termination.title")}
          text={t("terms.sections.termination.text")}
        />
        <Section
          title={t("terms.sections.changes.title")}
          text={t("terms.sections.changes.text")}
        />
        <Section
          title={t("terms.sections.governingLaw.title")}
          text={t("terms.sections.governingLaw.text")}
        />

        <div className="rounded-2xl border bg-[#1E4C9D] px-6 py-8 text-white">
          <h2 className="text-2xl font-extrabold">
            {t("terms.sections.contact.title")}
          </h2>
          <p className="mt-3 text-white/90">
            {t("terms.sections.contact.text")}
          </p>

          <div className="mt-4 text-sm">
            <strong>{t("terms.contact.emailLabel")}</strong>{" "}
            {t("terms.contact.emailValue")}
          </div>
        </div>

        <p className="text-xs text-gray-500">{t("terms.disclaimer")}</p>
      </section>
    </main>
  );
};

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
      <p className="mt-3 text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

const App: React.FC = () => {
  useRTL();

  // Initialization for Analytics (Placeholders)
  React.useEffect(() => {
    // Analytics & Clarity init would go here
    console.log(
      "Analytics Initialized: Google Analytics, Microsoft Clarity ready."
    );
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<Wizard />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
