import { FiFacebook } from "react-icons/fi"

const ConditionsTab = ({ icon: Icon, title, setCurrentCondition, keyPosition, currentCondition }) => {
    console.log(currentCondition);
    return (
        <div onClick={() => setCurrentCondition(keyPosition)} className={`${keyPosition === currentCondition ?  'bg-white' : 'bg-transparent'} flex flex-col justify-center items-center hover:cursor-pointer hover:bg-white tradu pt-8 pb-3 w-full`}>
            {Icon ? <Icon /> : <FiFacebook size={44} />}
            <p className="font-semibold text-[#002C5D] text-center">{title}</p>
        </div>
    )
}

export default ConditionsTab