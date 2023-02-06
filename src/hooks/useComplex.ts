import { supabase } from "lib/supabaseClient";

export const fetchComplex = async (complexSlug: string) => {
  let { data, error } = await supabase
    .from("complex")
    .select()
    .eq("slug", complexSlug);

  if (error) {
    throw new Error(`${error.message}: ${error.details}`);
  }

  return data;
};
