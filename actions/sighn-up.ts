"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { logInSchema } from "./schemas";

export const signUp = async (data: z.infer<typeof logInSchema>) => {
  const parseData = logInSchema.parse(data);
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp(parseData);
  console.log({ user, error });

  if (user && user.email) {
    const { data, error } = await supabase
      .from("user")
      .insert([{ id: user.id, email: user.email }]);
    console.log("vår user table", { data, error });
  }
  console.log({ user, error });
};
