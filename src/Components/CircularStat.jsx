
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularStat = ({ value, text }) => {
    return (
        <div className='max-w-44'>
            <CircularProgressbar value={value} text={`${value}%`} />
            <p className='mt-3 font-bold text-sm text-[#002C5D] text-center'>{text}</p>
        </div>
    )
}

export default CircularStat