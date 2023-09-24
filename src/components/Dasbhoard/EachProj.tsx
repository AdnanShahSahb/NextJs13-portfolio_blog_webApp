'use client'
import Image from 'next/image'
import { IoIosRemoveCircleOutline } from "react-icons/io"
import React, { FC, useState } from 'react'
// import connect from '@/utils/db'
import useSWR, { SWRResponse } from "swr"
import Link from 'next/link'
import { useSession } from 'next-auth/react'

interface GetDataObj {
    category: String,
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


const EachProj: FC = () => {
    const session = useSession()
    const [loading, setloading] = useState(false)

    let fetcher, thePackage: SWRResponse<any, any, any>;
    fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
    thePackage = useSWR(`/api/projects?email=${session.data?.user?.email}`, fetcher)

    const handleDelete = async (id: String) => {
        // setloading(true)
        try {
            const responseForDeletingThePost = await fetch('/api/projects/' + id, {
                method: 'DELETE',
            })

            if (responseForDeletingThePost.status === 200) {
                // alert(`${btnName == 'Post' ? 'Post' : 'Project'} deleted successfully`)
                thePackage.mutate()
                console.log(2);
                setloading(false)
            }

            if (responseForDeletingThePost.status === 500) {
                alert('Project not deleted, try again')
                setloading(false)
            }
            thePackage.mutate()
            // console.log(responseForDeletingThePost);
        } catch (error) {
            console.log(error);
            alert('Project not deleted, try again')
            setloading(false)
        }


    }

    // console.log(theData);

    if (thePackage.isLoading) return <h1 className='flex items-center font-bold tracking-widest justify-center'>Loading...</h1>

    return (
        <>
            {loading === true ? <h1>Loading...</h1> :
                thePackage.data?.length < 1 ? <h1 className='text-center tracking-wider text-2xl font-semibold'>No Entry!</h1> :
                    thePackage.data?.map((d: GetDataObj) => {
                        return (
                            <div className='flex gap-10 ' key={d._id as string}>
                                <Link href={`/portfolio/${d.category.toLowerCase()}`} className='h-32 w-32 flex-1 relative'>
                                    <Image src={`${d.url || '/images/1.png'} `} alt='my projs' fill={true} />
                                </Link>
                                <div className='flex flex-1 items-center gap-10 px-1'>
                                    <Link href={`/portfolio`} className='font-bold underline text-xl  leading-tight' > {d.heading}</Link>
                                    <span className='flex  items-center justify-center cursor-pointer' onClick={() => { handleDelete(d._id) }}><IoIosRemoveCircleOutline style={{ scale: '1.5', fill: 'red', cursor: 'pointer', fontWeight: 'bolder' }} /></span>
                                </div>
                            </div>
                        )
                    })
            }

        </>
    )
}

export default EachProj