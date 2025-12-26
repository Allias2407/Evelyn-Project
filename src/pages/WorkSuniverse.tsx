import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import suniverse1 from "../assets/suniverse1.png";
import suniverse2 from "../assets/suniverse2.png";
import suniverse3 from "../assets/suniverse3.png";
import suniverse4 from "../assets/suniverse4.png";
import suniverse5 from "../assets/suniverse5.png";
import suniverse6 from "../assets/suniverse6.png";
import suniverse7 from "../assets/suniverse7.png";
import suniverse8 from "../assets/suniverse8.png";
import { useEffect } from "react";
// import video from "../assets/suniverse-video.mp4";

type InstagramEmbedProps = {
  url: string;
};

const WorkSuniverse = ({ url }: InstagramEmbedProps) => {
  useEffect(() => {
    const scriptId = "instagram-embed-script";
    const existing = document.getElementById(
      scriptId
    ) as HTMLScriptElement | null;

    const process = () => {
      // @ts-ignore
      if (window.instgrm?.Embeds?.process) window.instgrm.Embeds.process();
    };

    if (!existing) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = process;
      document.body.appendChild(script);
    } else {
      process();
    }
  }, [url]);

  return (
    <div>
      <ThemeToggle />
      <div className="grid grid-cols-[auto_1fr]">
        <Navbar />
        <div className="pt-20">
          <h1 className="mb-15 text-center uppercase font-bold tracking-wide text-3xl">
            Suniverse
          </h1>
          <div className="max-w-4xl mx-auto px-10 leading-7 text-[1.1rem]">
            <p className="text-rebirth-primary mb-5">
              <b className="font-serif">Suniverse</b> was a social media project
              I founded during high school, serving as my class’s official
              presence on TikTok and Instagram. Its initial purpose was to share
              daily moments of our school life, aiming to portray a positive
              image of the History-specialised class and inspire younger
              students in their academic journey.
            </p>
            <p className="text-rebirth-primary mb-5">
              Though it started as a light-hearted, entertainment-focused
              project, <b className="font-serif">Suniverse</b> gradually evolved
              in both content direction and purpose. Over time, it achieved
              highly positive results in terms of online engagement and had a
              meaningful impact on students preparing for high school entrance
              exams.
            </p>
          </div>

          <div className="mx-auto w-full h-auto mt-5 px-4 sm:px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              suniverse1,
              suniverse2,
              suniverse3,
              suniverse4,
              suniverse5,
              suniverse6,
            ].map((src, i) => (
              <div key={i} className="overflow-hidden border">
                <img
                  src={src}
                  alt={`suniverse ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-6xl mt-8 px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Instagram Reel */}
              <div className="w-full">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{ width: "100%", margin: 0 }}
                />
              </div>

              {/* 2 Images */}
              <div className="mb-15 grid grid-cols-2 gap-4">
                {[suniverse7, suniverse8].map((src, i) => (
                  <div key={i} className="overflow-hidden border">
                    <img
                      src={src}
                      alt={`suniverse ${7 + i}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSuniverse;
