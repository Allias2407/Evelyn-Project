import "@/Banner3D.css";
import Navbar from "./Navbar";
import rebirth1 from "@/assets/rebirth(1).jpg";
import rebirth2 from "@/assets/rebirth(2).jpg";
import rebirth3 from "@/assets/rebirth(3).jpg";
import rebirth4 from "@/assets/rebirth(4).jpg";
import about from "../assets/aboutimg.jpeg";
import hpbd1 from "../assets/hpbd1.jpg";
import hpbd2 from "../assets/hpbd2.jpg";
import hpbd3 from "../assets/hpbd3.jpg";
import hpbd4 from "../assets/hpbd4.jpg";
import hpbd5 from "../assets/hpbd5.jpg";

const images = [
  rebirth1,
  hpbd1,
  rebirth2,
  hpbd2,
  rebirth3,
  hpbd3,
  rebirth4,
  hpbd4,
  about,
  hpbd5,
];

type CSSVars = React.CSSProperties & {
  ["--quantity"]?: number | string;
  ["--position"]?: number | string;
};

export default function Banner3D() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-screen">
      <Navbar />
      <section className="banner">
        <div
          className="slider"
          style={{ "--quantity": images.length } as CSSVars}
        >
          {images.map((src, index) => (
            <div
              key={src}
              className="item"
              style={{ "--position": index + 1 } as CSSVars}
            >
              <img src={src} alt={`dragon-${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="content">
          <h1 data-content="Evelyn">Evelyn</h1>

          <div className="author">
            <h2>TRAN KHANH LINH</h2>
            <p>
              <b>Prof Com</b>
            </p>
            <p>Find out more about me and my projects!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
