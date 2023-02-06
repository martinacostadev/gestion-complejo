import { useCourts } from "@/hooks/useCourts";
import Header from "components/Header";
import { useRouter } from "next/router";

import { Dialog, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from "react";
import { formatDate } from "utils/common";

export default function Reserva() {
  const router = useRouter();
  const data = router.query;
  const { date, hour } = data;
  const { courts } = useCourts();

  const [open, setOpen] = useState(false);
  const [court, setCourt] = useState<number>(0);

  const formattedDate = formatDate(String(date));

  const cancelButtonRef = useRef(null);

  const handleClick = (courtId: number) => {
    setCourt(courtId);
    setOpen(true);
  };

  const handleConfirm = () => {
    const phoneNumber = "2477509998";
    const text = `Hola! Quiero confirmar Cancha ${court} para el ${formattedDate} a las ${hour}:00 hs. Aguardo confirmación. Gracias!`;
    const message = text.replace("", "+");

    window.location.href = `https://api.whatsapp.com/send/?phone=+54${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;
  };

  return (
    <>
      <Header title="Reserva" />

      <div className="flex flex-col gap-8 w-full">
        <div>Canchas disponibles el día</div>
        <div className="text-xl">{formattedDate}</div>
        <div className="text-xl">{hour}:00 hs</div>

        {courts?.map((court) => {
          return (
            <button
              key={court.id}
              className="text-2xl font-semibold border-2 rounded-lg p-8"
              onClick={() => {
                handleClick(court.id);
              }}
              type="button"
            >
              {court.name}
            </button>
          );
        })}
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100 w-full"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-16 sm:w-16">
                        <CheckCircleIcon
                          className="h-12 w-12 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Datos de Reserva
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-lg text-gray-500 py-2">
                            Cancha {court}
                          </p>
                          <p className="text-lg text-gray-500 py-4">
                            {formattedDate}
                          </p>
                          <p className="text-lg text-gray-500 pt-2">
                            a las {hour}
                            :00 hs
                          </p>

                          <div className="flex gap-2 items-center text-sm text-gray-500 pt-6">
                            <InformationCircleIcon
                              className="h-16 w-16 text-yellow-300"
                              aria-hidden="true"
                            />{" "}
                            <span className="text-left">
                              En el siguiente pasó se abrirá WhatsApp para
                              enviarle mensaje al complejo y que te confirmen el
                              turno por dicho medio.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleConfirm}
                    >
                      Enviar WhatsApp
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
