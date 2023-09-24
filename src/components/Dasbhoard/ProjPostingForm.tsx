'use client'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const ProjPostingForm = () => {
    const [loading, setloading] = useState(false)
    const session = useSession()
    const handleInputForProjs = async (e: any) => {
        e.preventDefault();
        setloading(true)


        const category = e.target[0].value
        const heading = e.target[1].value
        const para = e.target[2].value
        const url = e.target[3].value
        const desc = e.target[4].value
        const blogBy = session.data?.user?.email
        const blogByImg = session.data?.user?.image || 'https://images.pexels.com/photos/18054620/pexels-photo-18054620/free-photo-of-portrait-of-a-boy.jpeg?auto=compress&cs=tinysrgb&w=600'

        try {
            const res = await fetch(`/api/projects`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    category, heading, para, url, desc, blogBy, blogByImg
                })
            }

            )

            console.log(res);
            if (res.status === 201) {
                alert('Project Added')
                setloading(false)
                e.target.reset();

            }

            if (res.status === 500) {
                alert('Project added failed, try again')
                setloading(false)
            }

        }
        catch (err) {
            console.log(err);
            alert('Project added failed, try again')
            setloading(false)

        }

    }
    // console.log(mutate);
    return (
        <form className='flex flex-col gap-6 ' onSubmit={handleInputForProjs}>

            <select id="categ" name="categ" defaultValue='Illustrations' className="h-10 p-2 bg-transparent cursor-pointer border-gray-300 border-[1px]" required>
                <option value="" disabled >Category</option>
                <option value="Illustrations" >Illustrations</option>
                <option value="Websites">Websites</option>
                <option value="Application">Application</option>
            </select>
            <input className='h-10 p-2 bg-transparent border-gray-300 border-[1px] ' placeholder={'Title'} required />
            <input className='h-10 p-2 bg-transparent border-gray-300 border-[1px] ' placeholder={'Intro'} required />
            <input className='h-10 p-2 bg-transparent border-gray-300 border-[1px] ' type='url' placeholder={'Image Url'} required />
            <textarea className='p-2 bg-transparent border-gray-300 border-[1px]' placeholder='Description...' rows={5} required></textarea>
            <button className='bg-green-500 h-10 font-bold' >Upload</button>
        </form>
    )
}

export default ProjPostingForm