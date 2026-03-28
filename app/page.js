import HeroSlider from "@/components/HeroSlider";
import StaticBanner from "@/components/StaticBanner";
import ProductPage from "@/components/Product";

export const metadata = {
  title: "Home - Maganlal Chikki",
};

export default function Home1() {
  return (
    <div>
        <HeroSlider/>
        <StaticBanner/>
        <ProductPage/>
    </div>
  );
}

