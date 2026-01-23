'use client'

import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Animate() {
     useEffect(() => {
        AOS.init({
          once: true,
          disable: 'phone',
          duration: 1000,
          easing: 'ease-out-cubic',
        })
      })

    return null
}