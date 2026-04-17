import { GetStaticPaths, GetStaticProps } from "next";
import { getPostById, getAllPosts, getAuthorById } from "@/lib/api";
import { Post, Author } from "@/types";

interface PostPageProps {
  post: Post;
  author: Author;
}

export default function PostPage({ post, author }: PostPageProps) {
  return (
    <article style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {author.name}</p>
      <p>{post.content}</p>
      <div>
        {post.tags.map(tag => <span key={tag}>#{tag} </span>)}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: "blocking" }; // "blocking" подгрузит новые посты на лету 
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  if (!post) return { notFound: true };
  const author = await getAuthorById(post.author);
  return {
    props: { post, author },
    revalidate: 60
  };
};