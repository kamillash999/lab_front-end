import { GetServerSideProps } from "next";
export default function AboutSSR({ time }: { time: string }) {
  return <div><h1>О нас (SSR)</h1><p>Эта страница обновлена в: {time}</p></div>;
}
export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { time: new Date().toLocaleTimeString() } };
};