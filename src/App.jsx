import { TopBar } from './Components';
import { CommonConditions, Hero, MiniServices, Stats, Team, Treatments } from './Pages';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className=''>
        <Hero />
        <Treatments />
        <CommonConditions />
        <MiniServices />
        <Stats/>
        <Team />
      </div>
    </div>
  )
}

export default App