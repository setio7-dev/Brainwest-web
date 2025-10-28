import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import example from '../../public/img/pic/community/1.png'
import profile1 from '../../public/img/pic/community/profile1.png'
import CommunityData from '../data/Community'

const Community = () => {
  const [communityData, setCommunityData] = useState(CommunityData)

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak - Komunitas"
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <section className='flex w-full bg-bg justify-center items-center lg:pt-[10vh] md:pt-[8vh] pt-[9vh]'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-center items-center pt-10 lg:pb-20 md:pb-20 pb-15'>
          <h1 data-aos="fade-down" className='font-poppins font-semibold text-gradient lg:text-[35px] md:text-[37px] text-[23px]'>Komunitas BrainWest</h1>
          <p data-aos="fade-down" className='font-poppins font-medium text-white text-center lg:text-[16px] md:text-[16px] text-[11px] lg:w-200 md:w-145 w-80 lg:mt-0 md:mt-3 mt-2'>Temukan komunitas yang sesuai dengan kebutuhan dan minatmu untuk mendukung kesehatan serta pengembangan otak secara menyeluruh. Bergabunglah dan tumbuh bersama!</p>
          <div className='flex flex-row flex-wrap w-full justify-between lg:gap-y-10 md:gap-y-10 gap-y-7 mt-10'>
            {communityData.map((community, i) => <div data-aos="zoom-in" key={i} className='flex flex-col gap-3 rounded-[8px] overflow-hidden items-center bg-white pb-4'>
              <img src={community.image} className='lg:w-120 md:w-85 w-full h-50 object-cover' alt="" />
              <div className='flex flex-col w-full items-center mt-7.5 lg:gap-0 md:gap-2 gap-1'>
                <h1 className='font-poppins font-bold text-blue-primary lg:text-[25px] md:text-[20px] text-[18px]'>{community.name}</h1>
                <p className='font-poppins font-medium text-gray lg:w-95 md:w-55 w-75 text-center lg:text-[14px] md:text-[12px] text-[13px]'>{community.desc}</p>
              </div>
              <img src={community.profile} className='absolute w-22 h-auto object-contain mt-37' alt="" />
              <a href={community.link} className='font-poppins font-semibold text-white text-[15px] rounded-[7px] mt-1 py-2 px-9 bg-gradient'>Gabung</a>
            </div> )}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Community
