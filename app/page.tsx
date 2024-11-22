import { createClient } from "@/utils/supabase/server";
import { getHomePosts } from "@/utils/supabase/queries";
import Link from "next/link";

export default async function Home() {
  const { data: posts, error } = await getHomePosts();

  return (
    <>
      <main>
        <h1>welcome to home page</h1>
        {posts?.map(({ id, title, slug }) => (
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
