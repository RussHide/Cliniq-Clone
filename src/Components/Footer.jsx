import FooterImage from '@img/FooterIcon.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail, MdPhone } from "react-icons/md"

const Footer = () => {
    return (
        <div className="bg-[#002C5D] text-white py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 mb-5 gap-x-10">
                    <div className='flex flex-col justify-between'>
                        <img src={FooterImage} className='w-fit' alt="" />
                        <p className='text-sm'>We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h2 className='mb-5'>Services</h2>
                        <ul className='text-sm'>
                            <li>Business Planning</li>
                            <li>Feasibility Study</li>
                            <li>Startup Funding</li>
                            <li>Business Plan Review</li>
                            <li>Investor Presentation</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h2 className='mb-5'>Pricing & Fees</h2>
                        <ul className='text-sm'>
                            <li>Compare Insurance Plans</li>
                            <li>Standard Plan – $499</li>
                            <li>Plus Plan – $799</li>
                            <li>Premium Plan – $999</li>
                            <li>Pro Plan – $1399</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-2.5'>Connect</h2>
                        <div className='flex justify-start items-center gap-x-2 mb-2.5'>
                            <div className='border border-white rounded-full p-1.5'><FaFacebookF size={15} /></div>
                            <div className='border border-white rounded-full p-1.5'><FaTwitter size={15} /></div>
                            <div className='border border-white rounded-full p-1.5'><FaInstagram size={15} /></div>
                            <div className='border border-white rounded-full p-1.5'><FaLinkedinIn size={15} /></div>
                        </div>
                        <ul className='text-sm'>
                            <li className='flex gap-2 justify-start items-center'><MdPhone size={15} /> 1-800-1-900</li>
                            <li className='flex gap-2 justify-start items-center'><MdEmail size={15} /> info@gmail.com</li>
                            <li className='flex gap-2 justify-start items-center'><FaLocationDot size={15} /> 60 East 65th Street, New York</li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between items-center pt-5 border-t border-gray-300 text-sm'>
                    <p>©2021 CLINIQ-CLONE. All rights reserved</p>
                    <div className='flex justify-between items-center gap-x-5'>
                        <p className='underline'>Privacy Policy</p>
                        <p className='underline'>Cookie Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer