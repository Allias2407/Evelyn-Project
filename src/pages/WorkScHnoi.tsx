import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import tiktok1 from "../assets/tiktok1.png";
import tiktok2 from "../assets/tiktok2.png";
import tiktok3 from "../assets/tiktok3.png";
import tiktok4 from "../assets/tiktok4.png";
import tiktok5 from "../assets/tiktok5.png";
import tiktok6 from "../assets/tiktok6.png";

const WorkScHnoi = () => {
  const videos = [
    "7450368052647988488",
    "7439350340467657991",
    "7431941662076620048",
  ];

  return (
    <div>
      <ThemeToggle />
      <div className="grid grid-cols-[auto_1fr]">
        <Navbar />
        <div className="pt-20">
          <h1 className="mb-15 text-center uppercase font-bold tracking-wide text-3xl">
            RMIT Vietnam Student Council Hanoi
          </h1>
          <a
            href="https://www.tiktok.com/@rmitstudentcouncilhanoi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-bg-btn-sc px-5 py-3 text-text-btn-sc font-bold rounded-3xl hover:text-text-sc-hover hover: hover:bg-btn-sc-hover transition duration-100"
          >
            RMIT Vietnam Student Council Hanoi's Tiktok account
          </a>

          <div className="w-full mt-5 px-15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <img
              src={tiktok1}
              alt="tiktok 1"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src={tiktok2}
              alt="tiktok 2"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src={tiktok3}
              alt="tiktok 3"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src={tiktok4}
              alt="tiktok 4"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src={tiktok5}
              alt="tiktok 5"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src={tiktok6}
              alt="tiktok 6"
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <div className="mt-5 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((id) => (
              <iframe
                key={id}
                src={`https://www.tiktok.com/embed/v2/${id}`}
                className="w-full aspect-9/16 rounded-lg"
                allowFullScreen
              />
            ))}
          </div>

          <div className="mt-5 max-w-4xl mx-auto px-10 text-[1.1rem]">
            <p className="text-sc-primary mb-5">
              <span className="text-red-500 font-bold font-serif"><i>RMIT Vietnam Student Council</i></span> is an elected group of students that
              represents the whole RMIT student body, contributing to enhancing
              and developing students' university experience. The organisation
              holds several events for students, including <b className="font-serif">Club Day,
              Student-Staff Consultative Committees (SSCCs), Teachers' Day,
              Relax & Recharge</b> and <b className="font-serif">Pride Week</b>.
            </p>
            <p className="text-sc-primary mb-20">
              I worked as a <b className="font-serif">Content Creator</b> for RMIT Vietnam Student Council at
              the Hanoi campus for 3 months starting from October 2024. I was
              involved in creative ideation, producing, and editing videos for
              the organisation's Instagram and TikTok platforms, covering key
              events such as Club Day: House of Monsters, Teachers' Day, Relax &
              Recharge: Merry Magic, and SSCCs. Additionally, I was responsible
              for managing and updating real-time stories on the social media
              accounts of the RMIT Vietnam Student Council Hanoi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkScHnoi;
