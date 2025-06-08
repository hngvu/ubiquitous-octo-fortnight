import FeaturedCollections from "../components/FeaturedCollections";
import HeroSection from "../components/HeroSection"
import SocialProof from "../components/SocialProof";
import SpecialProducts from "../components/SpecialProducts";
import ValueProposition from "../components/ValueProposition"
const HomePage = () => {
  return (
    <>
        <HeroSection />
      <FeaturedCollections />
      <SpecialProducts />
      <SocialProof />
      <ValueProposition />     
    </>
  )
}

export default HomePage