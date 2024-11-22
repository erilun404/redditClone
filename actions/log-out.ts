'use server'

import {redirect} from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export const logOut = () => {
    const supabase = createClient()
    console.log("attempting to log out")
    supabase.auth.signOut()
    console.log("succes logging out")
    redirect('/')
}