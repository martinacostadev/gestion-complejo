import Head from "next/head";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">{title}</h1>
    </>
  );
}
