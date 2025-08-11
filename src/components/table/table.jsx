import './table.css';

const ComparisonTable = ({ rows }) => {
  return (
    <section className="comparison-section">
      <h2>Nota la diferencia</h2>
      <p>Cámbiate a Premium y disfruta del control total de tu música. Cancela cuando quieras.</p>
      
      <table>
        <thead>
          <tr>
            <th>Beneficios</th>
            <th>Servicio gratuito de Spotify</th>
            <div>
            <img className='check' src="./src/assets/SpotifySmall.svg" alt="" />
            <th>Planes Premium de Spotify</th>
            </div>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonTable;
