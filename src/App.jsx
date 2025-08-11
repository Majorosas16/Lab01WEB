import './App.css'
import Button from './components/button/button'
import Header from './components/header/header'
import ComparisonTable from './components/table/table'
import { benefits } from './data/comparisonData'

function App() {

const rows = [];
benefits.forEach((item, index) => {
  rows.push(
    <tr key={index}>
      <td>{item.text}</td>
      <td>{item.free ? "✔" : "—"}</td>
      <td>{item.premium ? "✔" : "—"}</td>
    </tr>
  );
});

return (
    <main>
      <Header />

      {/* Sección Hero */}
      <section className="hero-container"> 
        <div className='Sec1'>
          <h1>Escucha sin límites. Prueba 1 mes de Premium Individual por $ 0.</h1>
          <p className='later'>Después, solo cuesta $ 18.500 por mes. Cancela cuando quieras.</p>
          
          <div className="button-group">
            <Button title="Empezar" titleColor="var(--spotify-black)" background="#FCC6CE" hoverBg="#Ffff" hoverColor='#000' />
            <Button title="Ver todos los planes" titleColor="var(--spotify-white)" background="transparent" border="1px solid var(--spotify-white)" />
          </div>

          <p className='dis'>
            $ 0 por 1 mes. Después, cuesta $ 18.500 al mes. La oferta solo está disponible si aún no probaste Premium. Se aplican Términos.
          </p>
        </div>
      </section>

      {/* Sección Transferencia */}
      <section className="transfer-section">
        <div className="transfer-image-container">
          <img 
            src="./src/assets/BannerSpo.png" 
            alt="Transferir música a Spotify" 
            className="transfer-image"
          />
        </div>

        <div className="transfer-content">
          <h2>Transferir a Spotify</h2>
          <p className="transfer-description">
            Transfere tu música fácilmente desde cualquier servicio de música. Luego, toma el control total de tu música con Spotify Premium.
          </p>
          <div className="transfer-buttons">
            <Button title="Obtener Premium Individual" titleColor="var(--spotify-black)" background="#FCC6CE" hoverBg="#Ffff" hoverColor='#000' />
            <Button title="¿Cómo hago la transferencia?" titleColor="var(--spotify-white)" background="transparent" border="1px solid var(--spotify-white)" />
          </div>
        </div>
      </section>

      <ComparisonTable rows={rows} />

    </main>
  )
}

export default App