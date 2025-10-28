import React from 'react'
import github from '../../public/img/icon/github.png'
import drible from '../../public/img/icon/drible.png'
import facebook from '../../public/img/icon/facebook.png'
import tweeter from '../../public/img/icon/tweeter.png'
import iphone from '../../public/img/pic/iphone.png'
import google from '../../public/img/pic/google.png'

const Footer = () => {
  return (
    <section className='flex w-full justify-center bg-purple-thirdtinary lg:py-10 md:py-10 py-7'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:gap-10 md:gap-10 gap-5'>
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex flex-col lg:w-80 md:w-65 w-full gap-2'>
                    <h1 className='font-poppins font-bold text-gradient lg:text-[40px] md:text-[33px] text-[35px]'>BrainWest</h1>
                    <p className='font-poppins font-normal text-white lg:text-[14px] md:text-[11px] text-[12px]'>Membantu Anda memahami dan menjaga kesehatan otak melalui edukasi, teknologi AI, dan layanan konsultasi saraf terpercaya.</p>
                    <div className='flex flex-row gap-4.5 mt-2.5'>
                        <img src={drible} className='w-5.5 h-auto object-contain' alt="" />
                        <img src={github} className='w-5.5 h-auto object-contain' alt="" />
                        <img src={tweeter} className='w-5.5 h-auto object-contain' alt="" />
                        <img src={facebook} className='w-5.5 h-auto object-contain' alt="" />
                    </div>
                </div>
                <div className='lg:flex md:flex hidden flex-row lg:gap-12 md:gap-5 lg:mt-8 md:mt-4'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[14px]'>Nomor Telepon</h1>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>+62 1297786651</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[14px]'>Tentang Kami</h1>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Our Service</p>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Our Clinics</p>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Dentist</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[14px]'>Lokasi</h1>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Career</p>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Privacy Policy</p>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Location</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[14px]'>Sosial Media</h1>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Twitter</p>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Instagram</p>
                        <p className='font-poppins font-normal text-white lg:text-[12.5px] md:text-[11.5px]'>Facebook</p>
                    </div>
                </div>
            </div>
            <hr className='w-full border-[1px] border-white'/>
            <div className='flex flex-row w-full justify-between'>
                <div className='flex flex-col gap-3 lg:w-auto md:w-auto w-full'>
                    <p className='font-poppins font-medium text-white text-[16px]'>Get the app</p>
                    <div className='flex flex-row lg:gap-6 md:gap-6 lg:justify-start md:justify-start justify-between'>
                        <img src={iphone} className='lg:w-38 md:w-30 w-[42vw] h-auto object-contain' alt="" />
                        <img src={google} className='lg:w-38 md:w-30 w-[42vw] h-auto object-contain' alt="" />
                    </div>
                </div>
                <div className='lg:flex md:flex hidden flex-row lg:gap-12 md:gap-7 lg:mr-8'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[14px]'>Jam Operasional</h1>
                        <p className='font-poppins font-medium text-white lg:text-[12.5px] md:text-[11.5px] lg:w-26 md:w-30'>Klinik Kami Buka 06 AM - 18 PM</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-poppins font-semibold text-white lg:text-[16px] md:text-[14px]'>Lokasi</h1>
                        <p className='font-poppins font-medium text-white lg:text-[12.5px] md:text-[11.5px] lg:w-60 md:w-55'>Ruko Pisa Grande B no 7, Paramount Boulevard, Tangerang, Banten 15810</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
