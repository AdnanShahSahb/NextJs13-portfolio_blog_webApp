"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className=' '>
            <div className=' h-56 w-full relative'>
                <Image fill={true} src='/images/websites.jpg' alt='asdf' />
                <div className='absolute bg-green-500 p-1 left-5 bottom-5 rounded-lg'>
                    <h1 className=' font-bold text-lg'>Digital Storytellers</h1>
                    <p className=' font-bold text-md'>Handcrafting award winning digital experiences</p>
                </div>
            </div>
            <div className='flex max-sm:flex-col max-sm:gap-1 gap-24 text-sm text-justify leading-tight '>
                <div className='flex flex-col gap-3  my-7'>
                    <h1 className=' font-bold text-2xl'>Who Are We?</h1>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 my-7'>
                    <h1 className=' font-bold text-2xl'>What We Do?</h1>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>- Creative Illustrations</p>
                        <p>- Dynamic Websites</p>
                        <p>- Fast and Handy Mobiles Apps</p>
                    </div>
                    <div className='mt-4'>
                        <Link href={'/contact'} className=' rounded-lg bg-green-500 py-3  px-5 '>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About