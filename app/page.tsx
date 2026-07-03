import { HomeAiAssistant } from "@/features/marketing/components/home-ai-assistant";
import { HomeDestinations } from "@/features/marketing/components/home-destinations";
import { HomeHero } from "@/features/marketing/components/home-hero";
import { HomeRecommendedHotels } from "@/features/marketing/components/home-recommended-hotels";
import { HomeTrustBar } from "@/features/marketing/components/home-trust-bar";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeDestinations />
      <HomeRecommendedHotels />
      <HomeAiAssistant />
      <HomeTrustBar />
    </>
  );
}
