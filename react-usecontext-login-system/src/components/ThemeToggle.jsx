import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {darkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
}

export default ThemeToggle;