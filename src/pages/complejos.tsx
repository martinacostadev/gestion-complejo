import Link from "next/link.js";
import { Complex } from "schemas/complex.js";
import { supabase } from "../../lib/supabaseClient.js";

interface Props {
  complexes: Complex[];
}

function Complejos({ complexes }: Props) {
  return (
    <section>
      <ul className="flex flex-col items-center gap-8 text-4xl font-bold">
        {complexes.map((complex) => (
          <li key={complex.id}>
            <Link href={`/${complex.slug}`}> {complex.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("complex").select();

  return {
    props: {
      complexes: data,
    },
  };
}

export default Complejos;
