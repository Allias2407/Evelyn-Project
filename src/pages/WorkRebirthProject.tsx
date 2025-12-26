import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import rebirth1 from "@/assets/rebirth(1).jpg";
import rebirth2 from "@/assets/rebirth(2).jpg";
import rebirth3 from "@/assets/rebirth(3).jpg";
import rebirth4 from "@/assets/rebirth(4).jpg";

const WorkRebirthProject = () => {
  return (
    <div>
      <ThemeToggle />
      <div className="grid grid-cols-[auto_1fr]">
        <Navbar />

        <div className="pt-20">
          <h1 className="mb-15 text-center uppercase font-bold tracking-wide text-3xl">
            'Rebirth' Project
          </h1>
          <div className="max-w-4xl mx-auto px-10 text-[1.1rem]">
            <p className="text-rebirth-primary mb-5">
              <b className="font-serif">'Rebirth' Photoshoot</b> is a photoshoot
              project created for my friend’s fashion design portfolio. I was in
              charge of concept development, production, modelling, and photo
              editing.
            </p>
            <p className="text-rebirth-primary mb-5">
              The creative concept I developed was{" "}
              <b className="font-serif">
                <i>
                  inspired by the image of a phoenix rising from the ashes - a
                  symbol of strength and transformation
                </i>
              </b>
              . It was built upon the original idea behind the outfit: the raw
              beauty of nature, expressed through earthy tones like brown and
              beige, reminiscent of grass, soil, and the wilderness.
            </p>
            <p className="text-rebirth-primary mb-5">
              Through this project, I have developed my creative thinking skills
              and had the opportunity to experiment with multiple roles. The
              project also contributed to my friend, the fashion designer,
              receiving high praise and earning a 100% scholarship from the
              London College for Design & Fashion (LCDF Hanoi).
            </p>
          </div>
          <div className="mx-auto max-w-5xl px-4 mb-15 sm:px-6 lg:px-10 py-10 space-y-4 sm:space-y-6">
            {[rebirth1, rebirth2, rebirth3, rebirth4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`rebirth-${i + 1}`}
                className="w-full rounded-2xl border shadow-sm object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkRebirthProject;
