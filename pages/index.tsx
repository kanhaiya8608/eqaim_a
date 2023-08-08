import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
    <h1><Link href="/roadmap">Roadmap</Link></h1>
   </div>
  )
}
