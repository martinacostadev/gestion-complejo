import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" className="dark">
      <Head />
      <body className="antialiased container max-w-3xl mx-auto p-8 text-slate-500 dark:text-slate-100 bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
