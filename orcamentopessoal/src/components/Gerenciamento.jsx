import React, { useState } from 'react';
import '../style.css';

function App() {
  const [saldo, setSaldo] = useState(10000); // Saldo inicial
  const [despesas, setDespesas] = useState([]); // Lista de Despesas
  const [descricao, setDescricao] = useState(''); // Descrição da despesa
  const [valor, setValor] = useState(''); // Valor da despesa

  const adicionarDespesa = (event) => {
    event.preventDefault(); // Evitar recarregar a página
    if (descricao && valor) {
      const novaDespesa = { descricao, valor: parseFloat(valor) };
      setDespesas([...despesas, novaDespesa]);
      setSaldo(saldo - novaDespesa.valor);
      setDescricao('');
      setValor('');
    }
  };

  const calcularTotalDespesas = () => {
    return despesas.reduce((total, despesa) => total + despesa.valor, 0);
  };

  return (
    <div className="App">
      <h1>Gerenciamento de Orçamento Pessoal</h1>
      <h2>Saldo: R$ {saldo.toFixed(2)}</h2>
      
      <form onSubmit={adicionarDespesa}>
        <input
          type="text"
          placeholder="Descrição da despesa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor da despesa"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <button type="submit">Adicionar Despesa</button>
      </form>

      <h3>Lista de Despesas</h3>
      <ul>
        {despesas.map((despesa, index) => (
          <li key={index}>
            {despesa.descricao}: R$ {despesa.valor.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Total de Despesas: R$ {calcularTotalDespesas().toFixed(2)}</h3>
    </div>
  );
}

export default App;
