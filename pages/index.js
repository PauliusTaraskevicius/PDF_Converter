import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import Hero from "@/components/hero/hero";
import ImagesGrid from "@/components/image_section/images-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <div className="bg-gray-200 ">
        <Hero />
        <ImagesGrid />
      </div>
      <Footer />
    </div>
  );
}
