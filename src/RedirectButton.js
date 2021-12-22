import { Link } from 'react-router-dom';

export const RedirectButton = (props) => {
  
  const { path } = props;
  
  return (
    <Link to={path}>
      <button>Ritorna alla home</button>
    </Link>
  )
}