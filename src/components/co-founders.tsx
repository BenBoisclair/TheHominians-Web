import { FOUNDERS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const FounderCard = ({
  founder,
}: {
  founder: { name: string; role: string; description: string; image: string };
}) => {
  return (
    <div className=" flex gap-12 flex-col md:flex-row items-center md:items-start text-center md:text-start">
      <div className="w-[220px] h-[220px] rounded-full relative overflow-hidden shrink-0">
        <Image
          src={`${founder.image}`}
          alt={founder.name}
          objectFit="cover"
          fill={true}
        />
      </div>
      <div className="flex flex-col my-0 md:my-10 justify-between text-lg gap-2 md:gap-0">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{founder.name}</h3>
          <h4>{founder.role}</h4>
        </div>
        <p>{founder.description}</p>
      </div>
    </div>
  );
};
