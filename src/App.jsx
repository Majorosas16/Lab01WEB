import './App.css'
import Button from './components/button/button'
import Header from './components/header/header'

function App() {

return (
  <main>
    <Header />
    <div className="hero-container"> 
      <section className='Sec1'>
        <h1>Escucha sin límites. Prueba 1 mes de Premium Individual por $ 0.</h1>
        <p className='later'>Después, solo cuesta $ 18.500 por mes. Cancela cuando quieras.</p>
        
        <div className="button-group">
          <Button title="Empezar" titleColor="var(--spotify-black)" background="#FCC6CE" hoverBg="#Ffff" hoverColor='#000' />
          <Button title="Ver todos los planes" titleColor="var(--spotify-white)" background="transparent" border="1px solid var(--spotify-white)" />
        </div>

        <p className='dis'>
          $ 0 por 1 mes. Después, cuesta $ 18.500 al mes. La oferta solo está disponible si aún no probaste Premium. Se aplican Términos.
        </p>
      </section>
    </div>
  </main>
);
}

export default App
