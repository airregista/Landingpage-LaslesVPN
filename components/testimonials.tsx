"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowIcon, StarIcon } from "./brand";

type Review = {
  name: string;
  location: string;
  avatar: string;
  rating: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    avatar: "/images/avatar-robert.png",
    rating: "4.5",
    text: "\u201cWow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best\u201d.",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    avatar: "/images/avatar-christy.png",
    rating: "4.5",
    text: "\u201cI like it because I like to travel far and still can connect with high speed.\u201d.",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    avatar: "/images/avatar-jou.png",
    rating: "4.5",
    text: "\u201cThis is very unusual for my business that currently requires a virtual private network that has high security.\u201d.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, REVIEWS.length - 1));
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 32 : el.clientWidth;
    el.scrollTo({ left: clamped * w, behavior: "smooth" });
    setActive(clamped);
  };

  return (
    <section id="testimonials" className="scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-[1140px] px-6 pt-20 lg:px-0 lg:pt-[110px]">
        <h2 className="mx-auto max-w-[448px] text-center text-[28px] font-medium leading-[1.45] text-[#0B132A] lg:text-[35px] lg:leading-[50px]">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="mx-auto mt-5 max-w-[555px] text-center text-base leading-[30px] text-[#4F5665]">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="mx-auto mt-[60px] max-w-[1300px] lg:pl-[max(1.5rem,calc((100vw-1140px)/2))]">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 lg:px-0"
        >
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              data-card
              className={`flex w-[calc(100%-3rem)] max-w-[400px] shrink-0 snap-start flex-col rounded-[10px] border-2 bg-white p-7 transition-shadow sm:w-[400px] ${
                i === active
                  ? "border-[#F53838] shadow-testimonial"
                  : "border-[#DDDDDD]"
              }`}
            >
              <div className="flex items-center gap-5">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-medium leading-[1.2] text-[#0B132A]">
                    {r.name}
                  </h3>
                  <p className="text-sm text-[#4F5665]">{r.location}</p>
                </div>
                <span className="flex items-center gap-2 text-base text-[#0B132A]">
                  {r.rating}
                  <StarIcon className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-5 text-base leading-[30px] text-[#0B132A]">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-8 lg:px-0">
          <div className="flex items-center gap-2">
            {REVIEWS.map((r, i) => (
              <button
                key={r.name}
                onClick={() => scrollTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-[15px] rounded-full transition-all ${
                  i === active ? "w-[45px] bg-[#F53838]" : "w-[15px] bg-[#DDE0E4]"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollTo(active - 1)}
              aria-label="Previous reviews"
              className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#F53838] text-[#F53838] transition-colors hover:bg-[#F53838] hover:text-white"
            >
              <ArrowIcon flip className="h-7 w-7" />
            </button>
            <button
              onClick={() => scrollTo(active + 1)}
              aria-label="Next reviews"
              className="shadow-btn flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F53838] text-white transition-colors hover:bg-[#d92f2f]"
            >
              <ArrowIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* subscribe card */}
      <div className="mx-auto max-w-[1140px] px-6 lg:px-0">
        <div className="shadow-card relative z-10 flex flex-col items-start justify-between gap-8 rounded-[10px] bg-white p-8 sm:p-12 lg:flex-row lg:items-center lg:px-[70px] lg:py-[58px]">
          <div>
            <h2 className="max-w-[372px] text-[28px] font-medium leading-[1.35] text-[#0B132A] lg:text-[35px] lg:leading-[45px]">
              Subscribe Now for Get Special Features!
            </h2>
            <p className="mt-3 text-base text-[#4F5665]">
              Let&apos;s subscribe with us and find the fun.
            </p>
          </div>
          <a
            href="#pricing"
            className="shadow-btn inline-flex h-[60px] w-full max-w-[250px] shrink-0 items-center justify-center rounded-[10px] bg-[#F53838] text-base font-bold text-white transition-colors hover:bg-[#d92f2f]"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
