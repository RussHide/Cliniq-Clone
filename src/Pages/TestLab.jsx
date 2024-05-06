import TestLabImage from '@img/TestLabImage.jpg'
import { TbHeartHandshake } from "react-icons/tb"
import { LiaStethoscopeSolid } from "react-icons/lia"
import { PiScreencastBold } from "react-icons/pi"

const TestLab = () => {
  return (
    <div className="container mx-auto overflow-hidden rounded-lg">
      <div className='w-1/2'>
        <h2 className='text-[#3AC1EC] font-bold text-lg'>Cardiac Imaging and Testing</h2>
        <p className='text-[#002C5D] font-bold text-4xl'>In our stress laboratory, we provide exercise stress testing and all forms of nuclear stress testing in a nationally accredited facility</p>
      </div>
      <div className=' flex '>
        <div className="w-1/3">
          <img className='h-full object-cover' src={TestLabImage} alt="" />
        </div>
        <div className='text-[#002C5D] w-2/3 my-auto py-20 px-28'>
          <div className='flex justify-start items-start py-10' >
            <div className='w-1/3'>
              <TbHeartHandshake size={33} />
              <h2 className='font-bold'>Approach</h2>
            </div>
            <p className='text-sm w-2/3'>We offer efficient access to cardiometabolic testing you services. We are leaders in the rapid assessment of and cardiovascular risk factors and identifying efficient access to cardiometabolic atherosclerosis.</p>
          </div>
          <div className='flex justify-start items-start py-10 border-y ' >
            <div className='w-1/3'>
              <LiaStethoscopeSolid size={33} />
              <h2 className='font-bold'>Experts</h2>
            </div>
            <p className='text-sm w-2/3'>Our cardiovascular experts — cardiologists, vascular surgeons, radiologists, you nurse practitioners — work cardiovascular risk factors and identifying efficient together to provide you expert, compassionate care.</p>
          </div>
          <div className='flex justify-start items-start py-10' >
            <div className='w-1/3'>
              <PiScreencastBold size={33} />
              <h2 className='font-bold'>Technology</h2>
            </div>
            <p className='text-sm w-2/3'>Cardiac rehabilitation (CR) can slow or reverse the nurse progression of cardiovascular disease (CVD). E-cardiology, e-health and technology solutions for physical activity uptake and monitoring have evolved rapidly risk factors and have potential disease in CVD management.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestLab