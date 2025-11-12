
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/contexts/UsuarioLogado";

export const Dashboard = () => {
    const usuarioLogadoContext = useContext(UsuarioLogadoContext);

    return (
        <div>

        <p>Dashboard Page</p>
        <p>{usuarioLogadoContext.nomeDoUsuario}</p>

        <Link to="/login">Go to Login</Link>
        </div>
    );
}