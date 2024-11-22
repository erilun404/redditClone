import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();

  const { data: post, error } = await supabase
    .from("posts")
    .select('title, content, user("email")')
    .eq("slug", params.slug)
    .single();
  console.log("post data", post);

  if (error || !post) notFound();

  return (
    <main>
      <h1>Title{post?.title}</h1>
      <p>Content{post?.content}</p>
      <span>Author: {post?.user?.email}</span>
    </main>
  );
}
