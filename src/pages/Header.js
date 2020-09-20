import React from 'react'
import {Link}  from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <Link to="/register" className="h3">Register</Link>
            <Link to="/uppercase" className="h3">Uppercase</Link>
            <Link to="/bmicalculator" className="h3">BMI Calculator</Link>
            <Link to="/todos" className="h3">Todos</Link>
            </div>
        </nav>
    )
}
