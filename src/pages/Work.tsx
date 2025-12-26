import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Flame, Lightbulb, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const MotionLink = motion(Link);

const works = [
  {
    icon: <Flame className="w-10 h-10" />,
    title: "Rebirth Project",
    desc: "a photoshoot project created for my friend’s fashion design portfolio.",
    link: "/rebirth-project",
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "RMIT Vietnam Student Council",
    desc: "Content Creator for RMIT Vietnam Student Council at the Hanoi campus.",
    link: "/schnoi",
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Suniverse",
    desc: "a social media project I founded during high school, serving as my class’s official presence on TikTok and Instagram.",
    link: "/suniverse",
  },
];

const Work = () => {
  return (
    <div>
      <ThemeToggle />
      <div className="grid grid-cols-[auto_1fr]">
        <Navbar />
        <section id="services" className="scroll-mt-20 py-24 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="mb-15 text-center uppercase font-bold tracking-wide text-3xl">My Projects</h1>
            </div>
            <div className="px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, index) => (
                <MotionLink
                  to={work.link}
                  key={index}
                  className="rounded-3xl p-6 shadow-md hover:shadow-1g transition-all border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-4 text-bg-btn-sc">
                    {work.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-bg-btn-sc mb-2 text-center">
                    {work.title}
                  </h3>
                  <p className=" text-sm text-center">
                    {work.desc}
                  </p>
                </MotionLink>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
