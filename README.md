# Item Detail Route — Starter

Starter for the **Dynamic Routes & Data Fetching** assignment.

The list page is done for you. Your job is to build the **dynamic detail route** it links to.

## Run it

```bash
npm install
npm run dev
```

Open **http://localhost:3000**. You'll see a list of posts, each a `Link`. Clicking one navigates to `/posts/1`, `/posts/2`, and so on, but those pages don't exist yet (you'll get a 404). That's what you're building.

## Your task: create `app/posts/[id]/page.tsx`

The list links each post to `/posts/<its id>`. Build the single template file those URLs land on. The API is free and needs no key:

```
https://jsonplaceholder.typicode.com/posts/<id>
```

It returns one post as JSON with the shape `{ id, title, body }`.

| Step | What to add |
|---|---|
| 1 | Create the folder and file `app/posts/[id]/page.tsx` (the `[id]` makes it dynamic) |
| 2 | Read the id from the URL with `params.id` |
| 3 | Make the component `async` and `await fetch(...)` the one post by that id, then `await res.json()` |
| 4 | Declare a `type Post = { id: number; title: string; body: string }` and type the fetched data with it |
| 5 | Render the post's `title` and `body` in JSX |

## What to submit

Two screenshots (or a deployed preview URL):

1. The running detail page at `http://localhost:3000/posts/1`, showing the fetched title and body.
2. Your `app/posts/[id]/page.tsx` code.

## Tips

- The folder name in brackets **is** the key you read. Folder `[id]` means `params.id`.
- `params.id` is always a **string**. Drop it into the fetch URL with a template literal: `` fetch(`...posts/${params.id}`) ``.
- Type the result so TypeScript helps you: `const post: Post = await res.json()`.
