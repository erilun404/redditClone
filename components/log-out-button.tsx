'use client';

import { logOut } from "@/actions/log-out";

export const LogOutButton = () => {
    const handleLogOut = async () => {
        console.log("Logging out...");
        try {
            await logOut();
            console.log("You are now logged out");
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    return (
        <button onClick={handleLogOut}>Log out</button>
    );
};

// 'use client'

// import { logOut } from "@/actions/log-out"

// export const LogOutButton = () => {
//     console.log("you are now logged out")
//     return (
//         <button onClick={() => logOut()}>Log out</button>
        
//     )
    
// }
