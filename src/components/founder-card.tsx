import Image from "next/image";

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
          <h3 className="text-2xl font-bold flex gap-2">{founder.name}</h3>
          <h4>{founder.role}</h4>
        </div>
        <p className="md:mt-4">{founder.description}</p>
      </div>
    </div>
  );
};

export default FounderCard;
