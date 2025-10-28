import React, { useEffect } from 'react'
import logo from '../../public/img/logo/logo.svg'
import hamburger from "../../public/img/icon/hamburger.png";
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const handleNavClick = (id) => {
    if (location.pathname != '/') navigate(`/?scrollTo=${id}`)
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5
      }
    )

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className='fixed flex w-full lg:h-[11vh] md:h-[9vh] h-[9vh] justify-center items-center bg-bg border-[1px] border-b-[#ACACAC4D] z-99'>
      <nav className='container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center'>
        <Link to="/">
          <div className='flex flex-row gap-3 cursor-pointer'>
            <img src={logo} className='lg:w-10 md:w-9 w-6 h-auto object-contain' alt="" />
             <h1 className='font-poppins font-bold text-gradient lg:text-[25px] md:text-[25px] text-[20px]'>BrainWest</h1>
          </div>
        </Link>
        <div className={`lg:flex lg:flex-row md:hidden hidden gap-8 `}>
            <a onClick={() => handleNavClick('home')} className={`cursor-pointer font-poppins text-white text-[15px] ${activeSection == 'home' ? 'font-semibold' : "font-normal"}`}>Beranda</a>
            <a onClick={() => handleNavClick('about')} className={`cursor-pointer font-poppins text-white text-[15px] ${activeSection == 'about' ? 'font-semibold' : "font-normal"}`}>Tentang Kami</a>
            <a onClick={() => handleNavClick('service')} className={`cursor-pointer font-poppins text-white text-[15px] ${activeSection == 'service' ? 'font-semibold' : "font-normal"}`}>Fitur unggulan</a>
            <a onClick={() => handleNavClick('testimonial')} className={`cursor-pointer font-poppins text-white text-[15px] ${activeSection == 'testimonial' ? 'font-semibold' : "font-normal"}`}>Testimoni</a>
        </div>
        <div className='lg:flex md:hidden hidden flex-row gap-3'>
          <a onClick={() => handleNavClick('location')} className='cursor-pointer font-poppins font-semibold text-white rounded-[50px] text-[13px] px-4 py-1.5 shadow-[0px_1px_6px_rgba(47,128,237,0.5)]'>Lokasi</a>
          <a onClick={() => handleNavClick('booking')} className='cursor-pointer font-poppins font-semibold text-white rounded-[50px] bg-blue-primary text-[13px] px-4 py-1.5'>Pesan</a>
        </div>
        <div className={`lg:hidden md:flex flex flex-col transition-transform duration-500 ease-in-out ${isMenuOpen == true ? "translate-x-0" : 'translate-x-full'} lg:relative md:absolute absolute right-0 top-0 lg:h-auto md:h-screen h-screen lg:justify-start bg-bg lg:gap-8 md:gap-5 gap-3 lg:px-0 md:px-6 px-6 lg:pt-0 md:pt-[18vh] pt-[17vh]`}>
            <a onClick={() => handleNavClick('home')} className={`cursor-pointer font-poppins text-white lg:text-[15px] md:text-[15px] text-[14px] ${activeSection == 'home' ? 'font-semibold' : "font-normal"}`}>Beranda</a>
            <a onClick={() => handleNavClick('about')} className={`cursor-pointer font-poppins text-white lg:text-[15px] md:text-[15px] text-[14px] ${activeSection == 'about' ? 'font-semibold' : "font-normal"}`}>Tentang Kami</a>
            <a onClick={() => handleNavClick('service')} className={`cursor-pointer font-poppins text-white lg:text-[15px] md:text-[15px] text-[14px] ${activeSection == 'service' ? 'font-semibold' : "font-normal"}`}>Fitur unggulan</a>
            <a onClick={() => handleNavClick('testimonial')} className={`cursor-pointer font-poppins text-white lg:text-[15px] md:text-[15px] text-[14px] ${activeSection == 'testimonial' ? 'font-semibold' : "font-normal"}`}>Testimoni</a>
          <div className='flex lg:flex-col md:flex-row flex-row md:mt-7 mt-5 md:gap-5 gap-4'>
            <a onClick={() => handleNavClick('location')} className='cursor-pointer self-center font-poppins font-semibold text-white rounded-[50px] md:text-[14px] text-[10px] px-4 py-1.5 shadow-[0px_1px_6px_rgba(47,128,237,0.5)]'>Lokasi</a>
            <a onClick={() => handleNavClick('booking')} className='cursor-pointer self-center font-poppins font-semibold text-white rounded-[50px] bg-blue-primary md:text-[14px] text-[10px] px-4 py-1.5'>Pesan</a>
          </div>
        </div>
        <img src={hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden md:flex flex md:w-8 w-6 z-10 transition-transform duration-500 ease-in-out  ${isMenuOpen == true ? 'rotate-90' : 'rotate-0'}`} alt="" />
      </nav>
    </div>
  )
}

export default Navbar
