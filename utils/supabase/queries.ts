
import { createClient } from "./server";

import { type QueryData } from "@supabase/supabase-js";

export const getHomePosts = () => {
    const supabase = createClient()
    
    return supabase 
    .from('posts')
    .select('id, title, slug, content, user("email")')
    .order('created_at', {ascending: false})
}
export type HomePostType = QueryData<ReturnType<typeof getHomePosts>>