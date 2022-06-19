import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const AboutPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle}></Navbar>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <About></About>
            <Footer></Footer>
        </>    
    )
}

export default AboutPage
