import type { Route } from "./+types/home";
import { Hero } from "~/components/landing/Hero";
import { ProblemAgitation } from "~/components/landing/ProblemAgitation";
import { Solution } from "~/components/landing/Solution";
import { Testimonials } from "~/components/landing/Testimonials";
import { FAQ } from "~/components/landing/FAQ";
import { Footer } from "~/components/landing/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Joachim Duplat - Transformez votre acquisition" },
    { name: "description", content: "Expertise pragmatique pour entrepreneurs. Transformez votre site passif en conseiller interactif avec la méthode Q4C." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent/20 selection:text-accent">
      <Hero />
      <ProblemAgitation />
      <Solution />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
