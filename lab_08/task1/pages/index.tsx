import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main style={{ padding: '20px' }}>
      <h1>My Academic Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <Link href={`/posts/${post.id}`}>
              <h2 style={{ cursor: 'pointer', color: 'blue' }}>{post.title}</h2>
            </Link>
            <p>Reading time: {post.readTime} min</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

// Эта функция запускается на стороне сервера при сборке
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60, // ISR: обновлять страницу раз в минуту 
  };
};