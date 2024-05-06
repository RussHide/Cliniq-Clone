import { GoDotFill } from "react-icons/go"

const Condition = ({ selectedConditionData }) => {
    const { url, descriptionOne, descriptionTwo, title, list } = selectedConditionData
    return (
        <div className="p-10 flex justify-center items-center bg-white rounded-lg shadow-lg">
            <div className="w-1/2 pr-14">
                <h2 className="font-bold text-[#002C5D] text-3xl mb-10">{title}</h2>
                <p className="font-bold mb-5 text-[#002C5D]">{descriptionOne}</p>
                <p className="text-gray-400 ">{descriptionTwo}</p>
                <p className="my-5">Usual Symptoms:</p>
                <ul>
                    {list.map(item => <li key={item} className="flex justify-start items-center gap-x-1.5"> <GoDotFill /> {item}</li>)}
                </ul>
                <button className="bg-[#3AC1EC] tradu hover:bg-[#002C5D]  text-white font-semibold w-fit px-10 py-3 rounded-md mt-5">READ MORE</button>
            </div>
            <div className="w-1/2 flex justify-center items-center ">
                <img src={url} className=" rounded-lg" alt="" />
            </div>
        </div>
    )
}

export default Condition