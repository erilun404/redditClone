import Link from "next/link";
import { LogInForm } from "./form";

export default function LogInPage() {
    return (
        <main>
            <div>Log in page</div>
            <LogInForm/>
            <Link href='/auth/sign-up'>Dont have an account?</Link>
        </main>
    )
}