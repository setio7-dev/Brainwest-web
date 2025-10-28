import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import arrow from '../../public/img/icon/right-arrow-purple.png'
import warning from '../../public/img/icon/warning.png'
import circle from '../../public/img/icon/circle/circle-purple.png'
import call from '../../public/img/icon/call-red.png'
import { Link, useLocation } from 'react-router-dom'

const ResultQuiz = () => {
  const [value, setValue] = useState(20)
  const location = useLocation()
  const { score } = location.state || { score: 0 }
  let level = ""
  let urgency = ""
  let condition = ["", ""]
  let recomendation = ["", "", "", ""]
  
  if (score >= 1 && score <= 40) level = "Ringan"
  else if (score >= 41 && score <= 70) level = "Sedang"
  else if (score >= 71 && score <= 100) level = "Berat"
  else level = "[error]"

  if (score >= 1 && score <= 30) urgency = "Tidak Mendesak"
  else if (score >= 31 && score <= 60) urgency = "Cukup Mendesak"
  else if (score >= 61 && score <= 85) urgency = "Perlu Di periksa"
  else if (score >= 86 && score <= 100) urgency = "Sangat Mendesak"
  else urgency = "[error]"

  if (score >= 1 && score <= 20) condition = ["Kondisi otak dalam batas normal", "Stres ringan sesekali"]
  else if (score >= 21 && score <= 40) condition = ["Kelelahan mental ringan", "Masalah tidur ringan"]
  else if (score >= 41 && score <= 60) condition = ["Gangguan mood ringan", "Konsentrasi menurun"]
  else if (score >= 61 && score <= 80) condition = ["Gejala awal gangguan kecemasan", "Gangguan konsentrasi (misal ADHD ringan)"]
  else if (score >= 81 && score <= 100) condition = ["Depresi berat", "Gangguan bipolar / gangguan psikotik lain"]

  if (score >= 1 && score <= 20) recomendation = ["Pertahankan gaya hidup sehat dan rutinitas tidur yang teratur", "Lanjutkan aktivitas positif yang mendukung kesejahteraan mental", "Luangkan waktu untuk istirahat dan rekreasi ringan", "Perhatikan sinyal stres sejak dini untuk pencegahan"]
  else if (score >= 21 && score <= 40) recomendation = ["Kurangi paparan layar gawai dan media sosial berlebihan", "Tingkatkan durasi tidur dan pola makan seimbang", "Lakukan aktivitas fisik ringan secara rutin (jalan kaki, yoga)", "Luangkan waktu untuk hobi atau relaksasi diri"]
  else if (score >= 41 && score <= 60) recomendation = ["Coba teknik manajemen stres seperti meditasi atau journaling", "Kurangi beban kerja jika memungkinkan dan buat jadwal istirahat", "Bicarakan keluhan dengan orang terdekat atau konselor", "Perhatikan gangguan tidur atau konsentrasi yang muncul"]
  else if (score >= 61 && score <= 80) recomendation = ["Pertimbangkan konsultasi awal dengan psikolog atau dokter umum", "Jaga rutinitas harian dan hindari isolasi sosial", "Pantau suasana hati dan perubahan perilaku secara berkala", "Kurangi konsumsi kafein, alkohol, dan begadang"]
  else if (score >= 81 && score <= 100) recomendation = ["Segera konsultasi dengan profesional kesehatan jiwa", "Jangan abaikan gejala berat seperti kehilangan harapan atau perubahan ekstrem", "Minta dukungan dari keluarga atau orang yang dipercaya", "Hindari stresor berat dan fokus pada perawatan diri"]

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak - Hasil Diagnosa"
  })

  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <section className='flex w-full bg-bg justify-center items-center lg:pt-[10vh] md:pt-[8vh] pt-[9vh]'>
            <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-center pt-10 lg:pb-20 md:pb-20 pb-15 gap-8'>
                <div data-aos="zoom-in" className='flex flex-col w-full bg-white rounded-[15px] lg:px-6 md:px-6 px-4 lg:py-5 md:py-5 py-4 gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-poppins font-semibold text-purple-primary lg:text-[20px] md:text-[20px] text-[16px]'>Skor Kerentanan Otak Anda</h1>
                        <div className='flex flex-row gap-5 items-center'>
                            <progress value={score} max={100} className={`w-full rounded-[12.5px] h-5 ${score ? 'has-value' : ''}`}/>
                            <h1 className='font-poppins font-semibold text-purple-primary text-[17px]'>{score.toFixed(0)}%</h1>
                        </div>
                    </div>
                     <div className='flex lg:flex-row md:flex-row flex-col w-full lg:gap-5 md:gap-5 gap-3'>
                        <div className='flex flex-col w-full bg-purple-primary rounded-[10px] px-4 py-4 gap-1'>
                            <h1 className='font-poppins font-semibold text-white lg:text-[18px] md:text-[18px] text-[16px]'>Tingkat Keparahan</h1>
                            <p className='font-poppins font-normal text-white lg:text-[18px] md:text-[18px] text-[16px]'>{level}</p>
                        </div>
                        <div className='flex flex-col w-full bg-purple-primary rounded-[10px] px-4 py-4 gap-1'>
                            <h1 className='font-poppins font-semibold text-white lg:text-[18px] md:text-[18px] text-[16px]'>Tingkat Urgensi</h1>
                            <p className='font-poppins font-normal text-white lg:text-[18px] md:text-[18px] text-[16px]'>{urgency}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                        <h1 className='font-poppins font-bold text-purple-primary lg:text-[20px] md:text-[20px] text-[16px]'>Kemungkinan Kondisi:</h1>
                        <div className='flex flex-col gap-1'>
                            <p className='font-poppins font-medium lg:text-[15.5px] md:text-[15.5px] text-[14px]'>1. {condition[0]}</p>
                            <p className='font-poppins font-medium lg:text-[15.5px] md:text-[15.5px] text-[14px]'>2. {condition[1]}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mt-2'>
                        <h1 className='font-poppins font-bold text-purple-primary lg:text-[20px] md:text-[20px] text-[16px]'>Rekomendasi dari <span className='text-gradient'>BrainWest</span></h1>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={arrow} className='lg:w-2 md:w-2 w-1.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium lg:text-[15.5px] md:text-[15.5px] text-[14px]'>{recomendation[0]}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={arrow} className='lg:w-2 md:w-2 w-1.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium lg:text-[15.5px] md:text-[15.5px] text-[14px]'>{recomendation[1]}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={arrow} className='lg:w-2 md:w-2 w-1.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium lg:text-[15.5px] md:text-[15.5px] text-[14px]'>{recomendation[2]}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <img src={arrow} className='lg:w-2 md:w-2 w-1.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium lg:text-[15.5px] md:text-[15.5px] text-[14px]'>{recomendation[3]}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full px-4 py-4 gap-1 rounded-[7.5px] border-[2.5px] border-[#84209DB3] bg-[#CC00FF26]'>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={warning} className='lg:w-6 md:w-6 w-5 h-auto object-contain' alt="" />
                            <h1 className='font-poppins font-semibold text-purple-primary lg:text-[18px] md:text-[18px] text-[16px] lg:mt-1 md:mt-1 mt-0'>Peringatan Penting</h1>
                        </div>
                        <p className='font-poppins font-medium text-purple-primary lg:text-[16px] md:text-[16px] text-[12px] mt-3'>Hasil ini adalah estimasi awal berdasarkan respons pengguna, bukan diagnosis resmi.</p>
                        <p className='font-poppins font-medium text-purple-primary lg:text-[16px] md:text-[16px] text-[12px]'>Segera hubung tenaga medis jika:</p>
                        <div className='flex flex-col gap-1 mt-2'>
                            <div className='flex flex-row gap-2.5'>
                                <img src={circle} className='w-1.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium text-purple-primary lg:text-[16px] md:text-[16px] text-[12px]'>Gejala semakin mengganggu atau berlangsung lama</p>
                            </div>
                            <div className='flex flex-row gap-2.5'>
                                <img src={circle} className='w-1.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium text-purple-primary lg:text-[16px] md:text-[16px] text-[12px]'>Muncul gejala seperti pusing berat, mual, kejang, gangguan bicara, atau kesadaran menurun</p>
                            </div>
                            <div className='flex flex-row gap-2.5'>
                                <img src={circle} className='w-1.5 h-auto object-contain' alt="" />
                                <p className='font-poppins font-medium text-purple-primary lg:text-[16px] md:text-[16px] text-[12px]'>Ada riwayat cedera kepala atau gejala semakin memburuk</p>
                            </div>
                        </div>
                        <p className='font-poppins font-medium text-purple-primary lg:text-[16px] md:text-[16px] text-[12px] mt-2'>Segera hubung tenaga medis jika:</p>
                        <Link to={'/consultation'} className='cursor-pointer flex flex-row mt-2 gap-3'>
                            <img src={call} className='lg:w-4 md:w-4 w-3 h-auto object-contain' alt="" />
                            <p className='font-poppins font-medium text-[#E40004] lg:text-[16px] md:text-[16px] text-[12px]'>Konsultasi dengan dokter</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default ResultQuiz
