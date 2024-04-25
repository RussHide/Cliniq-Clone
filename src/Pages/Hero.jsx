import { IoArrowForwardCircleOutline } from "react-icons/io5"

const Hero = () => {
  return (
    <div className="flex w-full container mx-auto">
      <div className="w-1/2">
        <h2>Move Toward Proactive Care</h2>
      </div>
      <div className="w-1/2">
        <p>We are dedicated to excellence in patient care, patient safety and the quality of the reliably healthcare experience. Our clinic provides high quality service.</p>
        <p className="flex items-center">List of Services <IoArrowForwardCircleOutline /> </p>
      </div>
    </div>
  )
}

export default Hero