import React, {useContext, useRef} from "react";
import {UserContext} from './Autentificar';

function Login() {
    const {usuario, setUsuario} = useContext(UserContext);
    const nomeRef = useRef(null);
    const senhaRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        const nome = nomeRef.current.value;
        const senha = senhaRef.current.value;

        setUsuario({nome, senha});
    }

    return (
        <div>
            <section>
                <h1>Seu usuário</h1>
                <p>Nome: {usuario.nome}</p>
            </section>

            <form onSubmit={submit}>
                <h1>Fazer cadastro</h1>
                <input
                    id="nome"
                    type="text"
                    ref={nomeRef}
                    placeholder="Nome"
                />
                <input
                    id="senha"
                    type="password"
                    ref={senhaRef}
                    placeholder="Senha"
                />
                <button type="submit">Logar-se</button>
            </form>
        </div>
    );
}

export default Login;
