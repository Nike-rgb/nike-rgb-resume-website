import Chatbot from "./components/ChatBot";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ShowCase from "./components/ShowCase";
import Socials from "./components/Socials";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Socials />
      <ShowCase />
      <TechStack />
      <Portfolio />
      <Chatbot />
    </>
  );
}
