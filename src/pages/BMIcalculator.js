import React, { useState } from 'react'

export default function BMIcalculator() {
    const [bmi, setBmi] = useState("");
    const [data, setData] = useState({
        weightKg: 0,
        heightM: 0
    })

    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
        setBmi(Number(data.weightKg/Math.pow(data.heightM, 2)))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bmi)
        if (bmi < 18.5){
            alert('berat badan kurang')
        } else if (bmi >= 18.5 && bmi <= 22.9){
            alert('berat badan normal')
        } else if (bmi >= 23.9 && bmi <=29.9){
            alert('berat badan berlebih')
        } else if (bmi >=30) {
            alert('obesitas')
        } else {
            alert ("yah error")
        }
    }
    return (
        <div>

        <h1>BMI Calculator</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Input Your Weight:
                    <input type="text" 
                    name="weightKg" onChange={handleChange}
                    />
                </label>
                <label>
                    Input Your Height (in meter):
                    <input type="text" 
                    name="heightM" onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Calculate!</button>
            </form>
        </div>
    )
}
