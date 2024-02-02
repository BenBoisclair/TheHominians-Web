import { FOUNDERS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FounderCard from "./founder-card";

export default function CoFounders() {
  return (
    <section id="CoFounders" className="px-4 md:px-32 flex flex-col">
      <div className="border-white border-t-2 py-2">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">CO-FOUNDERS</span>
        </div>
        <div className="flex flex-col py-10 gap-16 md:gap-12">
          {FOUNDERS.map((founder, key) => (
            <FounderCard founder={founder} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}
