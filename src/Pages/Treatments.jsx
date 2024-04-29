import TreatmentImage from '@img/Treatment.jpg'
import { TreatmentsCard } from '../Components'
import { FiHeart, FiPhone } from "react-icons/fi"
import { BsLungs } from "react-icons/bs"
import { PiBrainLight } from "react-icons/pi"
import { FaRegCalendarCheck } from "react-icons/fa6"

const Treatments = () => {
  return (
    <div className="container mx-auto overflow-hidden rounded-lg">
      <div className=' flex bg-[#002C5D]'>
        <div className="w-1/3">
          <img className='h-full object-cover' src={TreatmentImage} alt="" />
        </div>
        <div className="w-2/3 justify-center items-center">
          <div className='p-24'>
            <div>
              <h2 className='text-[#3AC1EC] font-semibold'>Treatments</h2>
              <h3 className='text-white text-5xl font-extrabold mt-4' >Our Healing Plan and</h3>
              <h3 className='text-[#3AC1EC] text-5xl font-extrabold mb-4'>Treatment Options</h3>
              <p className='text-white text-2xl mb-10  italic'>Delivering world class hospital care</p>
            </div>
            <div className='flex justify-start items-center'>
              <div className='text-white border-r border-white pr-10'>
                <p>Make an Appointment</p>
                <p className='flex justify-start items-center text-3xl font-bold gap-x-2'><FiPhone className='text-[#3AC1EC]'  /> 88 700 600</p>
              </div>
              <div className='text-white pl-10'>
                <p>Online Schedule</p>
                <p className='flex justify-start items-center text-3xl font-bold gap-x-2'><FaRegCalendarCheck className='text-[#3AC1EC]'  /> Book here</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-x-3 relative right-20 bottom-10'>
            <TreatmentsCard icon={FiHeart} title='Diagnosis and treatment of disorders of the heart' description='We care for the whole person, see the complexity of each person’s life, and believe that addressing a broad range of human needs.' list={['Repayment', 'Interest Only', 'Flexible']} />
            <TreatmentsCard icon={PiBrainLight} title='Diagnosis and treatment of disorders of the brain' description='To have patients feel comfortable in the security and confidentiality of their information, to have a trusting relationship between.' list={['Repayment', 'Interest Only', 'Flexible']} />
            <TreatmentsCard icon={BsLungs} title='Diagnosis and treatment of disorders of the lungs' description='A working family that cultivates positivity, team work, support and ongoing educational opportunities and opportunities for potential.' list={['Repayment', 'Interest Only', 'Flexible']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Treatments