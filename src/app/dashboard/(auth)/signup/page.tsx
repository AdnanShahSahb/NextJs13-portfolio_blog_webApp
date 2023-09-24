'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
    const [errr, setErrr] = useState(false)


    const handleSignup = async (e: any) => {

        e.preventDefault();

        const un = e.target[0].value
        const em = e.target[1].value
        const pd = e.target[2].value

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: un, email: em, password: pd
                })

            })

            if (res.status === 201) {
                alert('Account created')
                routing.push('/auth/signin')
            }

            console.log(res);

            if (res.status === 500) {
                setErrr(true)
            }

        }
        catch (err) {
            console.log(err);
            setErrr(true)
        }

    }

    const routing = useRouter()
    const session = useSession()

    if (session.status == 'loading')
        <h1 className='flex items-center font-bold tracking-widest justify-center'>Loading...</h1>

    if (session.status == 'authenticated')
        routing.push('/dashboard')

    if (session.status == 'unauthenticated')
        return (
            <div className='flex items-center justify-center' >
                <form className='sm:w-1/4  flex flex-col gap-4 ' onSubmit={handleSignup}>
                    <input className='h-12 p-4 bg-transparent rounded-md font-semibold border-2 border-gray-300' placeholder='username' required />
                    <input type='email' className='h-12 p-4 bg-transparent rounded-md font-semibold border-2 border-gray-300' placeholder='email' required />
                    <input type='password' className='h-12 p-4 bg-transparent rounded-md font-semibold border-2 border-gray-300' placeholder='password' required />
                    {/* <div className='h-12 p-4 '> */}
                    <button className='bg-green-500 h-12 p-4 rounded-md flex items-center font-bold justify-center'>Register</button>
                    {/* </div> */}
                    {/* <div className='h-12 p-4'> */}
                    <Link className='text-center font-light' href={'/dashboard/signin'}>Login with an existing account</Link>
                    {/* </div> */}
                    {errr && "Error occured in the form"}
                </form>

            </div>
        )
}

export default Page