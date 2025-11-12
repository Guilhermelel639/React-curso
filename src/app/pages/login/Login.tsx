import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usuarioLogadoContext = useUsuarioLogado();

  const emailLength = useMemo(() => {
    return email.length;
  }, [email]);

  const handleLogin = useCallback(() => {
    console.log("Fazendo login com", { email, password });
  }, [email, password]);

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
      </form>
    </div>
  );
};
