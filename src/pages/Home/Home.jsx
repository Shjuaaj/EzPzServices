import React from 'react'
import Header from '../../components/Header/Header'
import OurHeroes from '../../components/OurHeroes/OurHeroes'
import Services from '../../components/Services/Services'
import ShowService from '../../components/ShowService/ShowService'
import ShowHero from '../../components/ShowHero/ShowHero'

const Home = () => {

  const [showService, setShowService] = React.useState("")
  const [showHero, setShowHero] = React.useState("")

  return (
    <div>
      {showService !== "" ? <ShowService showService={showService} setShowService={setShowService} /> : <></>}
      {showHero !== "" ? <ShowHero showHero={showHero} setShowHero={setShowHero} /> : <></>}

      <Header />
      <Services setShowService={setShowService} />
      <OurHeroes setShowHero={setShowHero} />
    </div>
  )
}

export default Home