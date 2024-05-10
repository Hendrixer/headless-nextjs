import Hero from "@/components/hero"
import LogoWall from "@/components/logo-wall"
import Features from "@/components/features"
import Features02 from "@/components/features-02"
import Features03 from "@/components/features-03"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import Features04 from "@/components/features-04"
import Pricing from "./pricing-section"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"

const sections = [
  Hero,
  LogoWall,
  Features,
  Features02,
  Features03,
  TestimonialsCarousel,
  Features04,
  Pricing,
  Testimonials,
  Cta,
]
export default async function Home() {
  return (
    <>
      {sections.map((Section) => (
        <Section />
      ))}
    </>
  )
}
