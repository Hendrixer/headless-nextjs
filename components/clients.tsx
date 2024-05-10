"use client"

import { useEffect } from "react"
import Image from "next/image"
import Particles from "./particles"
import Swiper, { Autoplay } from "swiper"
import "swiper/swiper.min.css"
import { CustomerLogosQuery } from "@/types"
Swiper.use([Autoplay])

export default function Clients({
  logos,
}: {
  logos: CustomerLogosQuery["assetCollection"]["items"]
}) {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    })
  }, [])

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                {logos.map((logo) => (
                  <div className="swiper-slide !w-auto">
                    <Image
                      src={logo.url}
                      alt={logo.title}
                      width={logo.width}
                      height={logo.height}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
