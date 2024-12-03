'use client';

import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import { LiveblocksProvider, ClientSideSuspense } from '@liveblocks/react';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode}) => {
  const { user: clerkUser } = useUser();

  return (
    <LiveblocksProvider>
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider