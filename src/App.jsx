import { useState } from 'react';
import './App.css'
import { FollowCard } from './FollowCard';


const usersAll = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'eminem',
    name: 'Eminem',
    isFollowing: false
  },
  {
    userName: 'S4vitar',
    name: 'S4vitar',
    isFollowing: false
  },
  {
    userName: 'billieeilish',
    name: 'Billie Eilish',
    isFollowing: false
  },
  {
    userName: 'MoureDev',
    name: 'Brais Moure',
    isFollowing: true
  },
  {
    userName: 'NetflixLAT',
    name: 'Netflix Latinoamérica',
    isFollowing: false
  },
  {
    userName: 'satyanadella',
    name: 'Satya Nadella',
    isFollowing: false
  },
  {
    userName: 'drake',
    name: 'Drake',
    isFollowing: false
  },
  {
    userName: 'arigameplays',
    name: 'Ari Gameplays',
    isFollowing: false
  },
  {
    userName: 'rihanna',
    name: 'Rihanna',
    isFollowing: false
  },
  {
    userName: 'Ubisoft',
    name: 'Ubisoft',
    isFollowing: false
  },
  {
    userName: 'Cristiano',
    name: 'Cristiano Ronaldo',
    isFollowing: true
  },
  {
    userName: 'ChampionsLeague',
    name: 'UEFA Champions League',
    isFollowing: false
  }
];


function usersToShow(showMore) {
  // Shuffle the usersAll array
  usersAll.sort(() => Math.random() - 0.5);
  return showMore ? usersAll.slice(0, 3) : usersAll;
}

export function App() {
  const [showMore, setShow] = useState(true);
  const buttonShow = showMore ? "Mostrar más" : "Mostrar menos";
  const users = usersToShow(showMore);

  return (
    <section className='component-followCard'>
      <b className='followCard-title'>Tal vez te guste</b>
      {
        users.map(({ userName, name, isFollowing }) => (
          <FollowCard
            key={userName}
            userName={userName}
            isFollowingInitial={isFollowing}
          >
            {name}
          </FollowCard>
        ))
      }
      <button
        className='followCard-button-more'
        onClick={() => { setShow(!showMore) }} > {buttonShow} </button>
    </section>
  );
}

