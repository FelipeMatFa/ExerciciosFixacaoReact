import React, {createContext, useState} from 'react';

export const UserContext = createContext();

function UserProvider({children}){
    const [usuario, setUsuario] = useState({ nome: "", senha: "" });

    return (
        <UserContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;