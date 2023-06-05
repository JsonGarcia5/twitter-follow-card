import './App.css'
import { FollowCard } from './FollowCard';


export function App() {
    return (
        <section className='component-followCard'>
            <b className='followCard-title'>A quién seguir</b>
            <FollowCard userName='S4vitar'>S4vitar</FollowCard>
            <FollowCard userName='BillGates'>Bill Gates</FollowCard>
            <FollowCard userName='midudev'>Miguel Ángel Durán</FollowCard>
            <button className='followCard-button-more'>Show more</button>
        </section>
    );
}