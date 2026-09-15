import { Link } from 'react-router-dom';

// react route para cuando la url no coincide 
function NotFoundPage() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <p>Esta página no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFoundPage;
