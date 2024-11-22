// 'use client'
// import { signUp } from "@/actions/sighn-up";

// export const SignUpForm = () => {
//     return (
//         <form action={signUp}>
//             <input type="email" placeholder="email" name="email" required />
//             <input type="password" placeholder="password" name="password" required/>
//             <button type="submit">Sign up</button>
//         </form>
//     )
// }
'use client'
import {useMutation} from '@tanstack/react-query';
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from 'zod'
import { logInSchema } from '@/actions/schemas';
import { signUp } from "@/actions/sighn-up";


type FormInputs = z.infer<typeof logInSchema>


export default function SignUpForm() {
    const {mutate, error, isPending} = useMutation({
        mutationFn: signUp,
        onError: (error) => console.log(error.message),
    });

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormInputs>(); 

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        mutate(data)
        console.log(data)
    }
    // console.log(watch("name"))

    return(
        // <form action={signUp}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="email" placeholder="email" required></input>
            <input {...register("password")} type="password" placeholder="password" required></input>
            <button type="submit">{isPending ? 'test signing up...' : 'test Sign up'}</button>
            
            <button type="submit">{isPending ? 'Signing up...' : 'Sign up'}</button>

            {/* <input type="name" {...register("name")}placeholder="name" ></input>
            <input type="email" {...register("email")}placeholder="email" ></input>
            <input type="password" {...register("password")} placeholder="password" ></input>
            <button type="submit">sign up</button> */}
        </form>
    )
}
