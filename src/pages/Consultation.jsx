import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from '../../public/img/pic/consultation/1.png'
import star from '../../public/img/icon/star-gray.png'
import camera from '../../public/img/icon/camera.png'
import ConsultationData from '../data/Consultations'

const Consultation = () => {
  const [consultations, setConsultations] = useState(ConsultationData)

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak - Konsultasi"
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <section className='flex w-full bg-bg justify-center items-center lg:pt-[10vh] md:pt-[8vh] pt-[9vh]'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-center items-center pt-10 lg:pb-20 md:pb-20 pb-15'>
            <h1 data-aos="fade-down" className='font-poppins font-semibold text-gradient lg:text-[35px] md:text-[37px] text-[23px]'>Konsultasi Dokter Otak</h1>
            <p data-aos="fade-down" className='font-poppins font-medium text-white text-center lg:text-[17px] md:text-[17px] text-[12px] lg:w-200 md:w-145 w-80 lg:mt-0 md:mt-3 mt-2'>Temukan dokter berpengalaman dan terpercaya untuk mendukung kesehatan Otak Anda. Konsultasi mudah, cepat, dan aman bersama para spesialis yang profesional.</p>
            <div className='flex flex-row flex-wrap w-full lg:justify-between md:justify-between justify-center pt-10 lg:gap-y-9 md:gap-y-9 gap-y-5'>
             {consultations.map((consul, i) =>  <div data-aos="flip-left" key={i} className='flex flex-col bg-white rounded-[10px] px-4 py-4 gap-2'>
                <div className='flex flex-row gap-3'>
                  <img src={consul.image} className='lg:w-20 md:w-22 w-22 h-auto object-contain' alt="" />
                  <div className='flex flex-col -gap-1'>
                    <div className='flex flex-row gap-1.5 items-center bg-[#D9D9D98C] rounded-[50px] py-0.5 px-2 w-fit'>
                      <img src={star} className='w-2.5 h-auto object-contain' alt="" />
                      <p className='font-poppins font-semibold lg:text-[10px] md:text-[12px] text-[11px] mt-0.5'>{consul.rating}</p>
                    </div>
                    <h1 className='font-poppins font-semibold lg:text-[22px] md:text-[25px] text-[25px] mt-1'>{consul.name}</h1>
                    <div className='flex flex-row items-center gap-2.5'>
                      <p className='font-poppins font-medium lg:text-[15.5px] md:text-[17px] text-[#5F5F5FB3]'>{consul.category}</p>
                      <p className='font-poppins font-medium text-white bg-gradient rounded-[50px] lg:text-[12px] md:text-[14px] text-[13px] py-0.5 px-3.5'>{consul.exp}</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row w-full items-center justify-between'>
                  <div className='flex flex-col gap-1 py-2'>
                    <h1 className='font-poppins font-semibold lg:text-[16px] md:text-[18px] text-[16px]'>Available Now</h1>
                    <div className='flex flex-row gap-2.5 items-center'>
                      <img src={camera} className='lg:w-4 md:w-4 w-4 h-auto object-contain' alt="" />
                      <p className='font-poppins font-medium text-[#00C010] lg:text-[13px] md:text-[15px] text-[13px]'>Konsultasi Video</p>
                    </div>
                  </div>
                  <hr className='h-12 border-[#D9D9D9] border-[1px]'/>
                  <div className='flex flex-col gap-1 py-2'>
                    <h1 className='font-poppins font-semibold lg:text-[16px] md:text-[18px] text-[16px]'>{consul.price}</h1>
                    <h1 className='font-poppins font-medium lg:text-[13px] md:text-[15px] text-[14px] text-[#7F7F7F]'>Biaya Konsultasi</h1>
                  </div>
                </div>
                <a href="https://wa.me/62895704440602" className='font-poppins font-semibold text-white text-[15px] text-center w-full bg-purple-primary rounded-[7.5px] py-3'>Chat Sekarang</a>
              </div>)}
            </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Consultation
