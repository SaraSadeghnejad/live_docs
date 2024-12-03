import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import { Loader } from 'lucide-react'
import React from 'react'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
      {children}
      </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom