import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center memorial-text">关于赛博灵堂</h1>
          <div className="section-divider w-16 mx-auto mb-10"></div>
          
          <div className="prose dark:prose-invert mx-auto">
            <p className="mb-4 text-gray-400">
              赛博灵堂是一个虚拟的纪念空间，专为逝去的VTuber打造。在这个数字化的时代，我们希望为那些因"毕业"、"解约"或其他原因离开粉丝视线的虚拟偶像提供一个永恒的纪念场所。
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 memorial-text">我们的理念</h2>
            <div className="section-divider w-12 mb-6"></div>
            <p className="mb-4 text-gray-400">
              虽然VTuber以数字形式存在，但他们给粉丝带来的情感是真实的。当这些虚拟偶像离去时，我们的悲伤和怀念同样真实。赛博灵堂希望通过创建一个数字化的纪念空间，让这些情感有一个落脚点，让粉丝们可以分享自己的回忆和感受。
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 memorial-text">纪念方式</h2>
            <div className="section-divider w-12 mb-6"></div>
            <p className="mb-4 text-gray-400">
              在赛博灵堂，你可以：
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-400">
              <li>浏览已有的VTuber纪念页</li>
              <li>为VTuber献花、点灯、留言表达哀思</li>
              <li>分享VTuber给你带来的感动和记忆</li>
              <li>添加新的VTuber纪念</li>
              <li>与其他粉丝交流对已逝VTuber的思念</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4 memorial-text">为什么要建立赛博灵堂</h2>
            <div className="section-divider w-12 mb-6"></div>
            <p className="mb-4 text-gray-400">
              VTuber的"毕业"往往是突然且令人心痛的。通过赛博灵堂，我们希望：
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-400">
              <li>铭记这些VTuber的故事和精神</li>
              <li>帮助粉丝处理对虚拟偶像的离别情绪</li>
              <li>创造一个共同缅怀的空间</li>
              <li>确保已离开的VTuber不会被遗忘，而是以另一种方式继续存在</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4 memorial-text">参与建设</h2>
            <div className="section-divider w-12 mb-6"></div>
            <p className="mb-4 text-gray-400">
              赛博灵堂是一个开放的平台，欢迎所有人参与建设。如果你想要：
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-400">
              <li>添加新的VTuber纪念</li>
              <li>改进网站功能</li>
              <li>提供创意建议</li>
              <li>报告问题或错误</li>
            </ul>
            <p className="text-gray-400">请通过联系页面与我们取得联系。</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}