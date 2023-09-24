'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import DarkModeToggle from './DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Sidebar from './Sidebar'

const Navbar = () => {

  const routing = useRouter()

  const session = useSession()

  const upperBarRef = useRef('')
  const middleBarRef = useRef('')
  const lowerBarRef = useRef('')

  const [burgerState, setBurgerState] = useState(true)

  return (
    <>
      <Sidebar burgerState={burgerState} />

      <div className=' flex justify-between items-center h-16'>
        <Link href={"/"} className='font-bold flex'>
          Adnan Shah
          <div className='md:hidden flex max-md:ml-5'>
            <DarkModeToggle />
          </div></Link>
        <div className=' flex  gap-4'>
          <div className='md:block hidden'>
            <DarkModeToggle />
          </div>
          <div className='md:hidden absolute  flex flex-col gap-[6.35px] top-5 z-50 right-5' onClick={() => {
            if (burgerState) {
              upperBarRef.current.style.transform = 'rotate(-45deg)'
              middleBarRef.current.style.opacity = '0'
              lowerBarRef.current.style.transform = 'rotate(45deg)'
              setBurgerState(false)
            }
            else {
              upperBarRef.current.style.transform = 'rotate(0deg)'
              middleBarRef.current.style.opacity = '1'
              lowerBarRef.current.style.transform = 'rotate(0deg)'
              setBurgerState(true)
            }
          }}>
            <div ref={upperBarRef} className='   duration-300 h-[2px] transfrom origin-top-right w-6 bg-gray-300'></div>
            <div ref={middleBarRef} className='h-[2px] w-6  duration-300 bg-gray-300'></div>
            <div ref={lowerBarRef} className='   duration-300 h-[2px] transfrom origin-top-right w-6 bg-gray-300'></div>
          </div>
          {["Home", "Portfolio", "Blog", "About", "Contact"].map((d, k) => {
            return (
              <Link key={k} className='max-md:hidden' href={
                k != 0 ? '/' + d.toLowerCase() : '/'
              }>{d}</Link>
            )
          })}

          {session.status == 'authenticated' &&
            <Link href={'/dashboard'} className='max-md:hidden'>
              Dashboard
            </Link>
          }

          {session.status == 'unauthenticated' &&
            <>
              <Link href={`/dashboard/signin`} className='max-md:hidden'>
                Login
              </Link>
              <Link href={`/dashboard/signup`} className='max-md:hidden'>
                Register
              </Link>
            </>
          }
          {session.status == 'authenticated' &&
            <label className='cursor-pointer max-md:hidden' onClick={signOut} >
              Logout
            </label>
          }
        </div>
      </div >
    </>

  )
}

export default Navbar