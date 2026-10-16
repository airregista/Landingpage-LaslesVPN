import Image from "next/image";
import { LocationPinIcon, ServerIcon, UserIcon } from "./brand";

const STATS = [
  { icon: <UserIcon className="h-6 w-6" />, value: "90+", label: "Users" },
  { icon: <LocationPinIcon className="h-6 w-6" />, value: "30+", label: "Locations" },
  { icon: <ServerIcon className="h-6 w-6" />, value: "50+", label: "Servers" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[130px] lg:pt-[150px]">
      <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-4 lg:px-0">
        <div>
          <h1 className="text-[35px] font-bold leading-[1.4] text-[#0B132A] sm:text-[42px] lg:text-[50px] lg:leading-[70px]">
            Want anything to be easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h1>
          <p className="mt-5 max-w-[555px] text-base leading-[30px] text-[#4F5665]">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-medium">LaslesVPN</span> discover interesting
            features from us.
          </p>
          <a
            href="#pricing"
            className="shadow-btn mt-8 inline-flex h-[60px] w-[250px] items-center justify-center rounded-[10px] bg-[#F53838] text-base font-bold text-white transition-colors hover:bg-[#d92f2f]"
          >
            Get Started
          </a>
        </div>
        <div className="mx-auto w-full max-w-[611px]">
          <Image
            src="/images/illustration-hero.png"
            alt="Person using LaslesVPN on a laptop"
            width={2445}
            height={1530}
            className="h-auto w-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* stats bar */}
      <div className="mx-auto mt-16 max-w-[1140px] px-6 lg:mt-[100px] lg:px-0">
        <dl className="shadow-card grid grid-cols-1 gap-8 rounded-[10px] bg-white px-10 py-9 sm:grid-cols-3 sm:gap-0 sm:py-[37px]">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center justify-center gap-9 ${
                i > 0 ? "sm:border-l-2 sm:border-[#EEEFF2]" : ""
              }`}
            >
              <span className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#FFECEC]">
                {s.icon}
              </span>
              <div>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[25px] font-bold leading-[30px] text-[#0B132A]">
                  {s.value}
                </dd>
                <dd className="text-xl leading-[30px] text-[#4F5665]">{s.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
