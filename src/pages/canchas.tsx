import Header from "components/Header";
import Head from "next/head";

import { useCourts } from "../hooks/useCourts";

export default function Home() {
  const { courts } = useCourts();

  return (
    <>
      <Head>
        <title>Gestión Complejo</title>
        <meta name="description" content="Gestión Complejo" />
      </Head>
      <main>
        <Header title="Canchas" />

        <div className="flex flex-col gap-8">
          {courts?.map((court) => {
            return (
              <div
                key={court.id}
                className="text-2xl font-semibold border-2 rounded-lg p-8"
              >
                {court.name}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
