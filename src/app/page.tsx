import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 '>
      <div className='  flex flex-1  flex-col gap-10'>
        <h1 className=' text-5xl  font-bold '>Better design for your digital products.</h1>
        <p className=' font-normal'>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
        <Link href={'/portfolio'} className='p-4 rounded-lg bg-green-500 font-semibold w-40'>See Our Works</Link>
      </div>
      <div className='flex flex-1 '>
        {/* <div className=' h-[500px] w-full object-cover  relative'> */}
          <Image id='homeImage' alt='ImageHero' className=' object-cover mx-auto ' src='/images/hero.png' width={350} height={350} />
        {/* </div> */}
      </div>
    </div>
  )
}

export default page