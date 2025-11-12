import { createContext, use, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData{
    nomeDoUsuario: string;
    logout?: () => void;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps{
    children?: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {
    const [nome, setNome] = useState('');
    useEffect(() => {
        setTimeout(() => {
        setNome('visitante');
        }, 2000);
    }, []);

    const handleLogout = useCallback(() => {
        console.log("Fazendo logout");
    }, []);
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}