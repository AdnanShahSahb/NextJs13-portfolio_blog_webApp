import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-5 my-20'>
            <h1 className='font-bold text-6xl'>Our Works</h1>
            <h3 className='font-bold text-xl'>Choose a gallery</h3>
            <div className=' flex max-sm:flex-col gap-10 sm:pr-20'>
                {['Illustrations', "Websites", "Application"].map((d,k) => {
                    return (
                        <Link key={k} href={`/portfolio/${d.toLowerCase()}`} id={`${d}-id`} className='text-white border sm:flex-1 hover:text-green-300  justify-end p-3 font-bold text-2xl h-80 border-10 flex items-end ' >{d}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default page