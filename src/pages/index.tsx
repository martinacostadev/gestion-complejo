import Header from "components/Header";
import Head from "next/head";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { getMinDate } from "utils/common";

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
          className="flex flex-col justify-center border-2 rounded-lg p-4"
        >
          <label htmlFor="date">Día</label>
          <input
            type="date"
            id="date"
            min={getMinDate()}
            className="
              flex
              w-full
              h-10
              rounded-md
              bg-gray-100
              border-transparent
              focus:border-gray-500 focus:bg-white focus:ring-0
              p-2
              dark:text-black
              mt-1 mb-4
            "
            {...register("date", { required: true })}
          />

          <label htmlFor="hour">Hora</label>
          <select
            id="hour"
            className="dark:text-black p-2 rounded-md
              bg-gray-100
              border-transparent mt-1 mb-4"
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
