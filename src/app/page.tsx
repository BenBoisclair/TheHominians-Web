import CoFounders from "@/components/co-founders";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";

import TasteMap from "@/components/taste-map";

export default function Home() {
  return (
    <div className="pt-16 md:pt-28">
      <Hero />
      <TasteMap />
      <CoFounders />
      <ContactUs />
    </div>
  );
}
