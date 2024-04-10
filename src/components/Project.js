import { useNavigate } from "react-router-dom";
import './css/output.css';

export default function Project(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>Test aha Project</h1>
            <button onClick={() => navigate("/")}> back</button>
        </div>
    )
};