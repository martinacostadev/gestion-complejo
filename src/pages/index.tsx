import Header from "components/Header";
import Head from "next/head";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";

export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    router.push({
      pathname: "/reserva",
      query: data,
    });
  };

  return (
    <>
      <Head>
        <title>Gestión de Canchas</title>
        <meta name="description" content="Gestión de Canchas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Reservar cancha" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-8 border-2 rounded-lg p-4"
        >
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className="
              mt-1
              block
              rounded-md
              bg-gray-100
              border-transparent
              focus:border-gray-500 focus:bg-white focus:ring-0
              p-2
              dark:text-black
            "
            {...register("date", { required: true })}
          />

          <select
            className="dark:text-black p-2 rounded-md
              bg-gray-100
              border-transparent"
            {...register("hour", { required: true })}
          >
            <option value="" selected disabled hidden>
              Seleccione una hora
            </option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
          </select>

          {errors.hour && <span>Complete todos los campos</span>}

          <button type="submit" className="border-2 rounded-xl py-2">
            Ver disponibilidad
          </button>
        </form>
      </main>
    </>
  );
}
