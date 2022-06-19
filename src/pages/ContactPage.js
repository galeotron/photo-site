import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const ContactPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle = {toggle}></Navbar>
            <Sidebar isOpen = {isOpen} toggle = {toggle}></Sidebar>
            <Contact></Contact>
            <Footer></Footer>
        </>    
    )
}

export default ContactPage
