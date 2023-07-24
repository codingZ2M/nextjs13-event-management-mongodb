
"use client";

import { SessionProvider } from 'next-auth/react'

const UserSessionProvider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default UserSessionProvider 