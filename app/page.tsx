import Link from "next/link";

// The shape of the data we list. Only the fields we use here.
type Post = {
  id: number;
  title: string;
};

// This list page is DONE for you. Each post links to /posts/<id>,
// which is the dynamic detail route YOU will build in app/posts/[id]/page.tsx.
// Clicking a post right now gives a 404, that's your job to fix.
export default async function Home() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const posts: Post[] = await res.json();

  return (
    <main className="list">
      <h1>Mini Blog</h1>
      <p>Pick a post to read it.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
