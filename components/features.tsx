import Image from "next/image";
import { CheckCircle } from "./brand";

const ITEMS = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24">
      <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-6 pt-20 lg:grid-cols-2 lg:gap-10 lg:px-0 lg:pt-[110px]">
        <div className="mx-auto w-full max-w-[508px]">
          <Image
            src="/images/illustration-features.png"
            alt="Person exploring LaslesVPN features"
            width={509}
            height={415}
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
        <div className="lg:pl-[60px]">
          <h2 className="max-w-[383px] text-[28px] font-medium leading-[1.45] text-[#0B132A] lg:text-[35px] lg:leading-[50px]">
            We Provide Many Features You Can Use
          </h2>
          <p className="mt-5 max-w-[428px] text-base leading-[30px] text-[#4F5665]">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="mt-5 flex flex-col gap-[15px]">
            {ITEMS.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-[#4F5665]">
                <CheckCircle className="h-6 w-6 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
