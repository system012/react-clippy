import React, { useState, useRef, useEffect } from 'react';
import './createRoutes.css';

export const CreateNewRoutes = () => {
    const baseUrl = window.location.href
    const [newRoute, setNewRoute] = useState()
    const inputElement = useRef()
    const [inputValue, setInputValue] = useState('')
    const [qrURL, setQrURL] = useState()
    let base64Data = ''

    useEffect(() => {
        setQrURL(encodeURI(`https://chart.googleapis.com/chart?cht=qr&chs=250&choe=UTF-8chl=${newRoute}`))

    }, [newRoute])

    const handleClick = () => {
        const output = { time: Date.now(), value: inputValue }
        base64Data = btoa(JSON.stringify(output))
        setNewRoute(`${baseUrl}clipped/${base64Data}`)
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            {newRoute &&
                <div className='qrcode-center'>
                    <a href={newRoute}>
                        <figure>
                            <img src={qrURL} width="250" height="250" alt="QRCode" />
                        </figure>
                    </a>
                </div>
            }
            <p>
                <label><b>Scrivi qualcosa </b></label>
                <input ref={inputElement} onChange={(e) => handleOnChange(e)} type='text' name="data"></input>
                <button onClick={handleClick}>Submit</button>
            </p>
        </div>
    )
}