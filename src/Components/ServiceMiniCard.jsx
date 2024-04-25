
const ServiceMiniCard = ({icon: Icon,description }) => {
  return (
    <div className="border border-gray-200 p-8 hover:shadow-lg rounded-lg transition-shadow duration-300">
      <Icon className="mb-3 stroke-[#3AC1EC]"/>
      <p className="text-[#002C5D] hover:cursor-default font-extrabold text-sm">{description}</p>
    </div>
  )
}

export default ServiceMiniCard