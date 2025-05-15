import React from 'react'
import { metadata } from './metadata'
import RootLayoutClient from './RootLayoutClient'

export { metadata }

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayoutClient>{children}</RootLayoutClient>
}
