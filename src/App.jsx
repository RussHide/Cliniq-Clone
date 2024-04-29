import { TopBar } from './Components';
import { Hero, MiniServices, Stats, Team, Treatments } from './Pages';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className=''>
        <Hero />
        <Treatments />
        <MiniServices />
        <Stats/>
        <Team />
      </div>
    </div>
  )
}

export default App