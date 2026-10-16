import Image from "next/image";
import { CheckSmall } from "./brand";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  img: string;
};

const PLANS: Plan[] = [
  {
    name: "Free Plan",
    price: "Free",
    period: "",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    img: "/images/plan-free.png",
  },
  {
    name: "Standard Plan",
    price: "$9",
    period: " / mo",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    img: "/images/plan-standard.png",
  },
  {
    name: "Premium Plan",
    price: "$12",
    period: " / mo",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    featured: true,
    img: "/images/plan-premium.png",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-[#FBFBFB] pb-24">
      <div className="mx-auto max-w-[1140px] px-6 pt-20 lg:px-0 lg:pt-[110px]">
        <h2 className="mx-auto max-w-[383px] text-center text-[28px] font-medium leading-[1.45] text-[#0B132A] lg:text-[35px] lg:leading-[50px]">
          Choose Your Plan
        </h2>
        <p className="mx-auto mt-5 max-w-[555px] text-center text-base leading-[30px] text-[#4F5665]">
          Let&apos;s choose the package that is best for you and explore it
          happily and cheerfully.
        </p>

        <div className="mt-[60px] grid gap-8 md:grid-cols-3 lg:gap-[50px]">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`flex min-h-[760px] flex-col items-center rounded-[10px] border-2 border-[#DDDDDD] bg-white px-6 py-14 transition-shadow ${
                p.featured ? "shadow-plan-active" : "hover:shadow-plan"
              }`}
            >
              <Image
                src={p.img}
                alt={`${p.name} gift box`}
                width={146}
                height={166}
                className="h-[165px] w-auto"
                loading="lazy"
              />
              <h3 className="mt-8 text-lg font-medium leading-[30px] text-[#0B132A]">
                {p.name}
              </h3>
              <ul className="mt-8 flex flex-col gap-[10px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-5 text-sm leading-[30px] text-[#4F5665]">
                    <CheckSmall className="h-[22px] w-[22px] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col items-center pt-10">
                <p className="text-[25px] font-medium leading-[30px] text-[#0B132A]">
                  {p.price}
                  {p.period && (
                    <span className="font-normal text-[#4F5665]">{p.period}</span>
                  )}
                </p>
                <a
                  href="#home"
                  className={`mt-5 flex h-[45px] w-[178px] items-center justify-center rounded-full border-2 border-[#F53838] text-base font-bold transition-colors ${
                    p.featured
                      ? "shadow-btn bg-[#F53838] text-white hover:bg-[#d92f2f]"
                      : "text-[#F53838] hover:bg-[#F53838] hover:text-white"
                  }`}
                >
                  Select
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
