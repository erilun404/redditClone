import Link from "next/link";

import SignUpForm from "./form";
//import { SignUpForm } from "./form";

export default function SignUpPage() {
    return (
        <main>
            <div>Sign up page</div>
            <Link href='/auth/log-in'>already have an account?</Link>
            <SignUpForm/>
        </main>
    )
}