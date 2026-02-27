export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Basics", instructor: "John Doe", description: "Fundamentals of React." },
  { id: 2, title: "TypeScript UI", instructor: "Jane Smith", description: "Deep dive into types." },
  { id: 3, title: "Advanced Routing", instructor: "Bob Brown", description: "Mastering React Router." },
];