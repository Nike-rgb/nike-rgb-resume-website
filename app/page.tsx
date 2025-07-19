import Chatbot from "./components/ChatBot";
import Hero from "./components/Hero";
import MediumStories from "./components/MediumStories";
import Portfolio from "./components/Portfolio";
import ShowCase from "./components/ShowCase";
import Socials from "./components/Socials";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Socials />
      <MediumStories />
      <ShowCase />
      <TechStack />
      <Portfolio />
      <Chatbot />
    </>
  );
}
