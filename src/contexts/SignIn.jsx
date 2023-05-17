import { createContext } from 'react';
import { useState } from 'react';

export const SignInContext = createContext()

export const SignInProvider = ({children}) => {
    const [user, setUser] = useState()

    return (
        <SignInContext.Provider value={{ user, setUser}}>
            {children}
        </SignInContext.Provider>
    )
}