import { useState } from "react";
import { Button } from "@/components/ui/button";

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

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">
            {lang === "zh" ? "关于我们" : "About Us"}
          </h2>
          <p className="mt-2">
            {lang === "zh"
              ? "陕西触感未来科技有限公司成立于2023年10月，专注于智能机器人与可穿戴人体助力器的研发与销售。"
              : "HapticNova, founded in October 2023 in Xi'an, China, specializes in the R&D and sales of intelligent robots and wearable exoskeleton systems."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">
            {lang === "zh" ? "产品介绍" : "Our Products"}
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>{lang === "zh" ? "智能人体助力装备" : "Intelligent Exoskeleton Devices"}</li>
            <li>{lang === "zh" ? "柔性直线电机仿生手臂" : "Soft Linear Motor Bionic Arms"}</li>
            <li>{lang === "zh" ? "协作型机器人系统" : "Collaborative Robotic Systems"}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">
            {lang === "zh" ? "团队介绍" : "Our Team"}
          </h2>
          <p className="mt-2">
            {lang === "zh"
              ? "我们拥有一支由机器人专家、嵌入式工程师、产品设计师组成的跨界创新团队。"
              : "Our interdisciplinary team consists of roboticists, embedded engineers, and product designers."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">
            {lang === "zh" ? "新闻动态" : "News & Updates"}
          </h2>
          <p className="mt-2 italic text-gray-600">
            {lang === "zh"
              ? "即将上线：产品发布与投资进展信息"
              : "Coming soon: Product releases and investment updates"}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2">
            {lang === "zh" ? "联系我们" : "Contact Us"}
          </h2>
          <p className="mt-2">
            {lang === "zh" ? "邮箱：" : "Email: "}
            <a className="text-blue-600 underline" href="mailto:xifengsi@hapticnova.tech">
              xifengsi@hapticnova.tech
            </a>
          </p>
        </section>

        <footer className="text-center text-sm text-gray-500 pt-6">
          &copy; 2025 HapticNova. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
