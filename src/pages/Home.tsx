import Hero from "../components/Hero";
import ThemeToggle from "../components/ThemeToggle";
import Banner3D from "../components/Banner3D";

const Home = () => {
  return (
    <div className="bg-background">
      <Hero />
      <ThemeToggle />
      <Banner3D />
    </div>
  );
};

export default Home;
