import React from 'react'
import {Link}  from 'react-router-dom'

export default function Header() {
    return (
            <div className="row col-12 d-flex justify-content-center text-white">
            <Link to="/home" className="h3">Home</Link>
            <Link to="/register" className="h3">Register</Link>
            <Link to="/uppercase" className="h3">Uppercase</Link>
            <Link to="/bmicalculator" className="h3">BMI Calculator</Link>
            <Link to="/todos" className="h3">Todos</Link>
            </div>
    )
}
