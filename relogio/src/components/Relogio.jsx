import React, {useState, useEffect} from 'react';

function Relogio(){
    // New Date é para pegar o tempo real
    const [tempo, setTempo] = useState(new Date());
    const [mensagem, setMensagem] = useState(false);

    useEffect(() => {
        const intervalo = setInterval(() => {
          setTempo(new Date());
        }, 1000);
    
        return () => clearInterval(intervalo);
      }, []);
    
      useEffect(() => {
        setMensagem(true);
        const cicloMensagem = setInterval(() => {
          setMensagem(prevMensagem => !prevMensagem);
        }, 5000);
    
        return () => clearInterval(cicloMensagem);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>{tempo.toLocaleTimeString()}</h1>
        {mensagem && <p>Essa mensagem desaparecerá em 5 segundos.</p>}
        </div>
    );
};

export default Relogio;
