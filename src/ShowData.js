import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export const ShowData = () => {
    const standardTimer = 60

    const [time, value] = useOutletContext();
    const [timer, setTimer] = useState(standardTimer)
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {// setta il tempo rimanente alla scadenza del link e viene eseguito solo una volta quando visiti la pagina
        const timePassedSinceValueCreation = parseInt((Date.now() - new Date(time)) / 1000)
        const finalTimer = standardTimer - timePassedSinceValueCreation
        setTimer(finalTimer)
        if (finalTimer > 0) setIsActive(true)

    }, [time])

    useEffect(() => {// crea set interval che detrae 1 dal timer ogni secondo. Appena il timer arriva a 0 apparirà la scritta "Scaduto".
        let interval = null

        if (isActive) {
            interval = setInterval(() => {
                setTimer((timer) => timer - 1)
            }, 1000)
        }

        if (timer <= 0) setIsActive(false)

        return () => clearInterval(interval)

    }, [timer, isActive])

    return (
        <div>
            <header><h1>Clippy</h1></header>
            {isActive ? <div>
                <h2>Questo è il dato segreto: {value}</h2>
                <div>
                    <label>La pagina scadrà in: </label>
                    <h1 className="timer">  {timer}</h1>
                </div>
            </div>
                :
                <div>
                   <h2>Scaduto!</h2>
                </div>}
        </div>
    );
};
