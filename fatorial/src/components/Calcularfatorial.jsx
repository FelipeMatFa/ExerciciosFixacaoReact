import React, {useMemo, useState} from "react";

function calcularFatorial(n) {
    if (n < 0) return 'Não definido';
    if (n === 0 || n === 1) return 1;
    return n * calcularFatorial(n - 1);
}

function CalcularFatorial(){
    const [numero, setNumero] = useState(2)
    const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

    return(
        <div>
            <h1>Calculadora de Fatorial</h1>
            <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(Number(e.target.value))}
            />
            <h2>Fatorial de {numero} é {fatorial}</h2>
        </div>
    )
}

export default CalcularFatorial;