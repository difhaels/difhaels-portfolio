import { useNavigate } from "react-router-dom";
import "./css/output.css";
import sentiBg from "./img/senti/senti-bg.png";
import home from "./img/icon/home.png";
import sosmed from "./img/icon/sosmed.png";
import project from "./img/icon/project.png";
import certificate from "./img/icon/certificate.png";
import profile from "./img/profile/agung.png"

export default function Main(){
    const navigate = useNavigate();
    const color = "custom-border1";
    return (
        <div className={`h-screen border-[20px] ${color} bg-[#432f59] z-0 `}>

            <div className="w-[70%] h-[85%] m-auto flex justify-center items-center gap-12">
                <div className="bg-[#272932] w-[30%] h-[50%] rounded-lg shadow-lg shadow-[#1AC5B0] z-20">
                    <img src={profile} alt="agung saputra" className="h-36 w-36 rounded-full m-auto mt-7"/>
                    <h1 className="text-white font-bold text-xl text-center pt-3">Agung Saputra</h1>
                    <h1 className="text-white text-center">Student</h1>
                    <div className="flex justify-center m-2">
                        <button className="bg-[#1AC5B0] px-5 py-2 text-white textl font-semibold rounded-sm">Download CV</button>
                    </div>
                </div>
                <div className="bg-[#272932] w-[50%] h-[50%] rounded-lg z-20">

                </div>
            </div>


            <div className="trapezoid1 fixed bottom-0  left-1/2 transform -translate-x-1/2 z-20"></div>
            <div className="trapezoid2 fixed bottom-0  left-1/2 transform -translate-x-1/2 z-10">

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


            <div className="fixed bottom-0  left-1/2 transform -translate-x-1/2 z-30">
                <img src={sentiBg} alt="senti-bg" className="w-64 2xl:w-96"/>
            </div>

        </div>
    )
}