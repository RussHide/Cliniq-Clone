import { FaTwitter, FaWhatsapp } from "react-icons/fa"


const TeamCard = ({ img, name, role }) => {
    return (
        <div className="bg-white pt-3 shadow hover:shadow-md transition-all duration-300 pb-4 flex flex-col justify-center items-center w-fit rounded-lg">
            <img className="w-[90%] h-[90%] rounded" src={img} alt="" />
            <p className="font-bold text-[#3AC1EC] text-center mt-2 text-xs">{role}</p>
            <p className="font-bold text-[#002C5D] text-center text-lg mb-4">{name}</p>
            <div className="flex justify-center items-center gap-x-4">
                <div className="border border-[#3AC1EC] group hover:bg-[#3AC1EC] tradu rounded-full p-2 hover:cursor-pointer"><FaTwitter className="tradu group-hover:text-white text-[#3AC1EC]" /></div>
                <div className="border border-[#3AC1EC] group hover:bg-[#3AC1EC] tradu rounded-full p-2 hover:cursor-pointer"><FaWhatsapp className="tradu group-hover:text-white text-[#3AC1EC]" /></div>
            </div>
        </div>
    )
}

export default TeamCard