'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import useSWR from "swr"

interface PageProps {
    params: {
        categs: string
    }
}
interface arrTypes {
    _id: string,
    categ: string,
    url: string,
    heading: string,
    para: string,
    blogBy: string,
    blogByImg: string
}
const page = ({ params }: PageProps) => {
    // console.log(params.categs);

    const arr = [
        {
            categ: 'illustrations',
            url: '/images/illustration.png',
            heading: "Minimul Single Product",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            categ: 'illustrations',
            heading: "Minimul Single Product",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: '/images/illustration.png',
        },
        {
            categ: 'websites',
            heading: "Minimul Single Product",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: '/images/illustration.png',
        },
        {
            categ: 'websites',
            heading: "Minimul Single Product",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: '/images/illustration.png',
        },
        {
            categ: 'websites',
            heading: "Minimul Single Product",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: '/images/illustration.png',
        },
        {
            categ: 'application',
            heading: "Minimul Single Product",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: '/images/illustration.png',
        },
        {
            categ: 'application',
            heading: "Minimul Single Product",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: '/images/illustration.png',
        }
    ]
    const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
    const thePackage = useSWR('/api/projects/' + params.categs, fetcher)
    console.log(thePackage);

    if (thePackage.isLoading) return <h1 className='flex items-center font-bold tracking-widest justify-center'>Loading...</h1>
    if (thePackage.data?.length < 1) return <div className='flex flex-col gap-5 my-10'>
        <h1 className='font-bold text-6xl'>Our Works</h1>
        <h1 className='flex items-center font-bold tracking-widest justify-center'>Empty!</h1>
    </div>

    return (
        <div className='flex flex-col gap-5 my-10'>
            <h1 className='font-bold text-6xl'>Our Works</h1>
            <h3 className='font-bold text-xl'>{params.categs.charAt(0).toUpperCase()}{params.categs.slice(1,)}</h3>
            <div className='  flex flex-col  gap-20'>
                {
                    thePackage.data?.map((d: arrTypes, k: number) => {
                        console.log(thePackage.isLoading);

                        return (
                            <div key={d._id} className={`flex max-sm:flex-col gap-10 ${k % 2 == 0 && 'flex-row-reverse'}`}>
                                <div className='sm:flex-1 relative h-80'>
                                    <Image src={d.url} alt={d.heading + 'img'} fill={true} />
                                </div>

                                <div className='flex-1 flex flex-col justify-center gap-6'>
                                    <h1 className='text-3xl font-bold'>{d.heading}</h1>
                                    <p className='text-sm'>{d.para}</p>
                                    <div className=' flex items-center gap-3'>
                                        <Image src={d.blogByImg} className='h-6 w-6 rounded-full' alt='img' height={150} width={150} />
                                        <label>{d.blogBy}</label>
                                    </div>
                                    <div>
                                        <button className=' rounded-lg bg-green-500 font-semibold py-3 px-5 ' onClick={()=>{window.open('https://www.linkedin.com/in/aadnanshahh2001/')}}>Checkout</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



            </div>

        </div>
    )
}

export default page