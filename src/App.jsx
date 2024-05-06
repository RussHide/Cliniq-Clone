import { Footer, TopBar } from './Components';
import { CommonConditions, Hero, MiniServices, Stats, Team, TestLab, Treatments } from './Pages';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className=''>
        <Hero />
        <TestLab />
        <Treatments />
        <CommonConditions />
        <MiniServices />
        <Stats />
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default App