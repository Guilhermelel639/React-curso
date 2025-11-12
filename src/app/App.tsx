import { routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts/UsuarioLogado";

export const App = () => {
  return (
    <UsuarioLogadoProvider>
    {routes()}
    </UsuarioLogadoProvider>
  )

}

