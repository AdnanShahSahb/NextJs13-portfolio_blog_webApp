'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const SessionProviderComponent = ({ children }: any) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionProviderComponent