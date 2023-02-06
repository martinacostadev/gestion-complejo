import Header from "components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";

import { useForm } from "react-hook-form";
import { getMinDate } from "utils/common";

export default function Home() {
  const router = useRouter();
  const dateRef = useRef<HTMLInputElement | null>(null);

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

  const { ref, ...rest } = register("date");

  return (
    <>
      <Head>
        <title>Gestión Complejo</title>
        <meta name="description" content="Gestión Complejo" />
      </Head>
      <section className="max-w-sm">
        <Header title="Reservar cancha" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="date">Día</label>
          <input
            type="date"
            id="date"
            min={getMinDate()}
            onClick={() => {
              dateRef?.current?.showPicker();
            }}
            {...rest}
            className="appearance-none flex
              w-full
              h-10
              rounded-md
              bg-gray-100
              border-transparent
              focus:border-gray-500 focus:bg-white focus:ring-0
              p-2
              dark:text-black
              mt-1 mb-6"
            ref={(e) => {
              ref(e);
              dateRef.current = e;
            }}
          />

          <label htmlFor="hour">Hora</label>
          <select
            id="hour"
            defaultValue={""}
            className="h-10 dark:text-black p-2 rounded-md
              bg-gray-100
              border-transparent mt-1 mb-6"
            {...register("hour", { required: true })}
          >
            <option value="" disabled hidden>
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

          <button type="submit" className="border-2 rounded-xl py-2 mt-4">
            Ver disponibilidad
          </button>
        </form>
      </section>
    </>
  );
}
