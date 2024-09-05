import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  { userName: 'Fcardozo', name: 'Fernando Cardozo', isFollowing: true },
  { userName: 'Nachito', name: 'Ignacio Cardozo', isFollowing: false },
  { userName: 'Lobo', name: 'Jorge Cruz', isFollowing: true },
  { userName: 'SVela', name: 'Silvia Vela', isFollowing: false },
];
export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
