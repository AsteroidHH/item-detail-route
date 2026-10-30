import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await res.json();

  return (
    <main className="detail">
      <Link href="/" className="back">
        ← Back to all posts
      </Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
}
