import Image from "next/image";

export default function Network() {
  return (
    <section id="network" className="scroll-mt-24">
      <div className="mx-auto max-w-[1140px] px-6 pt-20 lg:px-0 lg:pt-[110px]">
        <h2 className="mx-auto max-w-[383px] text-center text-[28px] font-medium leading-[1.45] text-[#0B132A] lg:text-[35px] lg:leading-[50px]">
          Huge Global Network of Fast VPN
        </h2>
        <p className="mx-auto mt-5 max-w-[555px] text-center text-base leading-[30px] text-[#4F5665]">
          See <span className="font-medium">LaslesVPN</span> everywhere to make
          it easier for you when you move locations.
        </p>

        <div className="mx-auto mt-16 max-w-[1060px] lg:mt-[100px]">
          <Image
            src="/images/map-global.png"
            alt="Huge global network of fast VPN locations"
            width={1060}
            height={538}
            className="h-auto w-full"
            loading="lazy"
          />
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Image
            src="/images/sponsors.png"
            alt="Netflix, Reddit, Amazon, Discord and Spotify"
            width={1136}
            height={209}
            className="h-auto w-full max-w-[1136px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
