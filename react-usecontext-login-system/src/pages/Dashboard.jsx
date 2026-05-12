import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import '../styles/dashboard.css';
import banner from '../assets/dashboard.png';

function Dashboard() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dashboard dark' : 'dashboard'}>
      <Header />

      <main>

        <h1>Painel do Sistema</h1>

        <ProfileCard />

      <br/>

        <img src={banner} alt="banner" className="dashboard-banner"/>

      </main>
    </div>
  );
}

export default Dashboard;