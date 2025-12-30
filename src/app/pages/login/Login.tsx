import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";
import { useNavigate } from "react-router-dom";
import { UsuarioService, IUsuario } from "../../shared/services/api/usuario/usuarioService"; 

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usuarioLogadoContext = useUsuarioLogado();
  const navigate = useNavigate();

  const emailLength = useMemo(() => {
    return email.length;
  }, [email]);

  const handleLogin = useCallback(async () => {
    const usuario: IUsuario | any = await UsuarioService.getByUsername(email);
    if (usuario instanceof Error) {
      alert(usuario.message);
      return;
    }
    if (usuario.password !== password) {
      alert("Senha incorreta");
      return;
    }
    usuarioLogadoContext.nomeDoUsuario = usuario.username;
    navigate("/dashboard");
  }, []
  );

  useEffect(() => {
    if (window.confirm("sim?")) {
      console.log("sim");
    } else {
      console.log("não");
    }
  }, []);

  useEffect(() => {
    console.log("email alterado:", email);
  }, [email]);

  return (
    <div>
      <form>
        <p>quantidade de caracteres no e-mail: {emailLength}</p>
        <p>{usuarioLogadoContext.nomeDoUsuario}</p>
        <InputLogin
          label="e-mail"
          value={email}
          onChange={setEmail}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <br />
        <InputLogin
          label="senha"
          value={password}
          onChange={setPassword}
          type="password"
          ref={inputPasswordRef}
        />
        <br />
        {/* <button type="button" onClick={handleLogin}>entrar</button> */}
        <ButtonLogin type="button" onClick={handleLogin}>
          entrar
        </ButtonLogin>
        <br />
        <button type="button" onClick={() => navigate(-1)}>
          voltar
        </button>
      </form>
    </div>
  );
};
