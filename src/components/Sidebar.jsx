'use client'
import Link from 'next/link'
import React, { useContext, useRef } from 'react'
import DarkModeToggle from './DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import { ContextProvider } from '@/context/ContextProvider'

const Sidebar = ({ burgerState }) => {
    const session = useSession()

    const usingContext = useContext(ContextProvider)
    const sideBarRef = useRef('')
    const crossRef = useRef('')
    return (
        <div ref={sideBarRef} className={`fixed  left-0 right-0 top-0  overflow-hidden w-full ${burgerState ? ' h-0' : ' h-5/6'} duration-300 z-30 ${usingContext.mode == 'dark' ? 'bg-black' : 'bg-gray-300'} `}>
            {/* <label ref={crossRef} className='absolute z-40 duratino-300 top-0 right-0 p-3 cursor-pointer transform scale-x-150 font-semibold' onClick={() => { sideBarRef.current.style.height = '0px'; crossRef.current.style.opacity = '0' }} >X</label> */}
            <div className=' flex flex-col gap-10 justify-between items-center text-center'>
                <Link href={"/"} className='font-bold pt-10'>Adnan Shah</Link>
                <DarkModeToggle />
                <div className=' flex flex-col gap-4'>
                    {["Home", "Portfolio", "Blog", "About", "Contact"].map((d, k) => {
                        return (
                            <Link key={k} className='' href={
                                k != 0 ? '/' + d.toLowerCase() : '/'
                            }>{d}</Link>
                        )
                    })}

                    {session.status == 'authenticated' &&
                        <Link href={'/dashboard'}>
                            Dashboard
                        </Link>
                    }

                    {session.status == 'unauthenticated' &&
                        <>
                            <Link href={`/dashboard/signin`}>
                                Login
                            </Link>
                            <Link href={`/dashboard/signup`}>
                                Register
                            </Link>
                        </>
                    }
                    {session.status == 'authenticated' &&
                        <label className='cursor-pointer' onClick={signOut}>
                            Logout
                        </label>
                    }
                </div>
            </div >
        </div>
    )
}

export default Sidebar