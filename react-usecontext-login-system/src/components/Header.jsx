import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import '../styles/header.css';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <h2>Sistema React Context</h2>

      <div className="header-actions">
        <ThemeToggle />

        {user && (
          <button onClick={logout}>
            Sair
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;