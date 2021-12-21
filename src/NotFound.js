import { Link } from 'react-router-dom';



export const NotFound = () => (
  <div>
    <h1>404 - Pagina non trovata!</h1>
    <Link to="/">Ritorna alla Home</Link>
  </div>
);