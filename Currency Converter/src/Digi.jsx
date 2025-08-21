import { useEffect, useState } from "react";
import "./App.css";
const Digi = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Digit corrector
    const beforeZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    // Hour Formater
    const formattime = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }

    // Day formatter 
    const formatDate = (date) =>{
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
    return (
        <>
            <div className="box">
                <h3>Digital Clock</h3>
                <div className="time">
                    {beforeZero(formattime(currentTime.getHours()))}:{formattime(currentTime.getMinutes())}:{beforeZero(formattime(currentTime.getSeconds()))} {currentTime.getHours() < 12 ? "AM" : "PM" }
                </div>
                <div className="day">
                    {formatDate(currentTime)}
                </div>
            </div>
        </>
    )
};
export default Digi;