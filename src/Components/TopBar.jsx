import { BsTelephoneFill } from "react-icons/bs"
import { GoClockFill } from "react-icons/go"
import { IoCalendarSharp } from "react-icons/io5"

const TopBar = () => {
  return (
    <div className="bg-[#002C5D] flex justify-between px-32 items-center text-white text-sm py-2.5">
      <div className="flex gap-x-10">
        <p className="flex justify-center gap-x-2 items-center"><GoClockFill className="" /> Monday - Friday: 08:00 - 22:00</p>
        <p className="flex justify-center gap-x-2 items-center"><BsTelephoneFill /> 1-800-100-900</p>
      </div>
      <p className="flex justify-center items-center gap-x-2"><IoCalendarSharp /> Make an Appointment</p>
    </div>
  )
}

export default TopBar