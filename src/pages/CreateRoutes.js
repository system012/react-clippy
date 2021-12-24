import React, { useState, useEffect } from 'react';
import { QrElement } from '../components/QrElement';


export const CreateNewRoutes = () => {
    const baseUrl = window.location.href
    const [newRoute, setNewRoute] = useState()
    const [inputValue, setInputValue] = useState('')
    const [qrURL, setQrURL] = useState()

    useEffect(() => {
        setQrURL(encodeURI(`https://chart.googleapis.com/chart?cht=qr&chs=250&chl=${newRoute}`))

    }, [newRoute])

    const handleClick = () => {
        const output = { time: Date.now(), value: inputValue }
        const base64Data = btoa(JSON.stringify(output))
        setNewRoute(`${baseUrl}clipped/${base64Data}`)
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <header><h1>Welcome to Clippy!</h1></header>
            {newRoute &&
                <QrElement href={newRoute} imageSrc={qrURL} />
            }
            <p>
                <label for="data"><strong>Scrivi qualcosa </strong></label>
                <input onChange={(e) => handleOnChange(e)} type="text" name="data"></input>
                <button onClick={handleClick}>Submit</button>
            </p>
        </>
    )
}