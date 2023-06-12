import './App.css'
import { FollowCard } from './FollowCard';


export function App() {
  return (
    <section className='component-followCard'>
      <b className='followCard-title'>Tal vez te guste</b>
      <FollowCard userName='S4vitar' isFollowingInitial>
        S4vitar
      </FollowCard>

      <FollowCard userName='MoureDev' isFollowingInitial={false}>
        Brais Moure
      </FollowCard>

      <FollowCard userName='midudev' isFollowingInitial={false}>
        Miguel Ángel Durán
      </FollowCard>

      <button className='followCard-button-more'>Mostrar más</button>
    </section>
  );
}