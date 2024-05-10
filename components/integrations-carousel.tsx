'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IntegrationImg01 from '@/public/images/integrations-01.svg'
import IntegrationImg02 from '@/public/images/integrations-02.svg'
import IntegrationImg03 from '@/public/images/integrations-03.svg'
import IntegrationImg04 from '@/public/images/integrations-04.svg'
import IntegrationImg05 from '@/public/images/integrations-05.svg'
import Star from '@/public/images/star.svg'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'
import Avatar06 from '@/public/images/avatar-06.jpg'
import Avatar07 from '@/public/images/avatar-07.jpg'
import Avatar08 from '@/public/images/avatar-08.jpg'
import Avatar09 from '@/public/images/avatar-09.jpg'
import Avatar10 from '@/public/images/avatar-10.jpg'
import Avatar11 from '@/public/images/avatar-11.jpg'
import Avatar12 from '@/public/images/avatar-12.jpg'
import Avatar13 from '@/public/images/avatar-13.jpg'
import Avatar14 from '@/public/images/avatar-14.jpg'
import Avatar15 from '@/public/images/avatar-15.jpg'
import Avatar16 from '@/public/images/avatar-16.jpg'
import Avatar17 from '@/public/images/avatar-17.jpg'
import Avatar18 from '@/public/images/avatar-18.jpg'
import Avatar19 from '@/public/images/avatar-19.jpg'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Navigation])

export default function IntegrationsCarousel() {

  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
    const carousel = new Swiper('.stellar-carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
    setSwiperInitialized(true)
  }, [])

  return (
    <>
      <div className="stellar-carousel swiper-container group">
        <div className="swiper-wrapper w-fit">
          {/* Carousel items */}
          <div className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
            <div className="flex flex-col p-5 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <Image src={IntegrationImg01} width={40} height={40} alt="Icon 01" />
                  <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
                </div>
                <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href="/integrations/single-post">Retool</Link>
              </div>
              <div className="grow mb-4">
                <div className="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
              </div>
              <div className="flex justify-between">
                <div className="flex -space-x-3 -ml-0.5">
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar01} width={24} height={24} alt="Avatar 01" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar02} width={24} height={24} alt="Avatar 02" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar03} width={24} height={24} alt="Avatar 03" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar04} width={24} height={24} alt="Avatar 04" />
                </div>
                <button className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">Like</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path className="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
                  </svg>
                  <span>2.3K</span>
                </button>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
            <div className="flex flex-col p-5 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <Image src={IntegrationImg02} width={40} height={40} alt="Icon 02" />
                  <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
                </div>
                <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href="/integrations/single-post">Zapier</Link>
              </div>
              <div className="grow mb-4">
                <div className="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
              </div>
              <div className="flex justify-between">
                <div className="flex -space-x-3 -ml-0.5">
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar05} width={24} height={24} alt="Avatar 05" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar06} width={24} height={24} alt="Avatar 06" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar07} width={24} height={24} alt="Avatar 07" />
                </div>
                <button className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">Like</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path className="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
                  </svg>
                  <span>4.5K</span>
                </button>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
            <div className="flex flex-col p-5 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <Image src={IntegrationImg03} width={40} height={40} alt="Icon 03" />
                  <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
                </div>
                <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href="/integrations/single-post">Airtable</Link>
              </div>
              <div className="grow mb-4">
                <div className="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
              </div>
              <div className="flex justify-between">
                <div className="flex -space-x-3 -ml-0.5">
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar08} width={24} height={24} alt="Avatar 08" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar09} width={24} height={24} alt="Avatar 09" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar10} width={24} height={24} alt="Avatar 10" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar11} width={24} height={24} alt="Avatar 11" />
                </div>
                <button className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">Like</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path className="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
                  </svg>
                  <span>4.7K</span>
                </button>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
            <div className="flex flex-col p-5 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <Image src={IntegrationImg04} width={40} height={40} alt="Icon 04" />
                  <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
                </div>
                <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href="/integrations/single-post">Jira</Link>
              </div>
              <div className="grow mb-4">
                <div className="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
              </div>
              <div className="flex justify-between">
                <div className="flex -space-x-3 -ml-0.5">
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar12} width={24} height={24} alt="Avatar 12" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar13} width={24} height={24} alt="Avatar 13" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar14} width={24} height={24} alt="Avatar 14" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar15} width={24} height={24} alt="Avatar 15" />
                </div>
                <button className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">Like</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path className="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
                  </svg>
                  <span>4.4K</span>
                </button>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
            <div className="flex flex-col p-5 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <Image src={IntegrationImg05} width={40} height={40} alt="Icon 05" />
                  <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
                </div>
                <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href="/integrations/single-post">GitLab</Link>
              </div>
              <div className="grow mb-4">
                <div className="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div>
              </div>
              <div className="flex justify-between">
                <div className="flex -space-x-3 -ml-0.5">
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar16} width={24} height={24} alt="Avatar 16" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar17} width={24} height={24} alt="Avatar 17" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar18} width={24} height={24} alt="Avatar 18" />
                  <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar19} width={24} height={24} alt="Avatar 19" />
                </div>
                <button className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">Like</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path className="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
                  </svg>
                  <span>3.4K</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex py-8 justify-end">
        <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
          <span className="sr-only">Previous</span>
          <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
          </svg>
        </button>
        <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
          <span className="sr-only">Next</span>
          <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
          </svg>
        </button>
      </div>

    </>
  )
}