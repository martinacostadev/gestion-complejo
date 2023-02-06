import Header from "components/Header";
import LoginButton from "components/Login-button";
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

  const { ref, ...rest } = register("date");

  return (
    <>
      <main>
        <Header title="Iniciar sesión" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-xs justify-center border-2 rounded-lg p-4"
        >
          <label htmlFor="date">E-mail</label>
          <input
            type="email"
            id="email"
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
              mt-1 mb-4"
          />

          <label htmlFor="date">Contraseña</label>
          <input
            type="password"
            id="password"
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
              mt-1 mb-4"
          />

          <LoginButton />

          {/* <button type="submit" className="border-2 rounded-xl py-2">
            Ver disponibilidad
          </button> */}
        </form>
      </main>
    </>
  );
}
