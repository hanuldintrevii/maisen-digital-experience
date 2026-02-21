import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import HighlightDishes from "@/components/HighlightDishes";
import ReviewsSection from "@/components/ReviewsSection";
import ReservationPreview from "@/components/ReservationPreview";
import OpeningHours from "@/components/OpeningHours";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <HighlightDishes />
      <ReviewsSection />
      <ReservationPreview />
      <OpeningHours />
    </main>
  );
};

export default Index;
