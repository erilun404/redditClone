"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { logIn } from "@/actions/log-in";
import { logInSchema } from "@/actions/schemas";


export const LogInForm = () => {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: logIn,
    onError: (error) => console.log(error.message),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
  });

  return (
    <form onSubmit={handleSubmit((values) => mutate(values))}>
      <input {...register("email")} placeholder="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("password")} placeholder="password" />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loging in..." : "Loged in"}
      </button>
    </form>
  );
};
