import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });


  return (
    <Scroll html>
        <div class="w-screen">
            <Section opacity={opacityFirstSection}>
              <h1 className="font-semibold font-serif text-2xl">
                Hello, I'm May Showumi
              </h1>
              <p className="text-gray-500 break-all">I'm a senior software developer</p>
              <p className="mt-3">I know:</p>
              <ul className="leading-9">
                <li>🧑‍💻 How to code</li>
                <li>🎨 How to design</li>
                <li>🧑‍🏫 How to lead</li>
                <li>📦 How to deliver</li>
              </ul>
              <p className="animate-bounce  mt-6">↓</p>
            </Section>
            <Section right opacity={opacitySecondSection}>
              <h1 className="font-semibold font-serif text-2xl break-all">
                Here are my core skillsets 🔥
              </h1>
              <p className="text-gray-500 break-all">PS: I can also create UI/UX designs</p>
              <p className="mt-3">
                <b>Frontend 🚀</b>
              </p>
              <ul className="leading-9 break-all">
                <li>ReactJS</li>
                <li>React Native</li>
                <li>Next.js</li> 
                <li>VueJS</li>
                <li>StoryBook</li>
                <li>Tailwind | Material UI | ShadCN</li>
                <li>TypeScript / Javascript</li>
              </ul>
              <p className="mt-3">
                <b>Backend 🔬</b>
              </p>
              <ul className="leading-9">
                <li>NodeJS</li>
                <li>ExpressJS</li>
                {/* <li>Go</li> */}
                <li>NestJS</li>
                <li>PostgreSQL</li>
                <li>Mongo DB</li>
              </ul>
              <p className="animate-bounce  mt-6">↓</p>
            </Section>
            <Section opacity={opacityLastSection}>
              <h1 className="font-semibold font-serif text-2xl">
                🤙 Contact me
              </h1>
              <p className="text-gray-500">
                I deliver things to high standards.
              </p>
              <p className="mt-6 p-3 bg-slate-200 rounded-lg text-center break-all">
                📧 <a href="mailto:mayowashowumi@outlook.com">mayowashowumi@outlook.com</a>
              </p>
              <p className="mt-6 p-3 bg-slate-200 rounded-lg text-center break-all">
                📞 UK <a href="tel:(+44)7368340783">(+44)7368340783</a>
              </p>
              <p className="mt-6 p-3 bg-slate-200 rounded-lg text-center break-all">
                📞 UAE <a href="tel:(+971)558815904">(+971)558815904</a>
              </p>
              <p className="mt-6 p-3 bg-slate-200 rounded-lg text-center break-all">
                📄 <a href="../assets/May S (CV).docx" download>Download my CV</a>
              </p>
            </Section>
        </div>
    </Scroll>
  )
}