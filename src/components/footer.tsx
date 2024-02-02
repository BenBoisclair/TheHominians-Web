import { ArrowUp, Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-4 md:px-32">
      <div>
        <Link href={"/"} className="flex gap-2 items-center">
          <ArrowUp size={18} />
          Back to top
        </Link>
      </div>
      <div className="my-10">
        <span className="text-sm flex items-center gap-2">
          <Copyright size={14} />
          Copyrighted 2024, The Hominians Limited Co.
        </span>
      </div>
    </div>
  );
}
