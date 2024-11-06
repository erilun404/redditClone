
import { createClient } from '@/utils/supabase/server'
//import { notFound } from 'next/navigation'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const supabase = createClient()

  const { data: post, error } = await supabase
    .from('posts')
    .select('title, content, user("email")')
    .eq('slug', params.slug)
    // .single()
  console.log('post data', post)
  // Om det finns ett fel eller ingen post hittas, visa 404-sidan
  // if (error || !post) {
  //   notFound()
  // }

  // Rendera postens innehåll
  return (
    <main>
      <h1>Title{post?.title}</h1>
      <p>Content{post?.content}</p>
       <span>Author: {post?.user?.email}</span>
    </main>
  )
}



// import {createClient} from '@/utils/supabase/server'
// import { notFound } from 'next/navigation'

// export default async function Postpage({
//     params,
// }: {
//     params: {slug: string}
    
// }) {
//     const supabase = createClient()
//     const {data: post, error} = await supabase
    
//     .from('posts')
//     .select('title, content, user(email)')
//     .eq('slug', params.slug)
//     .single()
    
//     if(error || !post) notFound()
//     return (
//         <main>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//             <span>{post.user?.email}</span>
//         </main>
//     )
// }