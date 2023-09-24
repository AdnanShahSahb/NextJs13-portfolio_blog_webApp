'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const ButtonGoogleSignin = () => {
    return (
        <button onClick={() => { signIn('google') }} className='bg-red-700  h-12 rounded-md p-4 flex items-center font-bold justify-center'>Login with Google</button>
    )
}

export default ButtonGoogleSignin