import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getPost(Number(params.id));

  return {
    title: post.title,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 160),
    }
  }
}

export default async function Artigo({ params }: { params: { id: string } }) {
  const post = await getPost(Number(params.id));

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      <Button variant={"default"}><Link href={"/"}>Voltar</Link></Button>
    </div>
  );
}