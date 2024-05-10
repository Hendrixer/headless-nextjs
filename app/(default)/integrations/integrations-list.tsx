import Link from 'next/link'
import Image from 'next/image'
import Star from '@/public/images/star.svg'
import IntegrationsImg01 from '@/public/images/integrations-01.svg'
import IntegrationsImg02 from '@/public/images/integrations-02.svg'
import IntegrationsImg03 from '@/public/images/integrations-03.svg'
import IntegrationsImg04 from '@/public/images/integrations-04.svg'
import IntegrationsImg05 from '@/public/images/integrations-05.svg'
import IntegrationsImg06 from '@/public/images/integrations-06.svg'
import IntegrationsImg07 from '@/public/images/integrations-07.svg'
import IntegrationsImg08 from '@/public/images/integrations-08.svg'
import IntegrationsImg09 from '@/public/images/integrations-09.svg'
import IntegrationsImg10 from '@/public/images/integrations-10.svg'
import IntegrationsImg11 from '@/public/images/integrations-11.svg'
import IntegrationsImg12 from '@/public/images/integrations-12.svg'
import IntegrationsImg13 from '@/public/images/integrations-13.svg'
import IntegrationsImg14 from '@/public/images/integrations-14.svg'
import IntegrationsImg15 from '@/public/images/integrations-15.svg'
import IntegrationsImg16 from '@/public/images/integrations-16.svg'
import IntegrationsImg17 from '@/public/images/integrations-17.svg'
import IntegrationsImg18 from '@/public/images/integrations-18.svg'
import IntegrationsImg19 from '@/public/images/integrations-19.svg'
import IntegrationsImg20 from '@/public/images/integrations-20.svg'
import IntegrationsImg21 from '@/public/images/integrations-21.svg'
import IntegrationsImg22 from '@/public/images/integrations-22.svg'
import IntegrationsImg23 from '@/public/images/integrations-23.svg'
import IntegrationsImg24 from '@/public/images/integrations-24.svg'

export default function IntegrationsList() {

  const items = [
    {
      img: IntegrationsImg06,
      name: 'Vercel',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Engineering'
    },
    {
      img: IntegrationsImg07,
      name: 'Sentry',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: false,
      category: 'Engineering'
    },
    {
      img: IntegrationsImg04,
      name: 'Jira',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Engineering'
    },
    {
      img: IntegrationsImg08,
      name: 'GitHub',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Engineering'
    },
    {
      img: IntegrationsImg05,
      name: 'GitLab',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Engineering'
    },
    {
      img: IntegrationsImg01,
      name: 'Retool',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Engineering'
    },
    {
      img: IntegrationsImg02,
      name: 'Zapier',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'No-code'
    },
    {
      img: IntegrationsImg03,
      name: 'Airtable',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'No-code'
    },
    {
      img: IntegrationsImg09,
      name: 'Framer',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'No-code'
    },
    {
      img: IntegrationsImg10,
      name: 'Jotform',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: false,
      category: 'No-code'
    },
    {
      img: IntegrationsImg11,
      name: 'Webflow',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'No-code'
    },
    {
      img: IntegrationsImg12,
      name: 'Coda',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: false,
      category: 'No-code'
    },
    {
      img: IntegrationsImg13,
      name: 'Asana',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Collaboration'
    },
    {
      img: IntegrationsImg14,
      name: 'Myngo',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Collaboration'
    },
    {
      img: IntegrationsImg15,
      name: 'Bonsai',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Collaboration'
    },
    {
      img: IntegrationsImg16,
      name: 'Decipad',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Collaboration'
    },
    {
      img: IntegrationsImg17,
      name: 'Miro',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Collaboration'
    },
    {
      img: IntegrationsImg18,
      name: 'Popform',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Collaboration'
    },
    {
      img: IntegrationsImg19,
      name: 'Linear',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Productivity'
    },
    {
      img: IntegrationsImg20,
      name: 'Microsoft',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Productivity'
    },
    {
      img: IntegrationsImg21,
      name: 'Google Drive',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Productivity'
    },
    {
      img: IntegrationsImg22,
      name: 'InVision',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Productivity'
    },
    {
      img: IntegrationsImg23,
      name: 'WeTransfer',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: false,
      category: 'Productivity'
    },
    {
      img: IntegrationsImg24,
      name: 'Hotjar',
      description: 'Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.',
      link: '/integrations/single-post',
      featured: true,
      category: 'Productivity'
    }
  ]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="pb-12 md:pb-20">
          {/* Tobpabr */}
          <div className="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar">
            {/* Links */}
            <ul className="flex flex-nowrap text-sm font-medium space-x-8">
              <li>
                <a className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#engineering">
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m7.7 7.3-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4ZM8 12h7v2H8z" />
                  </svg>
                  <span>Engineering</span>
                </a>
              </li>
              <li>
                <a className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#nocode">
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M10 15c-.4 0-.8-.3-.9-.7L5.8 4.6 3.9 8.4c-.2.4-.5.6-.9.6H0V7h2.4l2.7-5.4c.2-.4.6-.6 1-.6s.7.3.9.7l3.2 9.7 1.9-3.8c.2-.4.5-.6.9-.6h3v2h-2.4l-2.7 5.4c-.2.4-.5.6-.9.6Z" />
                  </svg>
                  <span>No-code</span>
                </a>
              </li>
              <li>
                <a className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#collaboration">
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M7.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 15.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 10.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
                  </svg>
                  <span>Collaboration</span>
                </a>
              </li>
              <li>
                <a className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#productivity">
                  <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>Productivity</span>
                </a>
              </li>
            </ul>
            <div>
              <form className="relative flex items-center">
                <input className="form-input pl-10 bg-transparent rounded-none focus:border-transparent focus:border-b-slate-700 lg:w-9 lg:focus:w-[200px] transition-[width]" type="text" id="search" aria-label="Search…" placeholder="Search…" autoComplete="off" />
                <div className="absolute inset-0 w-9 flex items-center justify-center pointer-events-none">
                  <svg className="absolute fill-slate-50 mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z" />
                  </svg>
                </div>
              </form>
            </div>
          </div>

          {/* Cards */}
          <div>
            {/* Section #1 */}
            <div className="mt-12 md:mt-16">
              <h3 id="engineering" className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Engineering</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {items.map((item, index) => (
                  item.category === 'Engineering' && (
                    <IntegrationCard item={item} index={index} />
                  )
                ))}

              </div>
            </div>
            {/* Section #2 */}
            <div className="mt-12 md:mt-16">
              <h3 id="nocode" className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">No-code</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {items.map((item, index) => (
                  item.category === 'No-code' && (
                    <IntegrationCard item={item} index={index} />
                  )
                ))}

              </div>
            </div>
            {/* Section #3 */}
            <div className="mt-12 md:mt-16">
              <h3 id="collaboration" className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Collaboration</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {items.map((item, index) => (
                  item.category === 'Collaboration' && (
                    <IntegrationCard item={item} index={index} />
                  )
                ))}

              </div>
            </div>
            {/* Section #4 */}
            <div className="mt-12 md:mt-16">
              <h3 id="productivity" className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Productivity</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {items.map((item, index) => (
                  item.category === 'Productivity' && (
                    <IntegrationCard item={item} index={index} />
                  )
                ))}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

type CardProps = {
  item: {
    category: string
    img: string
    name: string
    featured: boolean
    link: string
    description: string
  }
  index: number
}

export function IntegrationCard({ item, index }: CardProps) {
  return (
    <div key={index} className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={item.img} width="40" height="40" alt={item.name} />
            {item.featured && (
              <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
            )}
          </div>
          <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href={item.link}>{item.name}</Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400">{item.description}</div>
        </div>
      </div>
    </div>
  )
}