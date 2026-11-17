import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const horaformatada = hora.toLocaleTimeString('pt-PT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dataFormatada = hora.toLocaleDateString('pt-PT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });


  return(
    <div className='container'>
      <div className="watch-card">
        <h1 className="hora">{horaformatada}</h1>
        <p className="data">{dataFormatada}</p>
      </div>
    </div>
  );
}

export default App
