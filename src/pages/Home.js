import React from 'react'
import HeroCardGame from '../components/Games/HeroCardGame'
import dataHeroGames from '../utils/data.hero.images'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="flex-col w-full hv-full">
      <section className='flex flex-col w-full justify-center items-center lg:flex-row gap-4 lg:gap-0'>
        {/* TODO: MENU NAV*/}
        {/* TODO: HERO BANNER */}
        {/* Hero Card Gamer */}
        {dataHeroGames.map((item, index) => (
          <HeroCardGame key={index} title={item.title} image={item.image} />
        ))}
      </section>
      <Footer className=""></Footer>
    </main>
  );
}

export default Home