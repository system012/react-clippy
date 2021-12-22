import { Link } from 'react-router-dom';

export const RedirectButton = ({path}) => (
    <Link to={path}>
      <button>Ritorna alla home</button>
    </Link>
  )