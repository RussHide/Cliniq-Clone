
import StatsImage from '@img/Stats.jpg'
import { CircularStat } from '../Components'

const Stats = () => {
    return (
        <div className="container mx-auto flex justify-center items-center gap-x-10">
            <div className="w-1/2">
                <h2 className='font-extrabold text-5xl text-[#002C5D] '>How can the burden of cardiovascular diseases be reduced?</h2>
                <p className='text-[#3AC1EC] text-2xl italic mb-6 mt-3'>Delivering world class cardiology care</p>
                <p className='text-gray-400 mb-2'>A community in which all people achieve their full potential for health and well-being across the lifespan. We work to be trusted by patients, a valued partner in the community, and creators of positive.</p>
                <p className='text-gray-400'>We use a team approach to providing health care, and involve the patient as part of our team. nvolvement by our staff in the community enhances our ability to provide effective health care. A community in which all people achieve their full potential for health and well-being across the lifespan.</p>
              <div className='flex justify-center items-center gap-8 mt-10'>
                  <CircularStat value='20' text='Modeling and Analytics' />
                  <CircularStat value='85' text='Sense and Respond' />
                  <CircularStat value='60' text='Analysis and Monitoring' />
                  <CircularStat value='97' text='Diagnostics and Root' />
              </div>
            </div>
            <div className="w-1/2">
                <img src={StatsImage} className='rounded-2xl' alt="" />
            </div>
        </div>
    )
}

export default Stats