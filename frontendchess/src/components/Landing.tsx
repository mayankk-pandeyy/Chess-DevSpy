import { useEffect, useState } from "react"
import chessImg from "../assets/chess.png"
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const [gameToday, setGameToday] = useState(0);
    const [playersToday, setPlayersToday] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        let gameCount = Math.floor(Math.random()*10000);
        let playersCount = Math.floor(Math.random()*10000);
        setGameToday(gameCount);
        setPlayersToday(playersCount);
    }, [])

    return (
        <div className="w-[100vw] py-5 min-h-screen overflow-y-scroll bg-[#302E2B] xl:flex items-center">
            <div className="w-[80%] md:w-[90%] mx-auto flex flex-col md:flex-row gap-[40px] justify-between items-center">
                {/* Left */}
                <div className="w-[100%] md:w-[40%] xl:w-[50%] flex justify-center items-center">
                    <div className="">
                        <img src={chessImg}/>
                    </div>
                </div>
                {/* Right */}
                <div className=" w-[100%] md:w-[50%] xl:w-[40%] flex flex-col gap-[20px] justify-between">
                    <div className="text-white text-3xl sm:text-5xl md:text-4xl font-extrabold font-mont">
                        Play Chess Online on the #1 site!
                    </div>
                    <div className="mx-auto w-full flex justify-between text-[#FFF0BD] font-mont text-[15px] sm:text-3xl">
                        <div className="text-center">
                            <span className="text-[#F6F0F0]">{gameToday}</span> <br/>Games Today
                        </div>
                        <div className="text-center">
                            <span className="text-[#F6F0F0]">{playersToday}</span> <br/>Playing Now
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={()=> navigate("/game")}>
                        <Button text={"Play Online"} subtext={"Play with someone at your level"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing