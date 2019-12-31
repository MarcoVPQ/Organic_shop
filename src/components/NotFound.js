import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => (
    <div style={{ background: "#fff", height: '30rem' }} className="p-4 mt-2 text-center ">
        <h1 className="mt-5">Opps! parece que te perdiste</h1>
        <Link to="/products" className="btn btn-info mt-5">Volver a casa</Link>
    </div>
)

export default NotFound