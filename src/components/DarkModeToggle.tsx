'use client'

import { ContextProvider } from '@/context/ContextProvider'
import React, { useContext, useRef, useState } from 'react'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"

interface ContextProps {
    changeThemeFunc: () => void
    mode: string
}

const DarkModeToggle = () => {
    const usingContext = useContext(ContextProvider) as ContextProps
    const toggleRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={toggleRef as any} onClick={() => { usingContext.changeThemeFunc() }} className={` duration-300 cursor-pointer border-2 rounded-full flex ${usingContext.mode=='dark' ? 'flex-row-reverse':'flex'}`}>
            <div className='h-6 w-6 rounded-full flex items-center justify-center'>{usingContext.mode == 'dark' ? <MdOutlineLightMode /> : <MdDarkMode style={{ fill: 'black' }} />}</div>
            <div className='h-6 w-6 rounded-full bg-black flex items-center justify-center'>
                <div className='h-5 w-5 rounded-full bg-green-400 flex items-center justify-center'></div>
            </div>
        </div >
    )
}

export default DarkModeToggle