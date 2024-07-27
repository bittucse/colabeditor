import CollaborativeRoom from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <main className='flex w-full flex-col items-center'>
      <CollaborativeRoom/>
    </main>
  )
}

export default Document
