import { Post, Author } from "@/types";

const authors: Author[] = [
    { id: "1", name:"Kamilla", bio: "Frontend Dev", avatar:"/aval.jpg"}
];

const posts: Post[] = [
    {
        id:"1",
        title: "Learning Next.js SSR",
        content: "SSR is great for dynamic content...",
        author:"1",
        date:"2026-03-05",
        tags: ["nextjs", "react"],
        readTime: 4
    }
];

// получение всех постов длоя главной страницы
export async function getAllPosts():  Promise<Post[]> {
    return posts;
}

//получение одного поста по его айди 
export async function getPostById (id:string): Promise<Post | undefined> {
    return posts.find((p) => p.id === id);
}

//получение  автора поста
export async function getAuthorById(id:string) : Promise<Author | undefined> {
    return authors.find((a)=> a.id===id);
}