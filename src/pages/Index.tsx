import GoldParticles from "@/components/wedding/GoldParticles";
import FloatingPetals from "@/components/wedding/FloatingPetals";
import ScrollProgress from "@/components/wedding/ScrollProgress";
import WeddingNav from "@/components/wedding/WeddingNav";
import SplashScreen from "@/components/wedding/SplashScreen";
import InvitationSlide from "@/components/wedding/InvitationSlide";
import CoupleSection from "@/components/wedding/CoupleSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import WeddingDay from "@/components/wedding/WeddingDay";
import PreWeddingEvents from "@/components/wedding/PreWeddingEvents";
import VenueSection from "@/components/wedding/VenueSection";
import InvitationMessage from "@/components/wedding/InvitationMessage";
import ClosingSection from "@/components/wedding/ClosingSection";
import SectionDivider from "@/components/wedding/SectionDivider";
import LuxHeroSection from "@/components/wedding/LuxHeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoldParticles />
      <FloatingPetals />
      <ScrollProgress />
      <WeddingNav />

      <LuxHeroSection />
      <SectionDivider />
      <InvitationSlide />
      <SectionDivider />
      <CoupleSection />
      <SectionDivider />
      <CountdownTimer />
      <SectionDivider />
      <PreWeddingEvents />
      <SectionDivider />
      <WeddingDay />
      <SectionDivider />
      <VenueSection />
      <SectionDivider />
      <InvitationMessage />
      <SectionDivider />
      <ClosingSection />
    </div>
  );
};

export default Index;
