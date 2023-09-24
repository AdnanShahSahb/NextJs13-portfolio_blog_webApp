import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className=' h-16 mt-10 items-center flex justify-between '>
            <p className='py-3'>
                @2023 Adnan Shah. All rights reserved for 
                <Link href={'https://www.youtube.com/watch?v=VE8BkImUciY'} target='_blank' className=' ml-1 italic underline text-sm'>LAMAMIA</Link>
            </p>
            <div className='flex gap-[10px] '>
                {["1", "2", "3", "4"].map((d,k) => {
                    return (
                        <Image key={k} src={"/images/" + d + ".png"} alt='footerImg' height={15} width={15} className=' rounded-md opacity-60 hover:opacity-100 cursor-pointer' />
                    )
                })}
            </div>
        </div>
    )
}

export default Footer