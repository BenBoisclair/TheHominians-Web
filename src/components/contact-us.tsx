import { SOCIAL_MEDIA } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section id="ContactUs" className="px-4 md:px-32 flex flex-col mb-20 mt-10">
      <div className="border-white border-t-2 py-2">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">CONTACT US</span>
        </div>
        <div className="mt-12 flex-col flex gap-4">
          <span>
            If you wish to tell us about anything – from funding to
            opportunities – please feel free to let us know via our email:
          </span>
          <span>
            <strong>contact@taste-map.com.</strong>
          </span>
          <span>
            Links to our social media, on which you can reach out to us as well,
            are listed below:
          </span>
          <div className="flex gap-4 mt-8">
            {SOCIAL_MEDIA.map((media, key) => (
              <Link href={media.link} key={key}>
                <Image
                  src={media.image}
                  alt={media.name}
                  width={50}
                  height={50}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
