'use server'

import {z} from 'zod'
import { redirect } from 'next/navigation'

import { postSchema } from './schemas'
import { createClient } from '@/utils/supabase/server'
import { slugify } from '@/utils/slugify'
import { revalidatePath } from 'next/cache'

export const createPost = async (data: z.infer<typeof postSchema>) => {
    const parsedData = postSchema.parse(data)

    const supabase = createClient()

    const {
        data: {user}, error,
    } = await supabase.auth.getUser()
    console.log({user, error})
    
    if(!user) {
        throw new Error('not authenticated')
    }
    const {data: post} = await supabase
    .from('posts')
    .insert([{
       // ...parsedData, user_id: user.id, slug: slugify(data.title)
         title: parsedData.title,
        content: parsedData.content,
         user_id: user.id,
         slug: slugify(data.title)
        
        
    },])
    .select('slug')
    .single()
    .throwOnError()

    if(!post?.slug) {
        throw new Error('could not redirect')
    }

    revalidatePath('/')
    redirect(`/post/${post.slug}`)
}