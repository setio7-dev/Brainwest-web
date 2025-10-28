import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import cloud from '../../public/img/icon/cloud.png'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Detection = () => {
  const inputFile = useRef(null)
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak - Deteksi"
  })

  const handleInputFile = () => {
    inputFile.current.click()
  }

  const handlePost = async () => {
    Swal.fire({
      title: "Sedang mendeteksi...",
      text: "Mohon tunggu sebentar",
      llowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    try {
      const formData = new FormData();
      formData.append("image", file);

      const rsp = await axios.post('https://rayzen7-brain-detection.hf.space/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        },
      })

      const { label, confidence } = rsp.data

      Swal.fire({
          icon: 'success',
          title: 'Deteksi Selesai!',
          html: `Lihat hasil deteksi`,
          confirmButtonText: 'Lanjutkan'
        }).then(() => {
          navigate('/detection/result', {state: { label, confidence }})
      })

    } catch (err) {
      console.log(err)
      Swal.fire("Gagal", "Terjadi kesalahan saat mendeteksi gambar.", "error")
    }
  }

  return (
    <div>
        <Navbar/>
        <section className='flex w-full bg-bg justify-center lg:pt-[10vh] md:pt-[8vh] pt-[9vh]  lg:pb-20 md:pb-20 pb-15'>
            <div className='container flex flex-col lg:w-250 md:w-250 w-full lg:px-0 md:px-5 px-5 pt-10 items-center gap-2'>
              <h1 data-aos="fade-down" className='font-poppins font-semibold text-gradient lg:text-[35px] md:text-[37px] text-[25px]'>Scan Tumor Otak</h1>
              <p data-aos="fade-down" className='font-poppins font-medium text-white text-center lg:text-[16px] md:text-[16px] text-[11px] lg:w-173.5 md:w-full'>Temukan potensi risiko tumor otak lebih awal dengan pemindaian berbasis AI. Proses cepat, aman, dan akurat bersama teknologi canggih dan tenaga medis terpercaya.</p>
              <div className='flex flex-col items-start self-start gap-1 w-full lg:mt-10 md:mt-10 mt-6'>
                <h1 data-aos="fade-right" className='font-poppins font-semibold text-white lg:text-[20px] md:text-[20px] text-[16px]'>Unggah Media</h1>
                <p data-aos="fade-right" className='font-poppins font-normal text-white lg:text-[16px] md:text-[16px] text-[12px]'>Tambahkan Foto Anda.</p>
                <img src={file == null ? null : URL.createObjectURL(file)} className={`${file == null ? 'hidden' : 'flex'} w-full lg:h-140 md:h-140 h-80 mt-5 rounded-[10px] object-cover`} alt="" />
                <div data-aos="zoom-in" onClick={handleInputFile} className={`${file == null ? 'flex' : 'hidden'} cursor-pointer flex-col w-full lg:h-140 md:h-140 h-80 rounded-[10px] bg-white mt-5 justify-center items-center border-3 border-dashed border-purple-primary`}>
                  <img src={cloud} className='w-15 h-auto object-contain' alt="" />
                  <p className='font-poppins font-normal text-[18px] mt-5'>Tarik file Anda atau <span className='text-blue-secondary font-semibold'>Jelajahi</span></p>
                  <p className='font-poppins font-normal lg:text-[18px] md:text-[18px] text-[12px] mt-5 text-[#6D6D6D]'>Ukuran maksimal file 10 MB diperbolehkan</p>
                </div>
                <p data-aos="fade-right" className='font-poppins font-normal text-white lg:text-[15px] md:text-[15px] text-[14px] mt-5'>Hanya mendukung file .jpg, dan .png,</p>
                <div data-aos="zoom-in" className='flex flex-row w-full mt-3 gap-3 items-center'>
                  <hr className='w-full border-[1.5px] border-[#E7E7E7]' />
                  <p className='font-poppins font-semibold text-[14px] text-blue-primary'>OR</p>
                  <hr className='w-full border-[1.5px] border-[#E7E7E7]' />
                </div>
                <div data-aos="fade-right" className='flex flex-col mt-3 gap-4'>
                  <h1 className='font-poppins font-bold text-white lg:text-[17px] md:text-[17px] text-[15px]'>Alamat File yang Diupload</h1>
                  <div className='flex flex-row bg-white rounded-[11px] py-4 px-4 items-center border-[2px] border-blue-secondary'>
                    <input type="file" ref={inputFile} accept='.jpg,.png' multiple onChange={(x) => {const selected = x.target.files[0]; if (selected) { setFile(selected)}}} className='font-poppins font-medium lg:w-120 md:w-120 w-full lg:text-[15px] md:text-[15px] text-[13px] focus:outline-none focus:ring-0 pr-4' placeholder='Tempel link' />
                    <button onClick={handlePost} className='font-poppins font-semibold text-white text-[14px] bg-blue-secondary px-4 py-2 rounded-[10px]'>Upload</button>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Detection
