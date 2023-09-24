import ButtonSend from '@/components/ButtonSend'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div className=' flex flex-col gap-20'>
            <h1 className='text-4xl text-center font-bold'>Let&apos;s Keep in Touch</h1>
            <div className='flex max-sm:flex-col gap-20'>
            <div className='flex-1  '>
                    <Image src='/images/contact.png' id='imageContact' alt='contactImg' height={400} width={400} />
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <input className='p-3  bg-transparent text-gray-300 border-gray-300 rounded-md border-2' placeholder='name' />
                    <input className='p-3  bg-transparent text-gray-300 border-gray-300 rounded-md border-2' placeholder='email' />
                    <textarea rows={7} className='p-3  bg-transparent text-gray-300 border-gray-300 rounded-md border-2' placeholder='message'></textarea>
                    <div>
                        <ButtonSend />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact