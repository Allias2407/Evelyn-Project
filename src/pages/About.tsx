import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import about from "../assets/aboutimg.jpeg";

const About = () => {
  return (
    <>
      <ThemeToggle />

      {/* Sidebar layout: navbar + content */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-screen">
        <Navbar />

        <main className="pt-20 px-4 sm:px-6 lg:px-10 pb-10">
          <h1 className="mb-10 text-center uppercase font-bold tracking-wide text-3xl sm:text-4xl">
            about me
          </h1>

          <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="p-6 sm:p-8 md:p-10 lg:p-16">
                <img
                  src={about}
                  alt="Evelyn's img"
                  className="w-full h-auto max-h-130 object-cover rounded-lg shadow"
                />
              </div>
            </div>

            {/* Text */}
            <div className="mb-10 w-full lg:w-1/2 text-rebirth-primary leading-7 text-base sm:text-lg lg:text-[1.2rem]">
              <h2 className="mb-3 font-bold text-2xl sm:text-3xl font-serif">
                Helloo !!
              </h2>

              <p className="mb-5">
                I'm Tran Khanh Linh, but I go by{" "}
                <i className="font-medium font-serif">Evelyn Tran</i>.
              </p>

              <p className="mb-5">
                As a professional communication student and a young creative
                enthusiast, I am passionate about crafting creative media
                products that are trend-driven, meaningful and infused with a
                sense of humour, where storytelling comes alive through powerful
                and evocative visuals. I'm a fast learner and always eager to
                explore new things.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
