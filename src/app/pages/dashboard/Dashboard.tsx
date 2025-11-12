import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const { nomeDoUsuario, logout } = useUsuarioLogado();

  return (
    <div>
      <p>Dashboard Page</p>
      <p>{nomeDoUsuario}</p>
      <Link to="/login">Go to Login</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
