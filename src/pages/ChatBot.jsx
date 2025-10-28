/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react'
import back from '../../public/img/icon/back.png'
import file from '../../public/img/icon/file.png'
import mic from '../../public/img/icon/mic.png'
import mic_purple from '../../public/img/icon/mic-purple.png'
import send from '../../public/img/icon/send.png'
import logo from '../../public/img/logo/logo.svg'
import clock from '../../public/img/icon/clock.png'
import calendar from '../../public/img/icon/calendar.png'
import tree from '../../public/img/icon/tree.png'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

const ChatBot = () => {
  const apiKey = "AIzaSyDqD7S1HKYrwCv4ddpPsyKqw7JmXoU91x8"
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState([])
  const [displayedText, setDisplayedText] = useState("")
  const bottomRef = useRef(null)
  const [isMic, setIsMic] = useState(false)
  const recognitionRef = useRef(null)
  const shortCut = ["Bantu bikin rutinitas harian biar otakku nggak gampang lelah.", "Bantu aturin jadwal saya untuk cek otak rutin aku.", "Yuk bantu saranin aktivitas harian biar otakku tetap tajam!"]
  const [triggeredByShortcut, setTriggeredByShortcut] = useState(false)

  const typeWriterEffect = (text) => {
    setDisplayedText("")
    let i = 0
    const speed = 2
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(i))
      i++
      if (i >= text.length) clearInterval(interval)
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, speed)
  }

  const handleChat = async () => {
    try {
      let currentQuestion = question.trim()
      if (!currentQuestion) return
      if (isMic && recognitionRef.current) {
        recognitionRef.current.stop()
        setIsMic(false)
      }
      setIsMic(false)
      const newUserMessage = { role: "user", text: currentQuestion }
      setMessage(prev => [...prev, newUserMessage])
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 50)
      setLoading(true)
      setQuestion("")

      if (/siapa kamu|kamu siapa|nama kamu|siapa dirimu/i.test(currentQuestion)) {
        const answer = "Saya adalah Asisten Pintar Anda, Brainwest."
        setMessage(prev => [...prev, { role: "model", text: answer }])
        typeWriterEffect(answer)
        return
      }

      const prompt = `Kamu adalah asisten bernama BrainWest. Jawablah hanya tentang topik kesehatan otak, pencegahan penyakit otak, fungsi otak, gaya hidup sehat untuk otak, atau aktivitas untuk menjaga otak tetap sehat. Jika pertanyaan tidak relevan dengan otak, jawab: "Maaf, saya hanya bisa membantu seputar kesehatan otak."
      
Pertanyaan: ${currentQuestion}`

      const res = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`,
        {
          contents: [{ role: "user", parts: [{ text: prompt }] }]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': apiKey
          }
        }
      )

      let result = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "Tidak ada jawaban"
      result = result.replace(/\\n/g, '\n')
      result = result.replace(/\*\*(.+?)\*\*/g, '**$1**')
      result = result.replace(/\n/g, '\n\n')
      result = result.replace(/(?<=\.)\n(?=\S)/g, '\n\n')
      setMessage(prev => [...prev, { role: "model", text: result }])
      typeWriterEffect(result)
      currentQuestion = ""
    } catch (err) {
      console.log(err)
      setIsMic(false)
    } finally {
      setLoading(false)
      setIsMic(false)
    }
  }

  useEffect(() => {
    if (triggeredByShortcut && question !== "") {
      handleChat()
      setTriggeredByShortcut(false)
    }
  }, [question, triggeredByShortcut])

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak - Asisten Kesehatan Cerdas"
  }, [])

  const startListening = () => {
    if (isMic) {
      recognitionRef.current?.stop()
      setIsMic(false)
      return
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert("Browser kamu tidak mendukung speech recognition")
      return
    }
    const recognition = new SpeechRecognition()
    recognition.lang = "id-ID"
    recognition.interimResults = true
    recognition.continuous = true
    recognitionRef.current = recognition
    setIsMic(true)
    recognition.start()
    let finalTranscript = ""
    recognition.onresult = (event) => {
      let interimTranscript = ""
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          finalTranscript += transcript + " "
        } else {
          interimTranscript += transcript
        }
      }
      setQuestion(finalTranscript + interimTranscript)
    }
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error)
    }
    recognition.onend = () => {
      console.log("Mic stopped")
    }
  }

  return (
    <div className='overflow-x-hidden'>
      <section className='flex flex-col w-full min-h-screen bg-bg items-center'>
        <Link data-aos="fade-right" to={"/"} className='cursor-pointer fixed top-0 left-0 ml-[4vw] lg:pt-[5vh] md:pt-[5vh] pt-[5vh] lg:pb-0 md:pb-0 pb-[4vh] flex flex-row items-center gap-3 lg:w-fit md:w-fit w-full lg:bg-transparent bg-bg z-50'>
          <img src={back} className='w-2.5 h-auto object-contain' alt="" />
          <h1 className='font-poppins font-semibold text-white lg:text-[20px] md:text-[20px] text-[18px]'>Kembali</h1>
        </Link>
        <div className='container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:pt-[7vh] md:pt-[5vh] pt-[5vh]'>
          <div className='lg:relative md:relative self-center fixed float flex flex-row w-fit lg:justify-center md:justify-center justify-end items-center lg:gap-5 md:gap-5 gap-3 right-0 lg:mr-[0vw] md:mr-[0vw] mr-[4vw] z-60'>
            <img src={logo} className='lg:w-25 md:w-25 w-9 h-auto object-contain' alt="" />
            <h1 className='font-poppins font-bold text-gradient lg:text-[40px] md:text-[40px] text-[20px]'>BrainWest</h1>
          </div>
          <div className='flex flex-col mt-15 lg:mb-[18vh] md:mb-[13vh] mb-[14vh]'>
            <h1 data-aos="fade-right" className='font-poppins font-semibold text-white lg:text-[35px] md:text-[30px] text-[18px]'>Hai, Teman <span className='text-gradient'>Brainwest!</span></h1>
            <h1 data-aos="fade-right" className='font-poppins font-semibold text-white lg:text-[35px] md:text-[30px] text-[18px]'>Ada yang bisa aku bantu hari ini?</h1>
            <h1 data-aos="fade-right" className='font-poppins font-medium text-white lg:text-[14px] md:text-[12px] text-[12px] mt-1'>Pilih salah satu pertanyaan di bawah atau langsung tulis pertanyaanmu untuk mulai ngobrol bareng Brainwest.</h1>
            <div className={`lg:flex-row md:flex-row flex-col w-full justify-between lg:gap-20 md:gap-10 gap-5 mt-8 ${message.length > 0 ? 'hidden' : 'flex'}`}>
              <div data-aos="zoom-in" onClick={() => { setQuestion(shortCut[0]); setTriggeredByShortcut(true) }} className='cursor-pointer flex flex-col bg-purple-primary w-full px-3.5 py-4 rounded-[10px]'>
                <img src={clock} className='w-10 h-auto object-contain' alt="" />
                <p className='font-poppins font-medium text-white text-[14px] mt-3'>{shortCut[0]}</p>
              </div>
              <div data-aos="zoom-in" onClick={() => { setQuestion(shortCut[1]); setTriggeredByShortcut(true) }} className='cursor-pointer flex flex-col bg-purple-primary w-full px-3.5 py-4 rounded-[10px]'>
                <img src={calendar} className='w-10 h-auto object-contain' alt="" />
                <p className='font-poppins font-medium text-white text-[14px] mt-3'>{shortCut[1]}</p>
              </div>
              <div data-aos="zoom-in" onClick={() => { setQuestion(shortCut[2]); setTriggeredByShortcut(true) }} className='cursor-pointer flex flex-col bg-purple-primary w-full px-3.5 py-4 rounded-[10px]'>
                <img src={tree} className='w-10 h-auto object-contain' alt="" />
                <p className='font-poppins font-medium text-white text-[14px] mt-3'>{shortCut[2]}</p>
              </div>
            </div>
            <div className='flex flex-col mt-7 gap-4'>
              {message.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? 'justify-end' : 'justify-start'}`}>
                  <div className={`font-poppins font-normal max-w-[70%] text-[14px] px-4 py-2 rounded-[15px] items-center ${msg.role === "user" ? 'bg-purple-primary text-white' : 'bg-white text-black'}`}>
                    <ReactMarkdown>{msg.role === "model" && i === message.length - 1 ? displayedText : msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {loading && (
                <div className='flex justify-start'>
                  <div className='animate-pulse w-60 bg-white rounded-[15px] px-4 py-2'>
                    <div className='h-4 bg-gradient rounded mb-2'></div>
                    <div className='h-4 bg-gradient rounded w-5/6'></div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className='fixed flex w-full bg-bg justify-center items-center bottom-0 pb-4 lg:h-[17vh] md:h-[12vh] h-[13vh]'>
          <div className='container flex flex-row lg:w-250 md:w-full w-full lg:mx-0 md:mx-10 mx-5 h-auto px-5 lg:py-4 md:py-4 py-3 bg-white rounded-[15px] lg:mb-2 items-center gap-2'>
            <img src={file} className='lg:w-5 md:w-5 w-4 h-auto object-contain' alt="" />
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleChat()} className='font-poppins font-medium w-full lg:text-[15px] md:text-[15px] text-[13px] focus:outline-none focus:ring-0 mx-2' placeholder='Tulis pertanyaan anda di sini...' />
            <img src={!isMic ? mic : mic_purple} onClick={startListening} className='cursor-pointer lg:w-4 md:w-4 w-3 h-auto object-contain mr-2' alt="" />
            <img onClick={handleChat} src={send} className='cursor-pointer lg:w-10 md:w-10 w-8 h-auto object-contain' alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatBot
