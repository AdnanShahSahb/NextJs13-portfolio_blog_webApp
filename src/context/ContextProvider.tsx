'use client'

import { createContext, useState } from "react"


export const ContextProvider = createContext({})


const ContextWrapper = ({ children }: any) => {

    const [mode, setMode] = useState(localStorage.getItem('mode'))

    const changeThemeFunc = () => {
        if (mode == 'dark') {
            setMode('light')
            localStorage.setItem('mode', 'light')
        }
        else {
            setMode('dark')
            localStorage.setItem('mode', 'dark')
        }
    }

    return (
        <ContextProvider.Provider value={{ changeThemeFunc, mode }}>
            <div className={` duration-500 ${mode == 'dark' ? ' bg-black text-gray-300' : ' bg-gray-100 text-gray-700'}`}>
                {children}
            </div>
        </ContextProvider.Provider >
    )
}
export default ContextWrapper;