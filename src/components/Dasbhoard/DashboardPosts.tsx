'use client'
import useSWR from 'swr'
import EachPost from './EachPost'
import EachProj from './EachProj'
import PostPostingForm from './PostPostingForm'
import React, { useEffect, useRef, useState } from 'react'
import ProjPostingForm from './ProjPostingForm'

interface GetDataObj {
    _id: String
    url: String
    heading: String
    para: String
    desc: String
    blogBy: String
    blogByImg: String
    createdAt: String
    updatedAt: String
    __v: String
}

interface PageProps {

    heading1: String,
    heading2: String,
    btnName: String,
}


const DashboardPosts = ({ heading1, heading2, btnName }: PageProps) => {
    const formRef = useRef<HTMLDivElement>(null)
    const [formHeight, setformHeight] = useState(10)
    useEffect(() => {
        if (formRef.current) {
            const height = window.getComputedStyle(formRef.current).getPropertyValue('height');
            // console.log(parseInt(height));
            setformHeight(parseInt(height))
        }
    }, [])

    // console.log(theData);
    return (
        <div className={`flex max-sm:flex-col gap-10 ${btnName == 'Upload' && 'flex-row-reverse'}`}>
            <div className='flex flex-col gap-10 ' style={{ flex: '3 5' }} >
                <h1 className='font-bold text-3xl'>{heading1}</h1>
                <div id='dashboardPostDivId' className='overflow-y-scroll overflow-x-hidden  flex flex-col gap-10  ' style={{ maxHeight: `${formHeight}px` }}>
                    {btnName === 'Upload' ?
                        <EachProj />
                        :
                        <EachPost />
                        }
                </div>
            </div>

            <div className='flex flex-col gap-10 ' style={{ flex: '2 5' }} >
                <h1 className='font-bold text-3xl'>{heading2}</h1>
                <div ref={formRef as any}>
                    {btnName === 'Upload' ?
                        <ProjPostingForm />
                        :
                        <PostPostingForm />
                        }
                </div>
            </div>
        </div >
    )
}

export default DashboardPosts