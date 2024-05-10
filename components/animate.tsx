"use client"
import AOS from "aos"
import { useEffect } from "react"

const Animate = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    })
  })

  return null
}

export default Animate
