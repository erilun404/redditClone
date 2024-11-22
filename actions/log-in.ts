'use server'

import { createClient } from '@/utils/supabase/server'
import { logInSchema } from './schemas'

import {redirect} from 'next/navigation'
import {z} from 'zod'

export const logIn = async (data: z.infer<typeof logInSchema>) => {
    const supabase = createClient() 
    console.log("logging in")
    const parsedData = logInSchema.parse(data)

    const {error} = await supabase.auth.signInWithPassword(parsedData)
    if (error) {
        throw error
    }
    console.log("you are logged in")
    redirect('/')
}