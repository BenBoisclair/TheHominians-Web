import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TasteMap() {
  return (
    <section id="TasteMap" className="px-4 md:px-32 flex flex-col">
      <div className="border-white border-t-2 py-2">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">TASTEMAP</span>
          <Link
            href={`https://www.taste-map.com`}
            target="_blank"
            className="flex items-center gap-1">
            Visit the website
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="flex gap-10 py-12 flex-col md:flex-row">
          <div className="flex w-full gap-6">
            <div>
              <Image
                src={`/mockups/market_page.png`}
                alt="TasteMap's Market Page"
                width={179}
                height={362}
              />
            </div>
            <div>
              <Image
                src={`/mockups/recommended_page.png`}
                alt="TasteMap's Market Page"
                width={179}
                height={362}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
              <span>
                TasteMap is an online marketing platform for vendors situated in
                markets across Bangkok, Thailand.
              </span>
              <span>
                As miscommunication between them and tourists is a frequent
                occurrence, we aim to prevent the predicament by creating a
                website that lists all information on shops and markets in a
                medium language that both can understand.
              </span>
            </div>
            <div className="flex gap-4 flex-wrap md:mt-0 mt-4">
              <Image
                src={`/company_logos/ted_youth_startup_logo.png`}
                alt="TasteMap's Market Page"
                width={188}
                height={94}
                className=" rounded-lg"
              />
              <Image
                src={`/company_logos/ptg_logo.png`}
                alt="TasteMap's Market Page"
                width={94}
                height={94}
                className=" rounded-lg"
              />
              <Image
                src={`/company_logos/ican_logo.jpeg`}
                alt="TasteMap's Market Page"
                width={94}
                height={94}
                className=" rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
