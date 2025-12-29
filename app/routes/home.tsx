import type { Route } from "./+types/home";
import { Hero } from "~/components/landing/Hero";
import { ProblemAgitation } from "~/components/landing/ProblemAgitation";
import { Solution } from "~/components/landing/Solution";
import { Testimonials } from "~/components/landing/Testimonials";
import { FAQ } from "~/components/landing/FAQ";
import { Footer } from "~/components/landing/Footer";

import { Navigation } from "~/components/landing/Navigation";

import { FunnelMechanism } from "~/components/landing/FunnelMechanism";
import { WhyChooseUs } from "~/components/landing/WhyChooseUs";
import { Pricing } from "~/components/landing/Pricing";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Joachim Duplat - Transformez votre acquisition" },
    { name: "description", content: "Expertise pragmatique pour entrepreneurs. Transformez votre site passif en conseiller interactif avec la méthode Q4C." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FunnelMechanism />
      <ProblemAgitation />
      <Solution />
      <WhyChooseUs />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
    </main>
  );
}
