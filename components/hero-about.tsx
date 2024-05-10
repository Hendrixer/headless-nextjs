import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/page-illustration.svg'
import AboutIllustration from '@/public/images/about-illustration.svg'
import Icon from '@/public/images/about-icon.svg'

export default function HeroAbout() {
  return (
  <section className="relative">

    {/* Radial gradient */}
    <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
    </div>

    {/* Particles animation */}
    <Particles className="absolute inset-0 h-96 -z-10" quantity={10} />

    {/* Illustration */}
    <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
      <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-10 md:pt-40">

        {/* Hero content */}
        <div className="text-center">
          <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">The folks behind the product</div>
          <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Turning security into innovation</h1>
          {/* Rings illustration */}
          <div className="inline-flex items-center justify-center relative">
            {/* Particles animation */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <canvas data-particle-animation data-particle-quantity="10"></canvas>
            </div>
            <div className="inline-flex [mask-image:_radial-gradient(circle_at_bottom,transparent_15%,black_70%)]">
              <Image src={AboutIllustration} width={446} height={446} alt="About illustration" />
            </div>
            <Image className="absolute mt-[30%] drop-shadow-lg animate-float" src={Icon} width={72} height={72} alt="About icon" />
          </div>
        </div>

      </div>
    </div>

  </section>
  )
}