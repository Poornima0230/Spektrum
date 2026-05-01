import { Hero } from "../components/Hero";
import "../styles/home.css";
import { About } from "./About";
import { Bullion } from "./Bullion";
import { Contact } from "./Contact";
import { OrderForm } from "./Form";
import { LabTesting } from "./LabTesting";
import { Services } from "./Services";
import { SpiritualGem } from "./SpritualGem";
import { Why } from "./Why";

export const Home = () => {
  return (
    <section className="home" id="home">
      <Hero />
      <About />
      <Services />
      <LabTesting />
      <Bullion />
      <SpiritualGem />
      <Why />
      <Contact />
      <OrderForm />
    </section>
  );
};
