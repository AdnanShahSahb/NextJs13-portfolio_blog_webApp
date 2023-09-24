'use client'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const PostPostingForm = () => {

    const session = useSession()

    const handleInputForPosts = async (e: any) => {
        e.preventDefault();

        const heading = e.target[0].value
        const para = e.target[1].value
        const url = e.target[2].value
        const desc = e.target[3].value
        const blogBy = session.data?.user?.email
        const blogByImg = session.data?.user?.image || 'https://images.pexels.com/photos/18054620/pexels-photo-18054620/free-photo-of-portrait-of-a-boy.jpeg?auto=compress&cs=tinysrgb&w=600'
        // console.log(session);

        try {
            const res = await fetch(`/api/posts`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    heading, para, url, desc, blogBy, blogByImg
                })
            }
            )

            console.log(res);
            if (res.status === 201) {
                alert('posted')
                e.target.reset();
            }

            if (res.status === 500) {
                alert('not posted, try again')
            }

        }
        catch (err) {
            console.log(err);
            alert('not posted, try again')
        }

    }

    // console.log(mutate);
    return (
        <form className='flex flex-col gap-6 ' onSubmit={handleInputForPosts}>

            <input className='h-10 p-2 bg-transparent border-gray-300 border-[1px] ' placeholder={'Title'} />
            <input className='h-10 p-2 bg-transparent border-gray-300 border-[1px] ' placeholder={'Intro'} />
            <input className='h-10 p-2 bg-transparent border-gray-300 border-[1px] ' type='url' placeholder={'Image Url'} />
            <textarea className='p-2 bg-transparent border-gray-300 border-[1px]' placeholder='Description...' rows={5}></textarea>
            <button className='bg-green-500 h-10 font-bold' >Post</button>
        </form>
    )
}

export default PostPostingForm