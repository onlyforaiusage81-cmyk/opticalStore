import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import ShopByCategory from "@/components/sections/ShopByCategory";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import Brands from "@/components/sections/Brands";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import BookAppointment from "@/components/sections/BookAppointment";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <FeatureStrip />
        <ShopByCategory />
        <FeaturedCollection />
        <Brands />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <BookAppointment />
        <Gallery />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
