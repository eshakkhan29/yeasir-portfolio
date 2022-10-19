import Head from 'next/head'
import AboutMe from '../src/Components/Home/AboutMe'
import HomeBanner from '../src/Components/Home/Banner'
import ContactMe from '../src/Components/Home/ContactMe'
import MyPortfolio from '../src/Components/Home/MyPortfolio'
import Skills from '../src/Components/Home/Skills'
import WhatIDo from '../src/Components/Home/WhatIDo'
import Navbar from '../src/Components/Navbar'

export default function Home() {
  return (
    <div className='bg-[#0e1630]' >
      <Head>
        <title>Yeasir Arafat -Full Stack developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-8/12 mx-auto'>
        <Navbar/>
        <HomeBanner/>
        <WhatIDo/>
        <AboutMe/>
        <MyPortfolio/>
        <Skills/>
        <ContactMe/>
      </div>
    </div>
  )
}
