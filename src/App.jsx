import './App.css'
import { FollowCard } from './FollowCard';


export function App() {
  return (
    <section className='component-followCard'>
      <b className='followCard-title'>A quién seguir</b>
      <FollowCard userName='S4vitar' isFollowingInitial>
        S4vitar Mendoza Hernandez
      </FollowCard>

      <FollowCard userName='BillGates' isFollowingInitial={false}>
        Bill Gates
      </FollowCard>

      <FollowCard userName='midudev' isFollowingInitial={false}>
        Miguel Ángel Durán
      </FollowCard>

      <button className='followCard-button-more'>Show more</button>
    </section>
  );
}