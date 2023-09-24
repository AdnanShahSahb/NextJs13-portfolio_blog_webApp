'use client'
import Image from 'next/image'
import { IoIosRemoveCircleOutline } from "react-icons/io"
import React, { FC, useState } from 'react'
// import connect from '@/utils/db'
import useSWR from "swr"
import Link from 'next/link'
import { useSession } from 'next-auth/react'

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


const EachPost: FC = () => {

    const [loading, setloading] = useState(false)

    const session = useSession()
    const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
    const thePackage = useSWR(`/api/posts?email=${session.data?.user?.email}`, fetcher)
    // console.log(thePackage);
    const handleDelete = async (id: String) => {
        // setloading(true)
        try {
            const responseForDeletingThePost = await fetch(`/api/posts/` + id, {
                method: 'DELETE',
            })

            if (responseForDeletingThePost.status === 200) {
                // alert(`${btnName == 'Post' ? 'Post' : 'Project'} deleted successfully`)
                thePackage.mutate()
                console.log(2);
                setloading(false)
            }

            if (responseForDeletingThePost.status === 500) {
                alert(`Post not deleted, try again`)
                setloading(false)
            }
            // console.log(responseForDeletingThePost);
        } catch (error) {
            console.log(error);
            alert('Post not deleted, try again')
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
                                <Link href={`/blog/${d._id}`} className='h-32 w-32 flex-1 relative'>
                                    <Image src={`${d.url || '/images/1.png'} `} alt='my posts' fill={true} />
                                </Link>
                                <div className='flex flex-1 items-center gap-10 px-1'>
                                    <Link href={`/blog/${d._id}`} className='font-bold underline text-xl text-center leading-tight' > {d.heading}</Link>
                                    <span className='flex  items-center justify-center cursor-pointer' onClick={() => { handleDelete(d._id) }}><IoIosRemoveCircleOutline style={{ scale: '1.5', fill: 'red', cursor: 'pointer', fontWeight: 'bolder' }} /></span>
                                </div>
                            </div>
                        )
                    })
            }

        </>
    )
}

export default EachPost