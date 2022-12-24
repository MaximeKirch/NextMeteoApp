import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = {children: React.ReactNode}

export default function Layout({children}: Props) {
  return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}
