import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import arrow from '../../public/img/icon/right-arrow-purple.png'
import warning from '../../public/img/icon/warning.png'
import circle from '../../public/img/icon/circle/circle-purple.png'
import call from '../../public/img/icon/call-red.png'
import { Link, useLocation } from 'react-router-dom'

const ResultDetection = () => {
  const [value, setValue] = useState(20)
  const location = useLocation()
  const { label, confidence } = location.state || {}
  const [tumor, setTumor] = useState()
  let urgency = ""
  let condition = ["", ""]
  let recomendation = ["", "", "", ""]
  let explanation = ""

  if (label == "glioma") urgency = "Risiko Tinggi"
  else if (label == "meningioma") urgency = "Risiko Menengah"
  else if (label == "notumor") urgency = "Tampa Risiko"
  else if (label == "pituitary") urgency = "Risiko Hormonal"
  else urgency = "[error]"

  if (label == "glioma") explanation ="Glioma adalah salah satu jenis tumor otak yang berasal dari sel glial, yaitu sel-sel pendukung di otak dan sistem saraf pusat yang membantu neuron berfungsi dengan baik. Glioma bisa bersifat jinak (tidak menyebar) atau ganas (kanker), dan tingkat keparahannya tergantung jenis serta kecepatan pertumbuhannya."
  else if (label == "meningioma") explanation ="Meningioma adalah tumor otak yang tumbuh dari meninges, yaitu selaput pelindung otak dan sumsum tulang belakang (bukan dari jaringan otaknya langsung). Sebagian besar meningioma bersifat jinak (non-kanker), tapi tetap bisa menimbulkan gangguan karena menekan otak atau saraf di sekitarnya."
  else if (label == "notumor") explanation ="No Tumor berarti tidak ditemukan adanya massa atau pertumbuhan abnormal (tumor) pada jaringan otak dalam hasil pemeriksaan atau deteksi citra otak. Ini adalah hasil yang normal dan tidak menunjukkan tanda-tanda tumor otak, baik jinak maupun ganas."
  else if (label == "pituitary") explanation ="Pituitary tumor adalah tumor yang tumbuh di kelenjar pituitari (hipofisis), yaitu kelenjar kecil seukuran kacang yang terletak di dasar otak, tepat di belakang hidung dan di bawah otak besar. Kelenjar ini sangat penting karena mengatur hormon-hormon utama tubuh."
  else explanation = "[error]"

  if (label == "glioma") condition = ["Kemungkinan besar merupakan tumor otak ganas.", "Terdeteksi tanda-tanda visual yang menyerupai glioma."]
  else if (label == "meningioma") condition = ["Kemungkinan tumor jinak pada selaput otak (meninges).", "Perlu evaluasi lebih lanjut meskipun pertumbuhannya lambat."]
  else if (label == "notumor") condition = ["Tidak ditemukan tanda-tanda tumor pada otak.", "Struktur otak tampak normal dalam citra yang dianalisis."]
  else if (label == "pituitary") condition = ["Kemungkinan tumor pada kelenjar pituitari (pengatur hormon).", "Bisa menyebabkan gangguan hormon atau tekanan pada saraf mata."]
  else condition = ["[error], [error]"]

  if (label == "glioma") recomendation = ["Segera konsultasikan hasil ini ke dokter spesialis saraf atau onkologi.", "Jaga pola makan bergizi untuk membantu daya tahan tubuh.", "Tetap aktif secara mental dan emosional dengan dukungan keluarga.", "Istirahat yang cukup dan hindari aktivitas fisik berat tanpa izin medis."]
  else if (label == "meningioma") recomendation = ["Periksakan diri lebih lanjut untuk mengetahui ukuran dan jenis tumor.", "Pertahankan pola hidup sehat: tidur cukup, makan seimbang, dan hindari stres.", "Lakukan aktivitas ringan seperti jalan kaki atau peregangan untuk menjaga kebugaran.", "Diskusikan dengan dokter tentang pemantauan rutin atau tindakan medis yang dibutuhkan."]
  else if (label == "notumor") recomendation = ["Tidak ditemukan tumor, namun tetap jaga kesehatan otak dengan pola hidup sehat.", "Kelola stres dengan teknik relaksasi seperti meditasi atau pernapasan dalam.", "Pastikan tidur cukup dan teratur untuk mendukung fungsi kognitif optimal.", "Jika ada keluhan lain, tetap konsultasi ke dokter untuk evaluasi menyeluruh."]
  else if (label == "pituitary") recomendation = ["Pertimbangkan pemeriksaan hormon dan konsultasi ke dokter endokrinologi.", "Pantau gejala seperti perubahan suasana hati, kelelahan, atau gangguan penglihatan.", "Jaga rutinitas harian yang stabil dan hindari stres berlebihan.", "Kurangi konsumsi kafein dan tidur cukup agar hormon tetap seimbang."]
  else recomendation = ["[error]", "[error]"]

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak - Hasil Deteksi"
  })

  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <section className='flex w-full bg-bg justify-center items-center lg:pt-[10vh] md:pt-[8vh] pt-[9vh]'>
            <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-center pt-10 lg:pb-20 md:pb-20 pb-15 gap-8'>
                <div data-aos="zoom-in" className='flex flex-col w-full bg-white rounded-[15px] lg:px-6 md:px-6 px-4 lg:py-5 md:py-5 py-4 gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-poppins font-semibold text-purple-primary lg:text-[20px] md:text-[20px] text-[16px]'>Tingkat Akurasi Hasil Deteksi Otak Anda</h1>
                        <div className='flex flex-row gap-5 items-center'>
                            <progress value={confidence} max={100} className={`w-full rounded-[12.5px] h-5 ${confidence ? 'has-value' : ''}`}/>
                            <h1 className='font-poppins font-semibold text-purple-primary text-[17px]'>{confidence}%</h1>
                        </div>
                    </div>
                     <div className='flex lg:flex-row md:flex-row flex-col w-full lg:gap-5 md:gap-5 gap-3'>
                        <div className='flex flex-col w-full bg-purple-primary rounded-[10px] px-4 py-4 gap-1'>
                            <h1 className='font-poppins font-semibold text-white lg:text-[18px] md:text-[18px] text-[16px]'>Hasil Deteksi</h1>
                            <p className='font-poppins font-normal text-white lg:text-[18px] md:text-[18px] text-[16px]'>{label.charAt(0).toUpperCase() + label.slice(1)}</p>
                        </div>
                        <div className='flex flex-col w-full bg-purple-primary rounded-[10px] px-4 py-4 gap-1'>
                            <h1 className='font-poppins font-semibold text-white lg:text-[18px] md:text-[18px] text-[16px]'>Risiko Klinis</h1>
                            <p className='font-poppins font-normal text-white lg:text-[18px] md:text-[18px] text-[16px]'>{urgency}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-3'>
                        <h1 className='font-poppins font-bold text-purple-primary lg:text-[20px] md:text-[20px] text-[16px]'>Penjelasan Penyakit:</h1>
                        <div className='flex flex-col gap-1'>
                            <p className='font-poppins font-medium lg:text-[15.5px] md:text-[15.5px] text-[14px]'>{explanation}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mt-2'>
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

export default ResultDetection
