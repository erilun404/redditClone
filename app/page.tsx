import { createClient } from "@/utils/supabase/client";
import { getHomePosts } from "@/utils/supabase/queries";
import Link from "next/link";

export default async function Home() {
  // const supabase = createClient()
  //  const { data: posts, error } = await getHomePosts(supabase)
   //console.log(posts)
  // const {data, error} = await supabase
  // .from('posts')
  // .select('id, title, slug, user("email")')
  // .order('created_at', {ascending:false})
  //console.log({data, error})
  //const {data, error} = await supabase()
 const {data: posts, error} = await getHomePosts()

 
  return (
    <>
    <main>
      
    <h1>welcome to home page</h1>
     {/* <p>{data?.[0].title}</p>   */}
     
        {posts?.map(({id, title, slug}) => (
          
          <div key={id}>
            <Link href={`/post/${slug}`}>
            <h2>{title}</h2> 
            </Link>
          </div>
          
        ))}
    </main>


    </>
    
    
  );
}
