import Animate from '@/components/ui/animate'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <>
      <Animate/>
      <Header />
      
      <main className="grow">

        {children}

      </main>

      <Footer />
    </>
  )
}
