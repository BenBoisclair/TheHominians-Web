import { THE_HOMINIANS } from "@/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="flex flex-col gap-20 md:gap-32 lg:pt-18 lg:pb-36 xl:flex-row py-10 px-4 md:px-32">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <Image
            src={`/logo.png`}
            width={60}
            height={60}
            alt="The Hominians Co.,Ltd."
            className="mb-4"
          />
          <h1 className="text-3xl font-black">THE HOMINIANS</h1>
          <span className="font-bold">{THE_HOMINIANS.short_description}</span>
        </div>
        <span className=" max-w-[800px]">{THE_HOMINIANS.description}</span>
        <span>Since 2021.</span>
      </div>
      <div className="absolute left-0 top-16 md:top-24 w-full h-4/5 flex flex-col">
        <div className="background-block w-[115px] h-[110px] absolute bottom-0 right-0 rounded-lg md:w-[210px] md:h-[350px]" />
        <div className="background-block w-[200px] h-[160px] absolute right-0 rounded-lg md:w-[210px]" />
        <div className="background-block w-[200px] h-[160px] absolute md:right-60 rounded-lg md:w-[210px] hidden md:flex" />
      </div>
    </section>
  );
}
