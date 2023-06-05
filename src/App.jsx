import './App.css'
import { FollowCard } from './FollowCard';


export function App() {
  return (
    <section className='component-followCard'>
      <b className='followCard-title'>A quién seguir</b>
      <FollowCard userName='S4vitar' isFollowing>
        S4vitar Mendoza Hernandez
      </FollowCard>

      <FollowCard userName='BillGates' isFollowing={false}>
        Bill Gates
      </FollowCard>

      <FollowCard userName='midudev' isFollowing={false}>
        Miguel Ángel Durán
      </FollowCard>

      <button className='followCard-button-more'>Show more</button>
    </section>
  );
}