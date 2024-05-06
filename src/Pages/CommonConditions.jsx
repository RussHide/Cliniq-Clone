import { useEffect, useState } from "react"
import { Condition, ConditionsTab } from "../Components"
import { LuHeartHandshake } from "react-icons/lu"
import { PiScreencastBold } from "react-icons/pi"
import ConditionOne from '@img/ConditionOne.jpg'
import ConditionTwo from '@img/ConditionTwo.jpg'
import ConditionThree from '@img/ConditionThree.jpg'
import ConditionFour from '@img/ConditionFour.jpg'
import ConditionFive from '@img/Stats.jpg'

const CommonConditions = () => {
  const [currentCondition, setCurrentCondition] = useState(1)
  const [selectedConditionData, setSelectedConditionData] = useState({ id: 1, title: 'Arrhythmia', descriptionOne: 'We work to be trusted by patients, a potential for health and valued partner in the community, and creators of positive change. A community in which all people achieve their full potential for health and well-being across the lifespan.', descriptionTwo: 'We use a team approach to providing health care, and involve the patient as part of our team. Involvement by our staff in the community enhances our ability to provide effective health care.', list: [{ id: 1, icon: <LuHeartHandshake />, description: 'For everyday care or life-changing care, you can count on us to keep you and loved ones and healthy.' }, { id: 2, icon: <PiScreencastBold />, description: 'You can count on us to keep you and your loved ones safe and healthy. Our team of expert prominent physicians.' }] })
  const conditionsData = [
    {
      id: 1, title: 'Arrhythmia',
      descriptionOne: 'We work to be trusted by patients, a potential for health and valued partner in the community, and creators of positive change. A community in which all people achieve their full potential for health and well-being across the lifespan.',
      descriptionTwo: 'We use a team approach to providing health care, and involve the patient as part of our team. Involvement by our staff in the community enhances our ability to provide effective health care.',
      list: ['Weakness', 'Fainting', 'Heart failure'],
      url: ConditionOne
    },
    {
      id: 2, title: 'Atherosclerosis',
      descriptionOne: 'Atherosclerosis is thickening or hardening of the arteries caused by a buildup of plaque in the inner lining of an artery. Can cause a heart attack, stroke, aneurysm, or blood clot.',
      descriptionTwo: 'Atherosclerosis is the buildup of fats, cholesterol and other substances in and on your artery walls. This buildup is called plaque. The plaque can cause your arteries to narrow, blocking blood flow. The plaque can also burst, leading to a blood clot.',
      list: ['Chest Pain', 'Fatigue', 'Shortness of breath'],
      url: ConditionTwo
    },
    {
      id: 3, title: 'Cardiomyopathy',
      descriptionOne: 'Cardiomyopathy causes the heart to lose its ability to pump blood well. In some cases, the heart rhythm also becomes disturbed. This leads to irregular heartbeats (arrhythmias).',
      descriptionTwo: 'Viral infections in the heart are a major cause of cardiomyopathy. In some cases, another disease or its treatment can cause for the cardiomyopathy. This might include complex heart disease that’s present at birth (congenital).',
      list: ['High blood pressure', 'Viral infections', 'Muscle disorders'],
      url: ConditionThree
    },
    {
      id: 4, title: 'Congenital heart defects',
      descriptionOne: 'A congenital heart defect (CHD) is a heart problem that a baby has at birth. It is caused by abnormal formation of the heart during growth in the womb. There is no known reason for it.',
      descriptionTwo: 'Most cases of congenital heart defect have no known cause. But some types of congenital heart defects occur more often when the mother comes in contact with some types of dangerous substances in the first few weeks of her pregnancy.',
      list: ['Chest Pain', 'Lupus', 'Connective tissue disorder'],
      url: ConditionFour
    },
    {
      id: 5, title: 'Atherosclerosis',
      descriptionOne: 'Rheumatic heart disease is a condition where the heart valves have been permanently damaged by rheumatic fever. The heart valve damage may start shortly after untreated infection.',
      descriptionTwo: 'Untreated or under-treated strep infections can increase the risk for rheumatic heart disease. This may take years to develop and can lead to heart failure. Rheumatic fever can occur at any age. But it often occurs in children ages 5 to 15.',
      list: ['Fever', 'Chest discomfort', 'Swelling'],
      url: ConditionFive
    }
  ]

  useEffect(() => {
    setSelectedConditionData(conditionsData[Number(currentCondition) - 1])
  }, [currentCondition])


  return (
    <div className="container mx-auto bg-[#F3F3F3] ">
      <div className="flex justify-center w-full px-14 items-end">
        <ConditionsTab setCurrentCondition={setCurrentCondition} keyPosition='1' title="Arrhythmia" />
        <ConditionsTab setCurrentCondition={setCurrentCondition} keyPosition='2' title="Atherosclerosis" />
        <ConditionsTab setCurrentCondition={setCurrentCondition} keyPosition='3' title="Cardiomyopathy" />
        <ConditionsTab setCurrentCondition={setCurrentCondition} keyPosition='4' title="Congenital heart defects" />
        <ConditionsTab setCurrentCondition={setCurrentCondition} keyPosition='5' title="Heart infections" />
      </div>
      <div className="px-14 pb-14 rounded-lg">
        {Object.keys(selectedConditionData).length > 0 && <Condition selectedConditionData={selectedConditionData} />}
      </div>
    </div>
  )
}

export default CommonConditions