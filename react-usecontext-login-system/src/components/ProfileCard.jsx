import { useAuth } from '../contexts/AuthContext';
import avatar1 from '../assets/avatar.jpg';

function ProfileCard() {
  const { user } = useAuth();

  return (
    <div className="profile-card">

      <img src={avatar1} alt="Avatar" className="profile-avatar"/>

      <h3>Perfil do Usuário</h3>

      <p>
        <strong>Nome:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default ProfileCard;