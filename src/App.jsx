import { TopBar } from './Components';
import { Hero, MiniServices, Team } from './Pages';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className=''>
        <Hero />
        <MiniServices />
        <Team />
      </div>
    </div>
  )
}

export default App