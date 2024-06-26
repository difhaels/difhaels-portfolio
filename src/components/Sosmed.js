import { useNavigate } from "react-router-dom";
import './css/output.css';
import home from './img/icon/home.png';
import sosmed from './img/icon/sosmed.png';
import project from './img/icon/project.png';
import certificate from './img/icon/certificate.png';

export default function Sosmed(){
    const navigate = useNavigate();

    return (
        <div className="h-screen border-[20px] border-[#FDF500] bg-[#272932] z-0">

            <div className='text-center'>
                <h1 className="text-5xl text-white">Sosmed</h1>
            </div>


            <div className='trapezoid1 fixed bottom-0  left-1/2 transform -translate-x-1/2 z-20'></div>
            <div className='trapezoid2 fixed bottom-0  left-1/2 transform -translate-x-1/2 z-10'>

                <div className="w-full flex justify-between fixed -bottom-[55px] z-40">
                    <div className="flex">
                        <img src={home} alt="home" className="w-10 mr-6 nav-icon" onClick={() => navigate("/")}/>
                        <img src={sosmed} alt="sosmed" className="w-9 h-9 nav-icon" onClick={() => navigate("/Sosmed")}/>
                    </div>
                    <div className="flex">
                        <img src={project} alt="project" className="w-9 nav-icon" onClick={() => navigate("/Project")}/>
                        <img src={certificate} alt="certificate" className="w-9 h-9 ml-6 nav-icon" onClick={() => navigate("/Certificate")}/>
                    </div>
                </div>
            </div>
        </div>
    )
};