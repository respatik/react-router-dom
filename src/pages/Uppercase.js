import React, {useState} from 'react'

export default function Uppercase() {
    const [text, setText] = useState ("")

    const handleChange = (e) => {
        setText({
            ...text, [e.target.name]:e.target.value.toUpperCase()
        })
    }

    const handelClick = (e) => {
        e.preventDefault()
        alert(JSON.stringify(text))
    }

    return (
        <div>
            <h1>To Upper Case</h1>
            <label>Input Text</label>
            <textarea name="text" id="text" cols="30" rows="2" onChange={handleChange} ></textarea> <br/> <br/>
            <button onClick={handelClick} type="submit">Submit</button>
        </div>
    )
}
