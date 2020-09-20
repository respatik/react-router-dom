import React, {useState} from 'react'

export default function Register() {
    const [user, setUser] = useState ({
        nama: "",
        email:"",
        password:"",
        alamat: "",
        tanggalLahir: "",
    })

    const [checkBox, setCheckBox] = useState([
        {isChecked:false, checkLabel: "Coding"},
        {isChecked:false, checkLabel: "Design"},
        {isChecked:false, checkLabel: "Gaming"},
        {isChecked:false, checkLabel: "Rebahan"}
    ]);

    
    const [gender, setGender] = useState("");

    const handleCheck = (itemCheck) => {
        itemCheck.isChecked = !itemCheck.isChecked

        let newDataCheck = [...checkBox]

        setCheckBox(newDataCheck)
    }

    const handleChange = (e) => {
        setUser ({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handelClick = (e) => {
        e.preventDefault()
        alert(JSON.stringify(user))
        alert(JSON.stringify(checkBox))
        alert(JSON.stringify(gender))
    }

    return (
        <div>
            <h1>Register Form</h1>
            <form action="">
                {/* input text */}
            <label htmlFor="">Nama:</label>
            <input type="text" name="nama" onChange={handleChange} /> <br/> <br/>
            <label for="email">Email:</label>
            <input type="email" name="email" onChange={handleChange} /> <br/> <br/>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" onChange={handleChange} /> <br/> <br/>
            <label for="address">Alamat:</label>
            <textarea name="Alamat" id="address" cols="30" rows="2" onChange={handleChange} ></textarea> <br/> <br/>
            <label for="birthdate">Tanggal Lahir:</label>
            <input type="date" name="tanggal-lahir" id="birthdate" onChange={handleChange} /> <br/> <br/>
                {/* input radio  */}
            <label for="gender">Jenis Kelamin:</label>
            <input type="radio" checked={gender === "Pria"} onChange={() =>setGender("Pria")} name="Pria" id="pria" />
            <label htmlFor="">Pria</label>
            <input type="radio" checked={gender === "Wanita"} onChange={() =>setGender("Wanita")} name="Wanita" id="wanita" />
            <label htmlFor="">Wanita</label>
                 <br/> <br/>
            <label for="skill">Skill:</label>
                {checkBox.map((item, index) => (
                    <div key={index}>
                        <input onChange={() => handleCheck(item)}
                        type="checkbox" name="skill" defaultChecked={item.isChecked} />
                        <label>{item.checkLabel}</label>
                    </div>
                ))}
                 <br/> <br/>
            <button onClick={handelClick} type="submit">Submit</button>
            </form>
        </div>
    )
}
