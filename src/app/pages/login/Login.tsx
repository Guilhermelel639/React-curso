import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        console.log(email);
        console.log(password);
        
    }

    return (
        <div>
            <form >
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    <span>senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>entrar</button>
            </form>
        </div>
    );
}