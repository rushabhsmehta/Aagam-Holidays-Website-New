import Footer from '@/components/footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import NavbarNew from '@/components/ui/navbar-new'
import NavbarLocations from '@/components/ui/navbar-locations'
import { SeparatorHorizontal } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const font = Urbanist({ subsets: ['latin'] })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aagam Holidays',
  description: 'We plan memorable trips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={font.className}> */}
      {/* <ToastProvider />

        <ModalProvider /> */}

      <NavbarNew />
      <Separator />
      <NavbarLocations />

      {children}
      {/* <Analytics /> */}
      <ScrollToTop />
      <Footer />
      {/* </body> */}
    </html>
  )
}