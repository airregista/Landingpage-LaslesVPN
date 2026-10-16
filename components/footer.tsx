import Image from "next/image";
import { Logo } from "./brand";

const COLS: Array<{ title: string; links: string[] }> = [
  { title: "Product", links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"] },
  { title: "Engage", links: ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"] },
  { title: "Earn Money", links: ["Affiliate", "Become Partner"] },
];

export default function Footer() {
  return (
    <footer id="help" className="-mt-24 bg-[#F8F8F8] pt-40">
      <div className="mx-auto grid max-w-[1140px] gap-12 px-6 pb-16 lg:grid-cols-[340px_1fr] lg:px-0">
        <div>
          <Logo />
          <p className="mt-5 max-w-[340px] text-base leading-[30px] text-[#4F5665]">
            <span className="font-medium">LaslesVPN</span> is a private virtual
            network that has unique features and has high security.
          </p>
          <div className="mt-7 flex items-center gap-5">
            {[
              { label: "Facebook", src: "/images/social-facebook.png" },
              { label: "Twitter", src: "/images/social-twitter.png" },
              { label: "Instagram", src: "/images/social-instagram.png" },
            ].map(({ label, src }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="block h-[34px] w-[34px] overflow-hidden rounded-full shadow-[0_8px_20px_-6px_rgba(13,16,37,0.25)] transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src={src}
                  alt={label}
                  width={34}
                  height={34}
                  className="h-full w-full"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <p className="mt-7 text-base text-[#AFB5C0]">©2020LaslesVPN</p>
        </div>

        <nav className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:pl-20" aria-label="Footer">
          {COLS.map((c) => (
            <div key={c.title}>
              <h3 className="text-lg font-medium leading-[30px] text-[#0B132A]">{c.title}</h3>
              <ul className="mt-5 flex flex-col gap-[10px]">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#home"
                      className="text-base leading-[30px] text-[#4F5665] transition-colors hover:text-[#F53838]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
