import './App.css'
import Button from './components/button/button'
import Header from './components/header/header'
import ComparisonTable from './components/table/table'
import { benefits } from './data/comparisonData'
import { paymentMethods } from './data/paymentMethodsData'
import PaymentMethod from './components/paymethod/paymethod'
import PremiumBenefits from './components/allPlans/allPlans';
import PlanCard from './components/card/card'
import { plansData } from './data/cardsData'
import FAQItem from './components/questions/questions'
import { faqData } from './data/faqData'

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
    {/* Header */}
      <Header />

      {/* Image created */}
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

      {/* Transfer */}
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

      {/* compare table */}
    <ComparisonTable rows={rows} />
    
    {/* methods */}
      <section className="payment-section">
        <h2 className='h2'>Planes accesibles para cada situación</h2>
        <p>
          Elige un plan Premium y escucha música sin anuncios y sin límites en tu teléfono, altavoz y otros dispositivos. 
          Accede a varias formas de pago. Cancela cuando quieras.
        </p>
        <div className="payment-methods">
          {paymentMethods.map((method, index) => (
            <PaymentMethod key={index} imgSrc={method.imgSrc} alt={method.alt} />
          ))}
        </div>
        <p className="more-methods">y 2 más</p>
      </section>

      {/* premium benefits */}
    <PremiumBenefits benefits={benefits} />

          {/* plans cards */}
      <section className="plans-container">
        {plansData.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </section>

      {/* Questions */}
      <section className="faq-section">
  <h2>¿Tienes alguna pregunta?</h2>
  <p className="faq-subtitle">
    Tenemos las respuestas. Encuentra más respuestas en nuestro{" "}
    <a href="#">sitio de ayuda</a>.
  </p>
  <div className="faq-container">
    {faqData.map((question, index) => (
      <FAQItem key={index} question={question} />
    ))}
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <img src="./src/assets/spotify.svg" alt="Spotify" className="footer-logo" />

          <div className="footer-columns">
            <div>
              <h4>Compañía</h4>
              <ul>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Empleo</a></li>
                <li><a href="#">For the Record</a></li>
              </ul>
            </div>

            <div>
              <h4>Comunidades</h4>
              <ul>
                <li><a href="#">Servicios para artistas</a></li>
                <li><a href="#">Desarrolladores</a></li>
                <li><a href="#">Publicidad</a></li>
                <li><a href="#">Inversionistas</a></li>
                <li><a href="#">Proveedores</a></li>
              </ul>
            </div>

            <div>
              <h4>Enlaces útiles</h4>
              <ul>
                <li><a href="#">Ayuda</a></li>
                <li><a href="#">Reproductor web</a></li>
                <li><a href="#">App móvil gratis</a></li>
              </ul>
            </div>

            <div>
              <h4>Planes de Spotify</h4>
              <ul>
                <li><a href="#">Premium Individual</a></li>
                <li><a href="#">Premium Duo</a></li>
                <li><a href="#">Premium Familiar</a></li>
                <li><a href="#">Premium para Estudiantes</a></li>
                <li><a href="#">Versión gratuita</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-socials">
            <a href="#"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="https://somoscomunidad.org.ve/wp-content/uploads/2024/03/Twitter-X-White-Logo-PNG-1.png" alt="Twitter" /></a>
            <a href="#"><img src="https://img.icons8.com/m_rounded/512/facebook-new.png" alt="Facebook" /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Legal</a>
            <a href="#">Seguridad y Centro de Privacidad</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Cookies</a>
            <a href="#">Sobre los anuncios</a>
            <a href="#">Accesibilidad</a>
          </div>
          <div className="footer-country">
            <span>Colombia</span>
          </div>
          <div className="footer-copy">
            © 2025 Spotify AB
          </div>
        </div>
      </footer>

    </main>
  )
}

export default App