import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Portfolio from '../components/Portfolio/Portfolio'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const PortfolioPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }    

    return (
        <>
            <Navbar toggle = {toggle}></Navbar>
            <Sidebar isOpen = {isOpen} toggle = {toggle}></Sidebar>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </>    
    )
}

export default PortfolioPage
