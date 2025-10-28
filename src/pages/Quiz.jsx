import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Quizzes from '../data/Quizzes';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

const Quiz = () => {
  const [value, setValue] = useState(0)
  const [quizzes, setQuizzes] = useState(Quizzes)
  const [answers, setAnswers] = useState(Array(quizzes.length).fill(""))
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak - Diagnosa"
  })

  useEffect(() => {
    const count = answers.filter((x) => x != "").length
    const progress = Math.round((count/quizzes.length) * 100)
    setValue(progress)
  }, [answers, quizzes.length])

  const handleAnswerChange = (i, value) => {
    const newAnswers = [...answers]
    newAnswers[i] = value
    setAnswers(newAnswers)
  }

  const handlePost = async () => {
    Swal.fire({
      title: 'Sedang menganalisis...',
      text: 'Mohon tunggu sebentar',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    let totalScore = 0

    try {
      for (let i = 0; i < quizzes.length; i++) {
        if (answers[i].value == "") {
          Swal.fire({
            title: 'Sedang menganalisis...',
            text: 'Mohon tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
          }
    })
        }

        const payload = {
          question: quizzes[i].question,
          answer: answers[i]
        }

        const rsp = await axios.post('https://pandutria-diagnosis.hf.space/predict', payload)
        const {score} = rsp.data

        totalScore += score
      }

      Swal.close()

      const normalizedScore = (totalScore / (quizzes.length * 5)) * 100;

      Swal.fire({
        icon: 'success',
        title: 'Analisis Selesai!',
        html: `Lihat hasil analisis`,
        confirmButtonText: 'Lanjutkan'
      }).then(() => {
        navigate('/diagnosis/result', { state: { score: normalizedScore } })
      })

    } catch (err) {
      console.error('Error saat kirim ke API:', error)
      Swal.fire({
        icon: 'error',
        title: 'Eror!',
        html: `${err}`,
        confirmButtonText: 'Lanjutkan'
      })
    }
  }

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <section className='flex w-full bg-bg justify-center items-center lg:pt-[10vh] md:pt-[8vh] pt-[9vh]'>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-center pt-10 lg:pb-20 md:pb-20 pb-15 gap-8'>
          <div data-aos="fade-down" className='flex flex-col bg-white rounded-[15px] w-full lg:px-6 md:px-6 px-4 lg:py-5 md:py-5 py-4 gap-2.5'>
            <div className='flex flex-row w-full justify-between'>
              <h1 className='font-poppins font-semibold text-purple-primary text-[17px]'>Progress Diagnosa</h1>
              <h1 className='font-poppins font-semibold text-purple-primary text-[17px]'>{value}%</h1>
            </div>
            <progress value={value} max={100} className={`w-full rounded-[50px] h-5 ${value ? 'has-value' : ''}`}/>
          </div>
          <div className='flex flex-col w-full gap-4'>
            {quizzes.map((quiz, i) =>  <div data-aos="zoom-in" key={i} className='flex flex-col w-full bg-white rounded-[15px] lg:px-6 md:px-6 px-4 lg:py-5 md:py-5 py-4 gap-3'>
              <h1 className='font-poppins font-medium lg:text-[20px] md:text-[18px] text-[15px]'>{quiz.id}. {quiz.question}</h1>
              <textarea type="text" value={answers[i]} onChange={(x) => handleAnswerChange(i, x.target.value)} className={`font-poppins font-medium h-35 lg:text-[14px] md:text-[14px] text-[13px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full text-[#AEAEAE] focus:border-purple-primary focus:border-[2px] resize-none ${answers[i] != "" ? 'text-gray' : 'text-[#AEAEAE]'}`} placeholder='Tulis Jawaban'/>
            </div>)}
          </div>
          <Link data-aos="fade-up-left" onClick={handlePost} className="font-poppins font-semibold text-white bg-gradient rounded-[5px] lg:text-[15px] md:text-[15px] text-[14px] px-5 py-3 w-fit self-end">Dapatkan Hasil</Link>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Quiz