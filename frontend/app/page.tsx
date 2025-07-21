import Link from "next/link";
import { Metadata } from "next";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button";


export const metadata: Metadata = {
  title: "UesleiTech - Artigos sobre Finanças e Tecnologia",
  description: "Explore artigos sobre programação, inteligência artificial, dólar, bitcoin e muito mais."
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6", {
    next: { revalidate: 60 },
  });
  return res.json();

}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Últimos artigos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) =>
          <Card key={post.id} className="p-4">
            <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{post.body.slice(0, 50)}...</p>
            <Button variant={"default"} className="w-20">
              <Link href={`artigo/${post.id}`}>Leia mais</Link>
              </Button>
          </Card>
        )}
      </div>
    </main>
  )
}
