import CollaborativeRoom from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { getDocument } from '@/lib/actions/room.actions'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Document = async ({params:{ id }}:SearchParamProps) => {
  const clerkUser= await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const room=await getDocument({
    roomId:id,
    userId:clerkUser.emailAddresses[0].emailAddress,
  });

  if(!room) redirect('/');

  // TODO: assess the permissions

  return (
    <main className='flex w-full flex-col items-center'>
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata} users={[]} currentUserType={'creator'}      />
    </main>
    // remove users and currentUserType as props in this component
  )
}

export default Document
