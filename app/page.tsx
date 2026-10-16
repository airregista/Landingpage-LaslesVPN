import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Pricing from "../components/pricing";
import Network from "../components/network";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-full bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div className="pt-20 lg:pt-[60px]">
          <Pricing />
        </div>
        <Network />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
