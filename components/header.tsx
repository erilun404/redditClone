'use client'

import Link from "next/link"
import { LogInButton } from "./log-in-button"
import { LogOutButton } from "./log-out-button"
 
export const Header = () => {
    return (
        <header className='h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between'>
            <Link href="/" >Reddit header</Link>
            <LogOutButton />
            <LogInButton/>
        </header>
    )
}
