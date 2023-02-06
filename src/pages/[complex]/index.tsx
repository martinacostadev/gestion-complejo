import { fetchComplex } from "@/hooks/useComplex";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "components/Loading";
import Head from "next/head";
import { useRouter } from "next/router";

function ComplexPage() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["complex"] });

  const router = useRouter();
  const { complex } = router.query;
  const { data, isLoading } = useQuery(
    ["complex"],
    () => fetchComplex(String(complex)),
    {
      enabled: !!complex,
    }
  );

  if (isLoading) return <Loading />;

  return data ? (
    <>
      <Head>
        <title>Gestión Complejo: {data[0]?.name}</title>
        <meta
          name="description"
          content={`${data[0]?.name} - Gestión Complejo deportivo`}
        />
      </Head>
      <div className="text-3xl font-bold mb-8">{data[0]?.name}</div>
      <p className="mb-8">{data[0]?.whatsapp}</p>
      <p className="mb-8">Cantidad de Canchas: {data[0]?.courts_quantity}</p>
      <div>Form para reservar</div>
    </>
  ) : (
    <p>No hay información</p>
  );
}

export default ComplexPage;
