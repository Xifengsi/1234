import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Home() {
  const [lang, setLang] = useState("zh");

  const toggleLang = () => {
    setLang(lang === "zh" ? "en" : "zh");
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold">
            {lang === "zh" ? "触感未来 HapticNova" : "HapticNova: Future of Haptics"}
          </h1>
          <p className="text-lg mt-2">
            {lang === "zh"
              ? "智能机器人与人体助力技术引领者"
              : "Pioneers in Intelligent Robotics and Human Assistive Technologies"}
          </p>
          <div className="mt-4">
            <Button onClick={toggleLang}>{lang === "zh" ? "English" : "中文"}</Button>
          </div>
        </header>
      </div>
    </main>
  );
}