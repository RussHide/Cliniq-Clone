import { MiniServiceOne, MiniServiceTwo, MiniServiceThree, MiniServiceFour } from "../Components/CustomIcons"
import { ServiceMiniCard } from '../Components';

const MiniServices = () => {
  return (
    <div className="flex justify-center items-center container mx-auto gap-x-5">
      <div className="w-1/2">
        <h2 className="text-[#002C5D] font-extrabold text-5xl mr-3">How can the burden of cardiovascular diseases be reduced?</h2>
        <p className="text-[#3AC1EC] my-5 text-2xl italic">Delivering world class cardiology care</p>
      </div>
      <div className="w-1/2 grid grid-cols-2 place-items-center mx-10 gap-4">
        <ServiceMiniCard icon={MiniServiceOne} description='Interventional Cardiology and Cardic Surgery' />
        <ServiceMiniCard icon={MiniServiceTwo} description='Cardiology Telemedicine Appointments' />
        <ServiceMiniCard icon={MiniServiceThree} description='Preoperative optimization of patient expectations' />
        <ServiceMiniCard icon={MiniServiceFour} description='Cardiac Insurance Care Policy for Patiente' />
      </div>
    </div>
  )
}

export default MiniServices