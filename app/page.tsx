import Header from '@/components/Header'
import { Notifications } from '@/components/Notifications'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <Header className="sticky left-0 top-0">
    <div className="flex items-center gap-2 lg:gap-4">
      <Notifications />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </Header>
  )
}

export default HomePage