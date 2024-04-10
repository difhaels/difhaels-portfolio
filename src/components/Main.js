import { useNavigate } from "react-router-dom";
import './css/output.css';
import sentiBg from './img/senti-bg.png';

export default function Main(){
    const navigate = useNavigate();
    return (
        <div className="h-screen border-[20px] border-[#CB1DCD]">

            <div className='text-center'>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <button onClick={() => navigate("Project")}> Project</button>
            </div>


            <div className='trapezoid border-[#CB1DCD] fixed bottom-0  left-1/2 transform -translate-x-1/2 z-10'></div>
            <div className='fixed bottom-0  left-1/2 transform -translate-x-1/2 z-10'>
                <img src={sentiBg} alt='senti-bg' className='w-64 2xl:w-96'/>
            </div>
        </div>
    )
}