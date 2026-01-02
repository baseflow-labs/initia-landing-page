import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code,
  Download,
  Layout,
  Loader2,
  Settings,
  User,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";

import { AppSchema, ProjectMetadata, WizardStep } from "../types";
import { SchemaVisualizer } from "./SchemaVisualizer";

const STEPS = [
  { id: WizardStep.DESCRIPTION, key: "wizard.steps.prompt", icon: Code },
  { id: WizardStep.SCHEMA, key: "wizard.steps.schema", icon: Layout },
  { id: WizardStep.METADATA, key: "wizard.steps.project", icon: Settings },
  { id: WizardStep.AUTH, key: "wizard.steps.signIn", icon: User },
  { id: WizardStep.DOWNLOAD, key: "wizard.steps.finalize", icon: Download },
];

export const Wizard: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = React.useState<WizardStep>(
    WizardStep.DESCRIPTION
  );
  const [loading, setLoading] = React.useState(false);
  const [prompt, setPrompt] = React.useState(searchParams.get("prompt") || "");
  const [schema, setSchema] = React.useState<AppSchema | null>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Mock auth
  const [metadata, setMetadata] = React.useState<ProjectMetadata>({
    name: "My Awesome App",
    description: "",
    sector: "Education",
    country: "Jordan",
    frontend: "React.js",
    backend: "Nest.js",
    db: "PostgreSQL",
    language: "TypeScript",
  });

  React.useEffect(() => {
    if (searchParams.get("prompt")) {
      handleNext();
    }
  }, []);

  const handleNext = async () => {
    if (currentStep === WizardStep.DESCRIPTION) {
      if (!prompt) return;
      setLoading(true);
      try {
        // const generated = await generateSchemaFromPrompt(prompt);
        const generated: AppSchema = {
          tables: [
            {
              id: "users",
              name: "users",
              fields: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "email", type: "string" },
                { name: "password", type: "string" },
              ],
              position: { x: 100, y: 100 },
            },
            {
              id: "posts",
              name: "posts",
              fields: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "user_id", type: "uuid" },
                { name: "content", type: "text" },
              ],
              position: { x: 500, y: 100 },
            },
            {
              id: "comments",
              name: "comments",
              fields: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "post_id", type: "uuid" },
                { name: "user_id", type: "uuid" },
                { name: "comment", type: "text" },
              ],
              position: { x: 300, y: 400 },
            },
            {
              id: "likes",
              name: "likes",
              fields: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "post_id", type: "uuid" },
                { name: "user_id", type: "uuid" },
              ],
              position: { x: 700, y: 400 },
            },
            {
              id: "followers",
              name: "followers",
              fields: [
                { name: "id", type: "uuid", isPrimary: true },
                { name: "follower_id", type: "uuid" },
                { name: "followed_id", type: "uuid" },
              ],
              position: { x: 900, y: 200 },
            },
          ],
          relations: [
            {
              fromTable: "posts",
              fromField: "user_id",
              toTable: "users",
              toField: "id",
              type: "one-to-many",
            },
            {
              fromTable: "comments",
              fromField: "post_id",
              toTable: "posts",
              toField: "id",
              type: "one-to-many",
            },
            {
              fromTable: "followers",
              fromField: "follower_id",
              toTable: "users",
              toField: "id",
              type: "one-to-many",
            },
            {
              fromTable: "likes",
              fromField: "post_id",
              toTable: "posts",
              toField: "id",
              type: "one-to-many",
            },
          ],
        };
        setSchema(generated);
        setCurrentStep(WizardStep.SCHEMA);
      } catch (e) {
        console.error("Failed to generate schema", e);
      } finally {
        setLoading(false);
      }
    } else if (currentStep === WizardStep.SCHEMA) {
      setCurrentStep(WizardStep.METADATA);
    } else if (currentStep === WizardStep.METADATA) {
      if (!isLoggedIn) {
        setCurrentStep(WizardStep.AUTH);
      } else {
        setCurrentStep(WizardStep.DOWNLOAD);
      }
    } else if (currentStep === WizardStep.AUTH) {
      // Logic would be here to handle actual login
      setIsLoggedIn(true);
      setCurrentStep(WizardStep.DOWNLOAD);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case WizardStep.DESCRIPTION:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1E4C9D]">
              {t("wizard.description.title")}
            </h2>
            <p className="text-gray-600">{t("wizard.description.subtitle")}</p>
            <textarea
              className="w-full h-48 p-6 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all text-lg shadow-inner"
              placeholder={t("wizard.description.placeholder")}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
        );
      case WizardStep.SCHEMA:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1E4C9D]">
                  {t("wizard.schema.title")}
                </h2>
                <p className="text-gray-600">{t("wizard.schema.subtitle")}</p>
              </div>
              <button
                onClick={() => setCurrentStep(WizardStep.DESCRIPTION)}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                {t("wizard.schema.backToEdit")}
              </button>
            </div>
            {schema && <SchemaVisualizer schema={schema} />}
          </div>
        );
      case WizardStep.METADATA:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1E4C9D]">
                {t("wizard.metadata.title")}
              </h2>
              <p className="text-gray-600">{t("wizard.metadata.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.projectName")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
                  value={metadata.name}
                  onChange={(e) =>
                    setMetadata({ ...metadata, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.description")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
                  value={metadata.description}
                  onChange={(e) =>
                    setMetadata({ ...metadata, description: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.sector")}
                </label>
                <select
                  required
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-white"
                  value={metadata.sector}
                  onChange={(e) =>
                    setMetadata({ ...metadata, sector: e.target.value })
                  }
                >
                  <option>Education</option>
                  <option>E-Commerce</option>
                  <option>Blog</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.country")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
                  value={metadata.country}
                  onChange={(e) =>
                    setMetadata({ ...metadata, country: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1E4C9D]">
                {t("wizard.metadata.technical.title")}
              </h2>
              <p className="text-gray-600">
                {t("wizard.metadata.technical.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.frontend")}
                </label>
                <select
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-white"
                  value={metadata.frontend}
                  onChange={(e) =>
                    setMetadata({ ...metadata, frontend: e.target.value })
                  }
                >
                  <option>React.Js</option>
                  <option>Vue.Js</option>
                  <option>Angular</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.backend")}
                </label>
                <select
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-white"
                  value={metadata.backend}
                  onChange={(e) =>
                    setMetadata({ ...metadata, backend: e.target.value })
                  }
                >
                  <option>Nest.Js</option>
                  <option>Laravel</option>
                  <option>Spring</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.database")}
                </label>
                <select
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-white"
                  value={metadata.db}
                  onChange={(e) =>
                    setMetadata({ ...metadata, db: e.target.value })
                  }
                >
                  <option>PostgreSQL</option>
                  <option>MySQL</option>
                  <option>SQLite</option>
                  <option>MongoDB</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {t("wizard.metadata.language")}
                </label>
                <select
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none bg-white"
                  value={metadata.language}
                  onChange={(e) =>
                    setMetadata({
                      ...metadata,
                      language: e.target.value,
                    })
                  }
                >
                  <option>TypeScript</option>
                  <option>JavaScript</option>
                </select>
              </div>
            </div>
          </div>
        );
      case WizardStep.AUTH:
        return (
          <div className="max-w-md mx-auto space-y-8 py-12 text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-[#3A7DFF]">
              <User size={40} />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#1E4C9D]">
                {t("wizard.auth.title")}
              </h2>
              <p className="text-gray-600">{t("wizard.auth.subtitle")}</p>
            </div>
            <div className="grid gap-4">
              <button
                onClick={handleNext}
                className="w-full py-4 bg-[#3A7DFF] text-white rounded-xl font-bold shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]"
              >
                {t("wizard.auth.signInGoogle")}
              </button>
              <button
                onClick={handleNext}
                className="w-full py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                {t("wizard.auth.createAccount")}
              </button>
            </div>
          </div>
        );
      case WizardStep.DOWNLOAD:
        return (
          <div className="text-center py-20 space-y-8">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <Check size={48} strokeWidth={3} />
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-black text-gray-900">
                {t("wizard.download.title")}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto text-lg font-medium">
                {t("wizard.download.subtitle")}{" "}
                <span className="text-[#1E4C9D] font-bold">
                  "{metadata.name}"
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="flex items-center justify-center gap-3 px-12 py-5 bg-[#1E4C9D] text-white rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-all">
                <Download size={24} />
                {t("wizard.download.downloadButton")}
              </button>
              <button
                onClick={() => navigate("/")}
                className="px-12 py-5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 transition-all"
              >
                {t("wizard.download.buildAnother")}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
        {STEPS.map((step, idx) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-3 relative px-4"
            >
              <div
                className={`
                w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all
                ${
                  isActive
                    ? "bg-[#3A7DFF] border-[#3A7DFF] text-white shadow-lg shadow-blue-200"
                    : ""
                }
                ${isCompleted ? "bg-green-500 border-green-500 text-white" : ""}
                ${
                  !isActive && !isCompleted
                    ? "bg-white border-gray-200 text-gray-400"
                    : ""
                }
              `}
              >
                {isCompleted ? <Check size={20} /> : <Icon size={20} />}
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  isActive ? "text-[#3A7DFF]" : "text-gray-400"
                }`}
              >
                {t(step.key)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="p-8 md:p-12 min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-80 space-y-6">
              <Loader2 className="animate-spin text-[#3A7DFF]" size={64} />
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {t("wizard.loading.title")}
                </p>
                <p className="text-gray-500">{t("wizard.loading.subtitle")}</p>
              </div>
            </div>
          ) : (
            renderStep()
          )}
        </div>

        {currentStep !== WizardStep.DOWNLOAD && !loading && (
          <div className="px-12 py-6 bg-gray-50 border-t border-gray-100 flex justify-end">
            <button
              onClick={handleNext}
              disabled={
                (currentStep === WizardStep.DESCRIPTION && !prompt) ||
                (currentStep === WizardStep.METADATA &&
                  (!metadata.name ||
                    !metadata.description ||
                    !metadata.sector ||
                    !metadata.country ||
                    !metadata.frontend ||
                    !metadata.backend ||
                    !metadata.db ||
                    !metadata.language))
              }
              className="flex items-center gap-2 px-10 py-4 bg-[#3A7DFF] text-white font-black rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {currentStep === WizardStep.AUTH
                ? t("wizard.signIn")
                : t("wizard.continue")}
              {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
