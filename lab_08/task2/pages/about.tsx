import { GetStaticProps } from "next";
export default function About({ time }: { time: string }) {
  return <div><h1>О нас (SSG)</h1><p>Эта страница создана в: {time}</p></div>;
}
export const getStaticProps: GetStaticProps = async () => {
  return { props: { time: new Date().toLocaleTimeString() } };
};