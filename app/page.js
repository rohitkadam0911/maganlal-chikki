"use client"

import HeroSlider from "@/components/HeroSlider";
import StaticBanner from "@/components/StaticBanner";
import ProductPage from "@/components/Product";
import { useSearch } from "@/app/context/SearchContext";

export default function Home1() {

  const { search } = useSearch()

  return (
    <div>

      {/* 🔥 Hide when searching */}
      {!search && (
        <>
          <HeroSlider />
          <StaticBanner />
        </>
      )}

      <ProductPage />

    </div>
  );
}