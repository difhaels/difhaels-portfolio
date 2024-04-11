import { useNavigate } from "react-router-dom";
import './css/output.css';
import sentiBg from './img/senti-bg.png';
import home from './img/home.png';
import sosmed from './img/sosmed.png';
import project from './img/project.png';
import certificate from './img/certificate.png';

export default function Main(){
    const navigate = useNavigate();
    return (
        <div className="h-screen border-[20px] border-[#FDF500] bg-[#272932] z-0">

            <div className='text-center'>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <h1 className='text-5xl'>Hello</h1>
                <button onClick={() => navigate("Project")}> Project</button>
            </div>


            <div className='trapezoid1 fixed bottom-0  left-1/2 transform -translate-x-1/2 z-20'></div>
            <div className='trapezoid2 fixed bottom-0  left-1/2 transform -translate-x-1/2 z-10'>

                <div className="w-full flex justify-between fixed -bottom-[55px] z-40">
                    <div className="flex">
                        <img src={home} alt="home" className="w-10 mr-6"/>
                        <img src={sosmed} alt="sosmed" className="w-10"/>
                    </div>
                    <div className="flex">
                        <img src={project} alt="project" className="w-10"/>
                        <img src={certificate} alt="certificate" className="w-10 ml-6"/>
                    </div>
                </div>

            </div>


            <div className='fixed bottom-0  left-1/2 transform -translate-x-1/2 z-30'>
                <img src={sentiBg} alt='senti-bg' className='w-64 2xl:w-96'/>
            </div>

        </div>
    )
}