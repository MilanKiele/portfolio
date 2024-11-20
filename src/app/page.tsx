import AboutMaiaLabs from "@/components/AboutMaiaLabs";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialMediaSection from "@/components/SocialMediaSection";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <section id="Home">
        <Hero />
      </section>
      <section id="Goal">
        <Skills />
      </section>
      <section id="Timeline">
        <Timeline />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Social">
        <SocialMediaSection />
      </section>
      <section id="MaiaLabs">
        <AboutMaiaLabs />
      </section>
      <section id="Contact">
        <ContactForm />
      </section>
    </main>
  );
}
