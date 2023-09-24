'use client'

import ButtonGoogleSignin from '@/components/ButtonGoogleSignin'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
    const routing = useRouter()
    const session = useSession()
    const handleSignin = async (e: any) => {
        e.preventDefault()

        const em = e.target[0].value
        const pd = e.target[1].value

        signIn('credentials', { email: em, password: pd })
        // routing.push('/dashboard')
    }

    if (session.status == 'authenticated')
        routing.push('/dashboard')

    if (session.status == 'loading')
        <h1 className='flex items-center font-bold tracking-widest justify-center'>Loading...</h1>

    if (session.status == 'unauthenticated')
        return (
            <div className='flex flex-col gap-10 items-center justify-center' >

                <div className='flex flex-col gap-2 text-center font-bold'>
                    <h1 className='text-xl'>Welcome Back</h1>
                    <p className='text-sm'>Please sign in to see the dashboard.</p>
                </div>

                <form className='sm:w-1/4  flex flex-col gap-4 ' onSubmit={handleSignin}>
                    <input type='email' className='h-12 p-4 bg-transparent rounded-md  border-2 border-gray-300' placeholder='Password' required />
                    <input type='password' className='h-12 p-4 bg-transparent rounded-md  border-2 border-gray-300' placeholder='Email' required />
                    {/* <div className='h-12 p-4 '> */}
                    <button className='bg-green-500 h-12 rounded-md p-4 flex items-center font-bold justify-center'>Login</button>
                    <ButtonGoogleSignin />
                    {/* </div> */}
                    <label className='text-center'>- OR -</label>
                    {/* <div className='h-12 p-4'> */}
                    <Link className='text-center font-light underline' href={'/dashboard/signin'}>Create New Account</Link>
                    {/* </div> */}
                </form>
            </div>
        )
}

export default Page