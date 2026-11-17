import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [Hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const horaformtated = hora.toLocaleTimeString('pt-PT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formatedDate = hora.toLocaleDateString('pt-PT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });


  return(
    <div className='container'>
      <div className="watch-card">
        <h1 className="time">{horaformtated}</h1>
        <p className="date">{formatedDate}</p>
      </div>
    </div>
  )

}

export default App
