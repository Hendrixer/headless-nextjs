import Image from 'next/image'
import Illustration from '@/public/images/pricing-illustration.svg'
import IllustrationTop from '@/public/images/pricing-illustration-top.svg'
import Icon01 from '@/public/images/pricing-icon-01.svg'
import Icon02 from '@/public/images/pricing-icon-02.svg'
import Icon03 from '@/public/images/pricing-icon-03.svg'
import Icon04 from '@/public/images/pricing-icon-04.svg'
import Icon05 from '@/public/images/pricing-icon-05.svg'
import Icon06 from '@/public/images/pricing-icon-06.svg'
import Icon07 from '@/public/images/pricing-icon-07.svg'
import Particles from '@/components/particles'

export default function Features05() {
  return (
    <section className="relative">

      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-64 h-64 -mt-24">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Stop overpaying for software</h2>
            <p className="text-lg text-slate-400">There are many variations available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>

          {/* Rings illustration */}
          <div className="text-center pb-8">
            <div className="inline-flex items-center justify-center relative">
              {/* Particles animation */}
              <Particles className="absolute inset-0 -z-10" quantity={10} />
              <div className="inline-flex">
                <Image src={Illustration} width="334" height="334" alt="Features illustration" />
              </div>
              <Image className="absolute -mt-[40%]" src={IllustrationTop} width="396" height="328" alt="Features illustration top" aria-hidden="true" />
              <div className="absolute w-[200%] flex items-center justify-center space-x-5">
                <div className="-rotate-[4deg]">
                  <Image className="w-11 h-11 drop-shadow-lg animate-[float_2.6s_ease-in-out_infinite] opacity-10" src={Icon01} width={80} height={80} alt="Pricing icon 01" />
                </div>
                <div className="rotate-[4deg]">
                  <Image className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25" src={Icon02} width={80} height={80} alt="Pricing icon 02" />
                </div>
                <div className="-rotate-[4deg]">
                  <Image className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60" src={Icon03} width={80} height={80} alt="Pricing icon 03" />
                </div>
                <Image className="drop-shadow-lg animate-float" src={Icon04} width={80} height={80} alt="Pricing icon 04" />
                <div className="rotate-[4deg]">
                  <Image className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60" src={Icon05} width={80} height={80} alt="Pricing icon 05" />
                </div>
                <div className="-rotate-[4deg]">
                  <Image className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25" src={Icon06} width={80} height={80} alt="Pricing icon 06" />
                </div>
                <div className="rotate-[4deg]">
                  <Image className="w-11 h-11 drop-shadow-lg animate-[float_2.6ås_ease-in-out_infinite] opacity-10" src={Icon07} width={80} height={80} alt="Pricing icon 07" />
                </div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card #1 */}
            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
              <div className="flex items-center space-x-4 p-4 h-full">
                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-purple-500" fillOpacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
                  <path className="fill-purple-400" fillRule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
                </svg>
                <p className="text-sm text-slate-400">
                  Purpose-built for company that requires more than a <strong className="text-slate-300 font-medium">simple plan</strong> with security infrastructure.
                </p>
              </div>
            </div>
            {/* Card #2 */}
            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
              <div className="flex items-center space-x-4 p-4 h-full">
                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-purple-500" fillOpacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
                  <path className="fill-purple-400" fillRule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
                </svg>
                <p className="text-sm text-slate-400">
                  AI-powered to <strong className="text-slate-300 font-medium">remove the burdens</strong> of tedious knowledge management and security tasks.
                </p>
              </div>
            </div>
            {/* Card #3 */}
            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
              <div className="flex items-center space-x-4 p-4 h-full">
                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-purple-500" fillOpacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
                  <path className="fill-purple-400" fillRule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
                </svg>
                <p className="text-sm text-slate-400">
                  There's no prioritized support in Stellar. You can use email or live chat and you will hear back in a <strong className="text-slate-300 font-medium">couple of hours</strong>.
                </p>
              </div>
            </div>
            {/* Card #4 */}
            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
              <div className="flex items-center space-x-4 p-4 h-full">
                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-purple-500" fillOpacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
                  <path className="fill-purple-400" fillRule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
                </svg>
                <p className="text-sm text-slate-400">
                  Comprehensive <strong className="text-slate-300 font-medium">developer docs</strong> and a centralized support center packed many resources.
                </p>
              </div>
            </div>
            {/* Card #5 */}
            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
              <div className="flex items-center space-x-4 p-4 h-full">
                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-purple-500" fillOpacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
                  <path className="fill-purple-400" fillRule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
                </svg>
                <p className="text-sm text-slate-400">
                  No upcharges—and we'd never upsell you to a higher plan or a <strong className="text-slate-300 font-medium">dedicated IP</strong> to improve deliverability.
                </p>
              </div>
            </div>
            {/* Card #6 */}
            <div className="bg-gradient-to-tr from-slate-800/50 to-slate-800/10 rounded-3xl border border-slate-800">
              <div className="flex items-center space-x-4 p-4 h-full">
                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-purple-500" fillOpacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
                  <path className="fill-purple-400" fillRule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
                </svg>
                <p className="text-sm text-slate-400">
                  Tool training, dedicated resources, and <strong className="text-slate-300 font-medium">regular updates</strong> are available for both small and large teams.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}