import CheckCircleIcon from "@heroicons/react/24/outline/CheckCircleIcon";
import Header from "components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header title="Cancha confirmada" />

      <div className="flex items-center pb-14 gap-4">
        <p>Reserva confirmada con éxito!</p>
        <CheckCircleIcon
          className="h-12 w-12 text-green-600"
          aria-hidden="true"
        />
      </div>

      <Link href={"/"} className="center border-2 rounded-lg py-2 px-4">
        Volver al inicio
      </Link>
    </>
  );
}
