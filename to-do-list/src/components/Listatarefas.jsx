import React, {useState, useCallback} from 'react';
import '../style.css'

function ListaTarefas(){
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = useCallback(() => {
    if (novaTarefa.trim() === '') return;
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
    setNovaTarefa('');
  }, [novaTarefa]);

  return (
    <div className='div-lista'>
      <h1>Lista de Tarefas</h1>
      <input
        className='div-lista_input'
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button className='div-lista_button' onClick={adicionarTarefa}>
        Adicionar Tarefa
      </button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;