import { TeamCard } from '../Components';
import TeamOne from '@img/TeamOne.jpg'
import TeamTwo from '@img/TeamTwo.jpg'
import TeamThree from '@img/TeamThree.jpg'
import TeamFour from '@img/TeamFour.jpg'

const Team = () => {
  return (
    <div className='bg-[#F3F3F3] mx-10 px-10 py-16 rounded-lg'>
      <div>
        <p className='text-center text-[#002C5D] font-extrabold text-5xl'>Our Team Of Specialist</p>
        <p className='text-center text-[#3AC1EC] my-5 text-2xl italic'>Delivering world class cardiology care</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 w-fit gap-x-6 p-2'>
        <TeamCard img={TeamOne} name="Dr Melissa Dosch" role="SENIOR CARDIOLOGIST" />
        <TeamCard img={TeamTwo} name="Dr Vinay Kumar" role="CARDIOLOGIST" />
        <TeamCard img={TeamThree} name="Dr Helen J. Curry" role="CARDIOLOGIST" />
        <TeamCard img={TeamFour} name="Dr Vitór Santos" role="CARDIOLOGIST" />
      </div>
    </div>
  )
}

export default Team