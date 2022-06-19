import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle = {toggle}></Navbar>
            <Sidebar isOpen = {isOpen} toggle = {toggle}></Sidebar>
            <Hero></Hero>
            <Footer></Footer>
        </>    
    )
}

export default HomePage
