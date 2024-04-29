import { FaCircleCheck } from "react-icons/fa6"

const TreatmentsCard = ({ icon: Icon, title, description, list }) => {
  return (
    <div className="p-5 bg-white rounded-md w-full md:max-w-[260px] md:max-h-[446px]">
      <Icon className='text-[#3AC1EC] mb-2' size={40} />
      <p className="text-[#002C5D] font-semibold mb-4">{title}</p>
      <p className="text-gray-400 text-xs font-semibold border-t border-gray-400 py-4">{description}</p>
      <ul>
        {list.map(item => (<li className=" flex justify-start items-center gap-x-1.5 text-gray-400" key={item}> <FaCircleCheck className="text-[#3AC1EC]" /> {item}</li>))}
      </ul>
      <button className="bg-[#3AC1EC] tradu hover:bg-[#002C5D]  text-white font-semibold w-full py-3 rounded-md mt-10">READ MORE</button>
    </div>
  )
}

export default TreatmentsCard