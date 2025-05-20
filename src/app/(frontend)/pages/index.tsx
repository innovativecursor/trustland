import ExploreFeatures from '../components/ExploreFeatures'
import FeaturedProperties from '../components/FeaturedProperties'
import Hero from '../components/Hero'
import RealEstateInquiryForm from '../components/RealEstateInquiryForm'
import ParallaxSection from '../components/ui/ParallaxSection'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <FeaturedProperties />
      <ExploreFeatures />
      <ParallaxSection />
      <RealEstateInquiryForm />
      {/* <Footer /> */}
    </>
  )
}
