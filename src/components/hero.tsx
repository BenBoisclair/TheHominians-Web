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
          <span className="font-bold">
            A team with dreams to heighten the lives of others.
          </span>
        </div>
        <span className=" max-w-[800px]">
          Consisting of five co-founders, The Hominians holds one aim in common:
          to make an impact on society, especially those often neglected by the
          authority. To accomplish it, we have launched an online marketing
          platform for vendors stationed at Thai local markets named “TasteMap”,
          which helps them communicate with English-speaking tourists and manage
          their finances.
        </span>
        <span>Since 2021.</span>
      </div>
    </section>
  );
}
