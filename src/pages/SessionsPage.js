import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Sessions from '../components/Sessions/Sessions'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const SessionsPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle = {toggle}></Navbar>
            <Sidebar isOpen = {isOpen} toggle = {toggle}></Sidebar>
            <Sessions></Sessions>
            <Footer></Footer>
        </>    
    )
}

export default SessionsPage
