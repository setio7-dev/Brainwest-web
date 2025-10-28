import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import line from "../../public/img/pic/home-line.png";
import checklist from "../../public/img/pic/checklist.png";
import doctor_one from "../../public/img/pic/doctor-one.png";
import doctor_two from "../../public/img/pic/doctor-two.png";
import gradient_ai from "../../public/img/pic/gradient-ai.png";
import ai from "../../public/img/pic/ai.svg";
import home from "../../public/img/pic/homes.png";
import consul_brain from "../../public/img/pic/consultation-brain.png";
import circle_article from "../../public/img/pic/circle-article.png";
import circle_blue from "../../public/img/pic/circle-blue.png";
import circle_testi from "../../public/img/pic/testimonials/1.png";
import call from "../../public/img/icon/call.png";
import consul from "../../public/img/icon/consul.png";
import verify from "../../public/img/icon/verify.png";
import chat from "../../public/img/icon/chat.png";
import information from "../../public/img/icon/information.png";
import consul_doctor from "../../public/img/icon/consul-doctor.png";
import detect from "../../public/img/icon/detect.png";
import quiz from "../../public/img/icon/quiz.png";
import right_arrow from "../../public/img/icon/right-arrow.png";
import blue_arrow from "../../public/img/icon/blue-arrow.png";
import arrow_bottom from "../../public/img/icon/arrow-bottom.png";
import two from "../../public/img/icon/two.png";
import location_icon from "../../public/img/icon/location.png";
import location1 from "../../public/img/pic/location/1.png";
import book from "../../public/img/pic/book.png";
import location_gradient from "../../public/img/icon/location-gradient.png";
import call_gradient from "../../public/img/icon/call-gradient.png";
import chat_white from "../../public/img/icon/chat-white.png";
import love_white from "../../public/img/icon/love-white.png";
import quiz_white from "../../public/img/icon/quiz-white.png";
import diagnose_white from "../../public/img/icon/diagnose-white.png";
import consultation_purple from "../../public/img/icon/consultation-purple.png";
import circle_man from "../../public/img/icon/circle/circle-blue.png";
import circle_woman from "../../public/img/icon/circle/circle-pink.png";
import circle_child from "../../public/img/icon/circle/circle-yellow.png";
import exampleyt from "../../public/img/pic/videos/example.png";
import person1 from "../../public/img/pic/videos/person/1.png";
import consuls from "../../public/img/pic/brain/consul.png";
import info from "../../public/img/pic/brain/info.png";
import message from "../../public/img/icon/message.png";
import skrinning from "../../public/img/pic/brain/skrinning.png";
import infos from "../../public/img/pic/brain/info.png";
import news1 from "../../public/img/pic/news/1.png";
import news2 from "../../public/img/pic/news/2.png";
import news3 from "../../public/img/pic/news/3.png";
import news4 from "../../public/img/pic/news/4.png";
import news5 from "../../public/img/pic/news/5.png";
import lifestyle from "../../public/img/pic/brain/lifestyle.png";
import doctors from "../../public/img/pic/brain/doctor.png";
import { useState } from "react";
import TestimonialOne from "../data/Testimonials";
import locationData from "../data/Locations";
import Footer from "../components/Footer";
import StatistikChart from "../components/StatistikChart";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CountUp from "react-countup";
import VideosData from "../data/Videos";
import problem from "../../public/img/pic/problem.png";
import num1 from "../../public/img/pic/number/1.png";
import num2 from "../../public/img/pic/number/2.png";
import num3 from "../../public/img/pic/number/3.png";
import num4 from "../../public/img/pic/number/4.png";
import num5 from "../../public/img/pic/number/5.png";
import num6 from "../../public/img/pic/number/6.png";
import tips1 from "../../public/img/pic/number/num1.png";
import tips2 from "../../public/img/pic/number/num2.png";
import tips3 from "../../public/img/pic/number/num3.png";
import tips4 from "../../public/img/pic/number/num4.png";
import tips5 from "../../public/img/pic/number/num5.png";
import tips6 from "../../public/img/pic/number/num6.png";
import community from "../../public/img/pic/community.png";
import communityIcon from "../../public/img/icon/community.png";
import rightArrowBlue from "../../public/img/icon/right-arrow-blue.png";
import solution1 from "../../public/img/pic/solution/warning.png";
import solution2 from "../../public/img/pic/solution/phone.png";
import solution3 from "../../public/img/pic/solution/question.png";
import solution4 from "../../public/img/pic/solution/rocket.png";
import solutions from "../../public/img/pic/solution/solution.png";

const dataByYear = {
  2020: [
    { name: "Jan", pria: 4, wanita: 7, anak: 3 },
    { name: "Feb", pria: 5, wanita: 6, anak: 2 },
    { name: "Mar", pria: 6, wanita: 5, anak: 4 },
    { name: "Apr", pria: 3, wanita: 8, anak: 3 },
    { name: "Mei", pria: 4, wanita: 7, anak: 4 },
    { name: "Jun", pria: 2, wanita: 6, anak: 3 },
    { name: "Jul", pria: 4, wanita: 5, anak: 5 },
    { name: "Aug", pria: 5, wanita: 6, anak: 4 },
    { name: "Sep", pria: 6, wanita: 7, anak: 5 },
    { name: "Oct", pria: 3, wanita: 8, anak: 4 },
    { name: "Nov", pria: 2, wanita: 4, anak: 3 },
    { name: "Dec", pria: 3, wanita: 5, anak: 4 },
  ],
  2021: [
    { name: "Jan", pria: 8, wanita: 6, anak: 5 },
    { name: "Feb", pria: 7, wanita: 5, anak: 6 },
    { name: "Mar", pria: 6, wanita: 8, anak: 4 },
    { name: "Apr", pria: 9, wanita: 7, anak: 6 },
    { name: "Mei", pria: 8, wanita: 6, anak: 5 },
    { name: "Jun", pria: 7, wanita: 5, anak: 7 },
    { name: "Jul", pria: 6, wanita: 6, anak: 6 },
    { name: "Aug", pria: 8, wanita: 7, anak: 5 },
    { name: "Sep", pria: 7, wanita: 6, anak: 6 },
    { name: "Oct", pria: 9, wanita: 7, anak: 5 },
    { name: "Nov", pria: 6, wanita: 6, anak: 6 },
    { name: "Dec", pria: 7, wanita: 5, anak: 7 },
  ],
  2022: [
    { name: "Jan", pria: 10, wanita: 12, anak: 11 },
    { name: "Feb", pria: 6, wanita: 8, anak: 14 },
    { name: "Mar", pria: 10, wanita: 7, anak: 15 },
    { name: "Apr", pria: 6, wanita: 13, anak: 13 },
    { name: "Mei", pria: 9, wanita: 16, anak: 17 },
    { name: "Jun", pria: 4, wanita: 14, anak: 21 },
    { name: "Jul", pria: 7, wanita: 13, anak: 25 },
    { name: "Aug", pria: 4, wanita: 20, anak: 22 },
    { name: "Sep", pria: 3, wanita: 20, anak: 22 },
    { name: "Oct", pria: 8, wanita: 17, anak: 19 },
    { name: "Nov", pria: 3, wanita: 14, anak: 18 },
    { name: "Dec", pria: 10, wanita: 9, anak: 9 },
  ],
  2023: [
    { name: "Jan", pria: 5, wanita: 10, anak: 9 },
    { name: "Feb", pria: 6, wanita: 12, anak: 10 },
    { name: "Mar", pria: 7, wanita: 11, anak: 12 },
    { name: "Apr", pria: 5, wanita: 13, anak: 11 },
    { name: "Mei", pria: 6, wanita: 12, anak: 13 },
    { name: "Jun", pria: 7, wanita: 11, anak: 12 },
    { name: "Jul", pria: 6, wanita: 13, anak: 13 },
    { name: "Aug", pria: 8, wanita: 14, anak: 14 },
    { name: "Sep", pria: 7, wanita: 15, anak: 12 },
    { name: "Oct", pria: 9, wanita: 13, anak: 13 },
    { name: "Nov", pria: 8, wanita: 14, anak: 11 },
    { name: "Dec", pria: 7, wanita: 13, anak: 12 },
  ],
  2024: [
    { name: "Jan", pria: 9, wanita: 11, anak: 10 },
    { name: "Feb", pria: 10, wanita: 12, anak: 11 },
    { name: "Mar", pria: 8, wanita: 13, anak: 12 },
    { name: "Apr", pria: 9, wanita: 14, anak: 13 },
    { name: "Mei", pria: 11, wanita: 13, anak: 12 },
    { name: "Jun", pria: 10, wanita: 14, anak: 14 },
    { name: "Jul", pria: 12, wanita: 15, anak: 13 },
    { name: "Aug", pria: 11, wanita: 16, anak: 15 },
    { name: "Sep", pria: 10, wanita: 14, anak: 14 },
    { name: "Oct", pria: 9, wanita: 13, anak: 12 },
    { name: "Nov", pria: 8, wanita: 12, anak: 11 },
    { name: "Dec", pria: 9, wanita: 11, anak: 10 },
  ],
};


const Landing = () => {
  const locationR = useLocation();
  const [testi1, setTest1] = useState(TestimonialOne);
  const [location, setLocation] = useState("serpong");
  const [isOpenFaq1, setOpenFaq1] = useState(false);
  const [isOpenFaq2, setOpenFaq2] = useState(false);
  const [isOpenFaq3, setOpenFaq3] = useState(false);
  const [isOpenFaq4, setOpenFaq4] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2020");
  const [video, setVideo] = useState(VideosData);
  const [name, setName] = useState("");
  const [calls, setCalls] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [question, setQuestion] = useState("");
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const [selectedIndexLeft, setSelectedIndexLeft] = useState(null);
  const [selectedIndexRight, setSelectedIndexRight] = useState(null);
  const [isScrollingLeft, setIsScrollingLeft] = useState(true);
  const [isScrollingRight, setIsScrollingRight] = useState(true);

  const handleClickLeft = (index) => {
    if (selectedIndexLeft === index) {
      setSelectedIndexLeft(null);
      setIsScrollingLeft(true);
    } else {
      setSelectedIndexLeft(index);
      setIsScrollingLeft(false);
    }
  };

  const handleClickRight = (index) => {
    if (selectedIndexRight === index) {
      setSelectedIndexRight(null);
      setIsScrollingRight(true);
    } else {
      setSelectedIndexRight(index);
      setIsScrollingRight(false);
    }
  };

  useEffect(() => {
    if (scrollRef1.current) {
      scrollRef1.current.style.animationPlayState = isScrollingLeft
        ? "running"
        : "paused";
    }
  }, [isScrollingLeft]);

  useEffect(() => {
    if (scrollRef2.current) {
      scrollRef2.current.style.animationPlayState = isScrollingRight
        ? "running"
        : "paused";
    }
  }, [isScrollingRight]);

  const updateScrollState = () => {
    const state = isScrolling ? "running" : "paused";
    if (scrollRef1.current) scrollRef1.current.style.animationPlayState = state;
    if (scrollRef2.current) scrollRef2.current.style.animationPlayState = state;
  };

  const toggleFaq = (faqNum) => {
    setOpenFaq1(faqNum == 1 ? !isOpenFaq1 : false);
    setOpenFaq2(faqNum == 2 ? !isOpenFaq2 : false);
    setOpenFaq3(faqNum == 3 ? !isOpenFaq3 : false);
    setOpenFaq4(faqNum == 4 ? !isOpenFaq4 : false);
  };

  const sendToWa = () => {
    try {
      const phoneNumber = "62895704440602"; // Nomor tujuan (ganti 0 di depan jadi 62)

      const message = `
*━━━━━━━━━━━*
🧠 *BRAINWEST BOOKING*
*━━━━━━━━━━━*

*Nama:* ${name}
*Telepon:* ${calls}
*Email:* ${email}
*Tanggal:* ${date}
🛠 *Layanan:* ${service}

💬 *Pertanyaan / Catatan:*
${question}

*━━━━━━━━━━━*
Terima kasih 🙏  
Mohon konfirmasi jadwal secepatnya.
    `;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(url, "_blank");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "BrainWest | Web Kesehatan Otak";
    const scrollTo = new URLSearchParams(locationR.search).get("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [locationR]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="bg-bg w-full">
        <section
          id="home"
          className="flex w-full lg:h-screen md:h-auto h-auto justify-center lg:pt-[10vh] md:pt-[8vh] pt-[9vh]"
        >
          <img
            src={line}
            className="absolute flex self-start left-0 lg:w-90 md:w-90 w-60"
            alt=""
          />
          <div className="container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center z-10 lg:pt-0 md:pt-12 pt-8">
            <div
              data-aos="fade-right"
              className="flex flex-col gap-3 lg:w-115 md:w-90"
            >
              <h1 className="font-poppins font-bold text-[white] lg:text-[41px] md:text-[22px] text-[28px] leading-[150%]">
                Kami Siap <span className="text-gradient">Membantu</span>{" "}
                Menjaga Kesehatan{" "}
                <span className="text-gradient">Otak Anda</span>
              </h1>
              <p className="font-poppins font-medium text-[white] lg:text-[14px] lg:w-110 md:w-full w-full md:text-[13px] text-[12px] lg:leading-[200%] md:leading-[200%] leading-[170%]">
                Di era serba cepat ini, kesehatan otak sangat penting. Mulai
                dari deteksi dini tumor otak, konsultasi dengan dokter
                spesialis, hingga edukasi seputar otak kami hadir untuk Anda.
              </p>
              <Link
                to={"/diagnosis"}
                className="cursor-pointer font-poppins font-bold text-white bg-gradient w-fit lg:text-[16px] md:text-[13px] text-[11px] rounded-[50px] py-3.5 px-5 mt-3"
              >
                Coba Pemeriksaan Otak Gratis
              </Link>
              <div className="flex flex-row mt-4 lg:gap-10 gap-5">
                <div className="flex flex-col">
                  <h1 className="font-poppins font-bold text-white lg:text-[25px] md:text-[20px]">
                    <CountUp end={100} duration={2.5} separator="," />+
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[12px] text-[11px]">
                    Spesialis Otak
                  </p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-poppins font-bold text-white lg:text-[25px] md:text-[20px]">
                    <CountUp end={10} duration={2.5} separator="," />
                    K+
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[12px] text-[11px]">
                    Pengguna aktif
                  </p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-poppins font-bold text-white lg:text-[25px] md:text-[20px]">
                    <CountUp end={300} duration={2.5} separator="," />+
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[12px] text-[11px]">
                    Artikel Edukasi Otak
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="lg:flex md:flex hidden lg:w-100 md:w-80 justify-center"
            >
              <img
                src={home}
                className="lg:w-80 md:w-60 h-auto object-contain"
                alt=""
              />
              <div className="flex flex-col absolute lg:w-110 md:w-90 lg:h-110 md:h-90 justify-center lg:gap-20 md:gap-10">
                <div className="float flex flex-row bg-gradient ml-7 -translate-y-3 rounded-[7px] items-center px-3.5 py-2 gap-2 w-fit shadow-[0_0_4px_1px_rgba(0,0,0,0.40)]">
                  <img
                    src={chat_white}
                    className="lg:w-5.5 md:w-4 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-semibold text-white lg:text-[13px] md:text-[11px]">
                    Deteksi Tumor Otak
                  </p>
                </div>
                <div className="float-reverse flex flex-row self-end mr-5 bg-gradient rounded-[7px] items-center px-3.5 py-2 gap-2 w-fit shadow-[0_0_4px_1px_rgba(0,0,0,0.40)]">
                  <img
                    src={love_white}
                    className="lg:w-5.5 md:w-4 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-semibold text-white  lg:text-[13px] md:text-[11px]">
                    99% Orang Terbantu
                  </p>
                </div>
                <div className="float flex flex-row bg-gradient rounded-[7px] items-center px-3.5 py-2 gap-2 w-fit shadow-[0_0_4px_1px_rgba(0,0,0,0.40)]">
                  <img
                    src={diagnose_white}
                    className="lg:w-5.5 md:w-4 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-semibold text-white  lg:text-[13px] md:text-[11px]">
                    Diagnosa Berbasis AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex flex-col w-full justify-center items-center lg:pt-20 md:pt-20 pt-15 lg:pb-20 md:pb-20 pb-15"
        >
          <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center">
            <div
              data-aos="fade-right"
              className="flex flex-col gap-4 lg:w-110 md:w-75 w-full"
            >
              <p className="font-poppins font-semibold text-white bg-gradient rounded-[50px] py-2 px-5 lg:text-[15px] md:text-[13px] text-[11px] w-fit">
                Kenali BrainWest
              </p>
              <h1 className="font-poppins font-semibold text-white lg:text-[24px] md:text-[18px] text-[19px]">
                Temukan Layanan{" "}
                <span className="text-gradient">kesehatan otak</span> terbaik,
                dan dapat mudah diakses kapan saja.
              </h1>
              <p className="font-poppins font-normal text-white lg:text-[13px] md:text-[12px] text-[11px]">
                BrainWest hadir sebagai solusi lengkap untuk menjaga dan
                memantau kesehatan otak Anda. Mulai dari deteksi tumor otak,
                konsultasi dengan dokter, hingga edukasi seputar otak.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex flex-row gap-3">
                  <img
                    src={checklist}
                    className="lg:w-4 md:w-4 w-3.5 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-medium text-white lg:text-[12px] md:text-[11px] text-[10.5px]">
                    Semua bisa kamu akses langsung lewat BrainWest.
                  </p>
                </div>
                <div className="flex flex-row gap-3">
                  <img
                    src={checklist}
                    className="lg:w-4 md:w-4 w-3.5 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-medium text-white  lg:text-[12px] md:text-[11px] text-[10.5px]">
                    Semua tersedia dalam satu platform terpercaya.
                  </p>
                </div>
                <div className="flex flex-row gap-3">
                  <img
                    src={checklist}
                    className="lg:w-4 md:w-4 w-3.5 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-medium text-white lg:text-[12px] md:text-[11px] text-[10.5px]">
                    Nikmati kemudahan akses layanan otak hanya di BrainWest.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-row lg:gap-7 md:gap-7 gap-5 lg:mt-0 md:mt-0 mt-7"
            >
              <div className="flex flex-col gap-5 lg:w-55 md:w-45">
                <img
                  src={doctor_one}
                  className="h-auto object-contain"
                  alt=""
                />
                <div className="flex flex-col bg-white rounded-[10px] px-2.5 py-3 gap-1">
                  <img
                    src={call}
                    className="lg:w-12 md:w-10 w-9 h-auto object-contain"
                    alt=""
                  />
                  <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[12px] text-[10px] mt-2">
                    Konsultasi Spesialis Otak
                  </h1>
                  <p className="font-poppins font-medium text-gray lg:text-[11.5px] md:text-[11px] text-[10px] leading-[130%] mb-2">
                    Dapatkan diagnosa dan saran medis dari neurologi terbaik.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:w-55 md:w-45">
                <div className="flex flex-col bg-white rounded-[10px] px-2.5 py-3 gap-1">
                  <img
                    src={consul}
                    className="lg:w-12 md:w-10 w-9 h-auto object-contain"
                    alt=""
                  />
                  <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[12px] text-[10px] mt-2">
                    Telusuri Layanan Kami
                  </h1>
                  <p className="font-poppins font-medium text-gray lg:text-[11.5px] md:text-[11px] text-[10px] leading-[130%] mb-2">
                    Lihat fitur seperti konsultasi, deteksi tumor, dan edukasi
                    otak
                  </p>
                </div>
                <img
                  src={doctor_two}
                  className="h-auto object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between lg:pt-20 md:pt-20 pt-15 items-center">
            <div
              data-aos="fade-right"
              className="flex items-center justify-center"
            >
              <img
                src={consul_brain}
                className="lg:w-115 md:w-75 w-full h-auto object-contain"
                alt=""
              />
              <img
                src={circle_article}
                className="float absolute lg:w-28 md:w-20 w-23 lg:mt-80 md:mt-45 mt-55 lg:ml-20 md:ml-10 ml-15"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col lg:w-120 md:w-95 w-full gap-3 lg:mt-0 md:mt-0 mt-5"
            >
              <h1 className="font-poppins font-semibold text-white lg:text-[27px] md:text-[20px] text-[22px]">
                <span className="text-gradient">BrainWest,</span> Mitra
                Terpercaya untuk Kesehatan Otak Anda
              </h1>
              <p className="font-poppins font-normal text-white lg:text-[13px] md:text-[11px] text-[12px]">
                Kami percaya bahwa setiap orang berhak menjaga kesehatannya,
                termasuk otaknya. BrainWest hadir bukan hanya sebagai layanan,
                tapi sebagai mitra digital dalam mendeteksi dan merawat otak.
              </p>
              <div className="flex flex-col mt-3 lg:gap-6 md:gap-5 gap-5">
                <div className="flex flex-row items-center gap-5">
                  <img
                    src={verify}
                    className="lg:w-12 md:w-10 w-10 h-auto object-contain"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-poppins font-semibold text-white lg:text-[19px] md:text-[16px] text-[15px]">
                      Layanan Terpercaya
                    </h1>
                    <p className="font-poppins font-normal text-white lg:text-[13px] md:text-[11px] text-[11px] lg:w-95 md:w-full w-full">
                      Didukung oleh tim ahli dan rumah sakit mitra terpercaya
                      dalam bidang neurologi.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <img
                    src={chat}
                    className="lg:lg:w-12 md:w-10 w-10 h-auto object-contain"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-poppins font-semibold text-white lg:text-[19px] md:text-[16px] text-[15px]">
                      Respons Cepat & Akurat
                    </h1>
                    <p className="font-poppins font-normal text-white lg:text-[13px] md:text-[11px] text-[11px] lg:w-95 md:w-full w-full">
                      Teknologi AI kami siap memberikan hasil deteksi hanya
                      dalam hitungan menit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <img
                    src={information}
                    className="lg:w-12 md:w-10 w-10 h-auto object-contain"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-poppins font-semibold text-white lg:text-[19px] md:text-[16px] text-[15px]">
                      Privasi & Keamanan Terjamin
                    </h1>
                    <p className="font-poppins font-normal text-white lg:text-[13px] md:text-[11px] text-[11px] lg:w-95 md:w-full w-full">
                      Data medis Anda tersimpan dengan aman dan hanya dapat
                      diakses oleh Anda dan dokter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="service"
          className="bg-purple-primary flex w-full justify-center lg:py-20 md:py-20 py-15"
        >
          <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between gap-3">
            <h1
              data-aos="fade-down"
              className="font-poppins font-semibold text-white rounded-[50px] bg-[#34007D] text-[12px] px-5 py-2 w-fit"
            >
              Layanan Kami
            </h1>
            <h1
              data-aos="fade-down"
              className="font-poppins font-semibold text-white lg:text-[27px] md:text-[25px] text-[21px] lg:w-125 md:w-125 w-full"
            >
              Dukung Kesehatan Otakmu dengan Layanan Terintegrasi
            </h1>
            <p
              data-aos="fade-down"
              className="font-poppins font-normal text-white lg:w-125 md:w-125 w-full text-[12px]"
            >
              BrainWest menyediakan fitur pintar untuk membantu kamu menjaga
              kesehatan otak secara cepat, mudah, dan informatif.
            </p>
            <div
              data-aos="flip-left"
              className="flex lg:flex-row md:flex-row flex-col gap-5 mt-7"
            >
              <Link
                to={"/consultation"}
                className="flex flex-col w-full bg-white rounded-[5px] py-5 px-5 gap-1 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={consul_doctor}
                  className="lg:w-8.5 md:w-7 w-8 h-auto object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-semibold text-purple-primary lg:text-[19px] md:text-[17px] text-[19px] mt-3">
                  Konsultasi Ahli Otak
                </h1>
                <p className="font-poppins font-medium text-gray lg:text-[13px] md:text-[13px] text-[12px] lg:w-65">
                  Terhubung langsung dengan dokter spesialis saraf untuk
                  konsultasi cepat dan terpercaya.
                </p>
                <img
                  src={right_arrow}
                  className="w-5 self-end lg:mt-0 md:mt-0 mt-3"
                  alt=""
                />
              </Link>
              <Link
                to={"/detection"}
                className="flex flex-col w-full bg-white rounded-[5px] py-5 px-5 gap-1 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={detect}
                  className="lg:w-8.5 md:w-7 w-8 h-auto object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-semibold text-purple-primary lg:text-[19px] md:text-[17px] text-[19px] mt-3">
                  Deteksi Tumor Otak
                </h1>
                <p className="font-poppins font-medium text-gray lg:text-[13px] md:text-[13px] text-[12px] lg:w-65">
                  Unggah gambar MRI/CT Scan dan dapatkan analisis instan
                  berbasis AI gratis yang terpercaya.
                </p>
                <img
                  src={right_arrow}
                  className="w-5 self-end lg:mt-0 md:mt-0 mt-3"
                  alt=""
                />
              </Link>
              <Link
                to={"/diagnosis"}
                className="flex flex-col w-full bg-white rounded-[5px] py-5 px-5 gap-1 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={consultation_purple}
                  className="lg:w-8.5 md:w-7 w-8 h-auto object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-semibold text-purple-primary lg:text-[19px] md:text-[17px] text-[19px] mt-3">
                  Diagnosa Otak Otomatis
                </h1>
                <p className="font-poppins font-medium text-gray lg:text-[13px] md:text-[13px] text-[12px] lg:w-65">
                  Ketahui kondisi kesehatan otakmu lewat diagnosa berbasis AI
                  yang akurat.
                </p>
                <img src={right_arrow} className="w-5 self-end" alt="" />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="testimonial"
          className="flex flex-col w-full justify-center lg:pt-20 md:pt-20 pt-15 overflow-x-hidden"
        >
          <div className="flex flex-col w-full justify-center items-center lg:gap-10 md:gap-10 gap-7">
            <div
              data-aos="fade-down"
              className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between lg:gap-8 md:gap-8 gap-7"
            >
              <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
                <h1 className="font-poppins font-semibold text-white lg:text-[33px] md:text-[30px] text-[25px] lg:w-100 md:w-100 w-full">
                  Apa Kata Mereka Tentang{" "}
                  <span className="text-gradient">BrainWest:</span>
                </h1>
                <p className="font-poppins font-normal text-white text-[10.5px] lg:w-90 md:w-90 w-full lg:mt-0 md:mt-0 mt-3">
                  Kami memahami bahwa kesehatan otak adalah investasi jangka
                  panjang untuk kualitas hidup yang lebih baik. Dengan dukungan
                  dokter spesialis, teknologi modern, dan pendekatan holistik,
                  kami berkomitmen memberikan layanan yang aman, nyaman, dan
                  terpercaya untuk Anda.
                </p>
              </div>
              <hr className="border-[#7D7D7D]" />
            </div>
            <div
              data-aos="zoom-in-up"
              ref={scrollRef1}
              className="flex flex-row w-full self-start gap-5 scroll-left"
            >
              {[...testi1, ...testi1].map((testi, index) => (
                <div
                  key={index}
                  onClick={() => handleClickLeft(index)}
                  className={`relative rounded-[10px] p-[5px] cursor-pointer transition-all duration-300 ${
                    selectedIndexLeft === index
                      ? "bg-gradient"
                      : "bg-transparent"
                  }`}
                >
                  <div
                    style={{ backgroundColor: testi.bg }}
                    className="flex flex-col w-fit rounded-[9px] px-3 py-4 gap-3"
                  >
                    <img src={two} className="w-8" alt="" />
                    <p className="font-poppins font-normal lg:text-[12px] md:text-[12px] text-[11px] w-90 lg:h-18 md:h-20 h-17 tracking-wider">
                      {testi.text}
                    </p>
                    <hr className="border-[#003B47] border-[0.90px] mt-2" />
                    <div className="flex flex-row justify-between items-center mt-2 mb-3">
                      <div className="flex flex-row items-center gap-3">
                        <img src={testi.img} className="w-10" alt="" />
                        <div className="flex flex-col">
                          <h1 className="font-poppins font-semibold text-[12px]">
                            {testi.name}
                          </h1>
                          <p className="font-poppins font-medium text-[#003B47] text-[11px]">
                            {testi.work}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <p className="font-poppins font-normal text-blue-primary text-[11.5px]">
                          Read More
                        </p>
                        <img
                          src={blue_arrow}
                          className="w-1.5 h-auto object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              data-aos="zoom-in-up"
              ref={scrollRef2}
              className="flex flex-row w-full self-start gap-5 scroll-right"
            >
              {[...testi1, ...testi1].map((testi, index) => (
                <div
                  key={index}
                  onClick={() => handleClickRight(index)} // Bedain index dari list pertama
                  className={`relative rounded-[10px] p-[5px] cursor-pointer transition-all duration-300 ${
                    selectedIndexRight === index
                      ? "bg-gradient"
                      : "bg-transparent"
                  }`}
                >
                  <div
                    style={{ backgroundColor: testi.bg }}
                    className="flex flex-col w-fit rounded-[9px] px-3 py-4 gap-3"
                  >
                    <img src={two} className="w-8" alt="" />
                    <p className="font-poppins font-normal lg:text-[12px] md:text-[12px] text-[11px] w-90 lg:h-18 md:h-20 h-17 tracking-wider">
                      {testi.text}
                    </p>
                    <hr className="border-[#003B47] border-[0.90px] mt-2" />
                    <div className="flex flex-row justify-between items-center mt-2 mb-3">
                      <div className="flex flex-row items-center gap-3">
                        <img src={testi.img} className="w-10" alt="" />
                        <div className="flex flex-col">
                          <h1 className="font-poppins font-semibold text-[12px]">
                            {testi.name}
                          </h1>
                          <p className="font-poppins font-medium text-[#003B47] text-[11px]">
                            {testi.work}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <p className="font-poppins font-normal text-blue-primary text-[11.5px]">
                          Read More
                        </p>
                        <img
                          src={blue_arrow}
                          className="w-1.5 h-auto object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
          <div
            data-aos="zoom-in"
            className="container flex flex-row lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center"
          >
            <div className="lg:flex md:flex hidden items-center">
              <img
                src={gradient_ai}
                className="lg:w-60 md:w-50 h-auto object-contain"
                alt=""
              />
              <img
                src={ai}
                className="float absolute lg:w-79 md:w-65 h-auto object-contain lg:-ml-3 md:-ml-2 mt-8"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-poppins font-semibold text-white lg:text-[42px] md:text-[35px] text-[27px]">
                Smart Health <span className="text-gradient">Assistant</span>
              </h1>
              <p className="font-poppins font-normal text-white lg:text-[18px] md:text-[14px] text-[12px] lg:w-165 md:w-115 w-full">
                AI Konsultan Kesehatan adalah chatbot pintar yang siap
                membantumu kapan saja untuk memahami keluhan dan gejala yang
                kamu rasakan. Cukup dengan ngobrol seperti biasa, chatbot ini
                akan menganalisis dan memberikan saran awal secara cepat dan
                informatif. Cocok banget buat kamu yang butuh panduan kesehatan
                ringan sebelum memutuskan untuk konsultasi langsung ke tenaga
                medis.
              </p>
              <Link
                to={"/chatbot"}
                className="cursor-pointer font-poppins font-semibold text-white bg-gradient rounded-[50px] lg:text-[18px] md:text-[16px] text-[14px] px-5.5 py-3 lg:mt-3 md:mt-3 mt-2 w-fit"
              >
                Chat Sekarang
              </Link>
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
          <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 gap-3">
            <h1
              data-aos="fade-down"
              className="font-poppins font-bold text-white lg:text-[35px] md:text-[35px] text-[25px]"
            >
              Cegah <span className="text-gradient">Tumor Otak</span> Sejak Dini
            </h1>
            <p
              data-aos="fade-down"
              className="font-poppins font-normal text-white lg:text-[13.5px] md:text-[13.5px] text-[12px] lg:w-135 md:w-135"
            >
              BrainWest menghadirkan layanan terpadu untuk membantu mengenali,
              mencegah, dan memahami lebih dalam seputar kesehatan otak secara
              digital.
            </p>
            <div
              data-aos="flip-down"
              className="flex lg:flex-row md:flex-row flex-col justify-between lg:mt-7 md:mt-7 mt-5 lg:gap-5 md:gap-3 gap-5"
            >
              <div className="flex flex-col w-full items-center border-[1px] border-purple-secondary gap-4 rounded-[10px] px-4 py-5 bg-bg hover:bg-purple-thirdtinary hover:border-none transition duration-300 ease-in-out transform hover:-translate-y-2">
                <img
                  src={skrinning}
                  className="lg:w-16 md:w-14 w-17 h-16 object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-bold text-white lg:text-[19px] md:text-[13px] text-[17px] text-center">
                  Skrining Awal Otak
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[11px] text-[13px] text-center lg:h-40 md:h-35 h-20">
                  Manfaatkan teknologi AI untuk mendeteksi tanda-tanda awal tumor otak dengan cepat dan tepat, sehingga penanganan bisa dilakukan sedini mungkin.
                </p>
              </div>
              <div className="flex flex-col w-full items-center border-[1px] border-purple-secondary gap-4 rounded-[10px] px-4 py-5 bg-bg hover:bg-purple-thirdtinary hover:border-none transition duration-300 ease-in-out transform hover:-translate-y-2">
                <img
                  src={infos}
                  className="lg:w-16 md:w-14 w-17 h-16 object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-bold text-white lg:text-[19px] md:text-[13px] text-[17px] text-center">
                  Info Seputar Otak
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[11px] text-[13px] text-center lg:h-40 md:h-35 h-20">
                  Pelajari beragam topik seputar kesehatan otak dan mental,
                  disajikan dengan bahasa yang mudah dipahami untuk semua
                  kalangan.
                </p>
              </div>
              <div className="flex flex-col w-full items-center border-[1px] border-purple-secondary gap-4 rounded-[10px] px-4 py-5 bg-bg hover:bg-purple-thirdtinary hover:border-none transition duration-300 ease-in-out transform hover:-translate-y-2">
                <img
                  src={lifestyle}
                  className="lg:w-16 md:w-14 w-17 h-16 object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-bold text-white lg:text-[19px] md:text-[13px] text-[17px] text-center">
                  Lifestyle Otak Sehat
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[11px] text-[13px] text-center lg:h-40 md:h-35 h-20">
                  Dapatkan panduan hidup sehat mulai dari pola makan, aktivitas
                  fisik, hingga kebiasaan sehari-hari yang dapat mendukung
                  fungsi otak secara menyeluruh.
                </p>
              </div>
              <div className="flex flex-col w-full items-center border-[1px] border-purple-secondary gap-4 rounded-[10px] px-4 py-5 bg-bg hover:bg-purple-thirdtinary hover:border-none transition duration-300 ease-in-out transform hover:-translate-y-2">
                <img
                  src={doctors}
                  className="lg:w-16 md:w-14 w-17 h-15 object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-bold text-white lg:text-[19px] md:text-[13px] text-[17px] text-center">
                  Akses Konsultasi
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[11px] text-[13px] text-center lg:h-40 md:h-35 h-20">
                  Dapatkan akses langsung ke dokter spesialis saraf untuk
                  konsultasi, interpretasi hasil scan, hingga pemantauan rutin
                  berbasis data digital
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
          <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:items-center md:items-start gap-3">
            <h1
              data-aos="fade-down"
              className="font-poppins font-bold text-white lg:text-[40px] md:text-[30px] text-[25px] "
            >
              Insight Kasus <span className="text-gradient">Tumor Otak</span>{" "}
              Tahunan
            </h1>
            <p
              data-aos="fade-down"
              className="font-poppins font-normal text-white lg:text-center lg:text-[14px] md:text-[14px] text-[12px] lg:w-205 md:w-170"
            >
              Dengan mengumpulkan data tahunan, kita bisa melihat tren
              peningkatan atau penurunan kasus tumor otak dari tahun ke tahun.
              Data ini berguna untuk menentukan strategi pencegahan, edukasi,
              dan deteksi dini yang lebih efektif dengan bantuan teknologi medis
              terbaru.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-col w-full px-5 py-6 bg-[#4800AC] rounded-[12.5px] mt-5"
            >
              <div className="flex lg:flex-row md:flex-row flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="font-poppins font-semibold text-white lg:text-[25px] md:text-[25px] text-[20px]">
                    Data <span className="text-gradient">Statistik</span>{" "}
                    pertahun
                  </h1>
                  <div className="flex flex-row items-center gap-3.5">
                    <h1 className="font-poppins font-semibold text-white lg:text-[13px] md:text-[13px] text-[12px]">
                      Kategori:{" "}
                    </h1>
                    <div className="flex flex-row gap-1.5 items-center">
                      <img
                        src={circle_man}
                        className="w-2.5 h-auto object-contain"
                        alt=""
                      />
                      <p className="font-poppins font-medium text-white text-[11px]">
                        Pria
                      </p>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center">
                      <img
                        src={circle_woman}
                        className="w-2.5 h-auto object-contain"
                        alt=""
                      />
                      <p className="font-poppins font-medium text-white text-[11px]">
                        Wanita
                      </p>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center">
                      <img
                        src={circle_child}
                        className="w-2.5 h-auto object-contain"
                        alt=""
                      />
                      <p className="font-poppins font-medium text-white text-[11px]">
                        Anak-anak
                      </p>
                    </div>
                  </div>
                </div>
                <select
                  type="text"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] text-black bg-white  rounded-[7px] outline-none py-2 px-3 w-20 h-10 lg:mt-0 md:mt-0 mt-4"
                >
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
              <StatistikChart
                data-aos="fade-up"
                data={dataByYear[selectedYear]}
              />
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
          <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 gap-5">
            <h1
              data-aos="fade-down"
              className="font-poppins font-semibold text-white lg:text-[35px] md:text-[30px] text-[23px] w-fit"
            >
              Topik Terkini <span className="text-gradient">tentang Otak</span>
            </h1>
            <div className="flex lg:flex-row md:flex-row flex-col w-full justify-between">
              <a
                href="https://www.eatingwell.com/best-fruit-to-lower-dementia-risk-11777712?utm_source=chatgpt.com"
                data-aos="fade-right"
                className="flex flex-col lg:w-115 md:w-85 w-full gap-1 cursor-pointer"
              >
                <img
                  src={news1}
                  className="w-full h-auto object-contain"
                  alt=""
                />
                <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[13px] mt-2">
                  Senin 5 Januari, 2025
                </p>
                <h1 className="font-poppins font-semibold text-[#38BDF8] lg:text-[23px] md:text-[20px] text-[20px] line-clamp-2">
                  Buah Terbaik untuk Kurangi Risiko Demensia, Menurut Ahli Gizi
                </h1>
                <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[14px] text-[14px] line-clamp-2">
                  Blueberry disebut sebagai buah nomor satu yang mendukung
                  kesehatan otak dan memperlambat...
                </p>
              </a>
              <div
                data-aos="fade-left"
                className="flex flex-col justify-between lg:gap-0 md:gap-0 gap-5 lg:mt-0 md:mt-0 mt-5"
              >
                <a
                  href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/3-effective-science-backed-ways-to-keep-the-brain-healthy/articleshow/122836896.cms?utm_source=chatgpt.com"
                  className="flex flex-row items-center gap-5 cursor-pointer"
                >
                  <img
                    src={news5}
                    className="lg:w-40 md:w-35 w-25 lg:h-35 md:h-30 h-25 object-cover rounded-[12.5px]"
                    alt=""
                  />
                  <div className="flex flex-col lg:w-80 md:w-50 w-full lg:gap-0 md:gap-1 gap-1">
                    <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[12px]">
                      Kamis 3 Desember, 2025
                    </p>
                    <h1 className="font-poppins font-semibold text-[#38BDF8] lg:text-[23px] md:text-[16px] text-[14px] line-clamp-2">
                      Pandemi COVID-19 Bikin Otak Cepat Menua{" "}
                    </h1>
                    <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[13px] text-[11px] line-clamp-2">
                      Penelitian di Nature Communications menyebut bahwa stres
                      dan isolasi saat...
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.womanandhome.com/health-wellbeing/covid-19-brain-age-study/?utm_source=chatgpt.com"
                  className="flex flex-row items-center gap-5 cursor-pointer"
                >
                  <img
                    src={news3}
                    className="lg:w-40 md:w-35 w-25 lg:h-35 md:h-30 h-25 object-cover rounded-[12.5px]"
                    alt=""
                  />
                  <div className="flex flex-col lg:w-80 md:w-50 w-full lg:gap-0 md:gap-1 gap-1">
                    <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[12px]">
                      Selasa 5 Februari, 2025
                    </p>
                    <h1 className="font-poppins font-semibold text-[#38BDF8] lg:text-[23px] md:text-[16px] text-[14px] line-clamp-2">
                      3 Cara untuk Pertahankan Kesehatan Otak
                    </h1>
                    <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[13px] text-[11px] line-clamp-2">
                      Aktivitas fisik, interaksi sosial, dan mengejar minat
                      pribadi terbukti ilmiah...
                    </p>
                  </div>
                </a>
                <a
                  href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/stress-and-brain-tumors-separating-fact-from-fiction/articleshow/121706760.cms?utm_source=chatgpt.com"
                  className="flex flex-row items-center gap-5 cursor-pointer"
                >
                  <img
                    src={news4}
                    className="lg:w-40 md:w-35 w-25 lg:h-35 md:h-30 h-25 object-cover rounded-[12.5px]"
                    alt=""
                  />
                  <div className="flex flex-col lg:w-80 md:w-50 w-full lg:gap-0 md:gap-1 gap-1">
                    <p className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[12px]">
                      Jumat 15 Maret, 2025
                    </p>
                    <h1 className="font-poppins font-semibold text-[#38BDF8] lg:text-[23px] md:text-[16px] text-[14px] line-clamp-2">
                      Mitos / Fakta Stres Tidak Menyebabkan Tumor Otak
                    </h1>
                    <p className="font-poppins font-normal text-white lg:text-[15px] md:text-[13px] text-[11px] line-clamp-2">
                      Dalam jurnal global, para ahli menjelaskan bahwa stres
                      tidak...
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
          <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:items-center md:items-center lg:gap-2 md:gap-3 gap-3">
            <h1
              data-aos="fade-down"
              className="font-poppins font-bold text-white lg:text-[40px] md:text-[30px] text-[25px]"
            >
              <span className="text-gradient">Edukasi Otak:</span> Kenali,
              Pahami, Lindungi
            </h1>
            <p
              data-aos="fade-down"
              className="font-poppins font-normal text-white lg:text-center md:text-center text-start lg:text-[14px] md:text-[13px] text-[12px] lg:w-200 md:w-160"
            >
              Yuk, tonton berbagai video singkat yang akan bantu kamu memahami
              lebih dalam tentang kesehatan otak! Dari gejala awal, cara
              pencegahan, hingga mitos yang sering bikin salah kaprah—semua
              dijelaskan dengan cara yang mudah dipahami dan menarik.
            </p>
            <div className="flex flex-row flex-wrap w-full justify-between lg:mt-7 md:mt-5 mt-3 gap-y-7">
              {video.map((vid, i) => (
                <a
                  data-aos="zoom-in"
                  href={vid.link}
                  key={i}
                  className="cursor-pointer flex flex-col lg:w-80 md:w-87 bg-white rounded-[12px] p-4 gap-1.5"
                >
                  <img
                    src={vid.image}
                    className="w-full h-auto object-contain"
                    alt=""
                  />
                  <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] text-[18px] lg:h-15 md:h-15 mt-2 line-clamp-2">
                    {vid.name}
                  </h1>
                  <p className="font-poppins font-medium text-[#757575] lg:h-12 md:h-12 text-[11px] line-clamp-3">
                    {vid.desc}
                  </p>
                  <div className="flex flex-row mt-3 items-center gap-2">
                    <img
                      src={vid.person}
                      className="w-8.5 h-auto object-contain"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <h1 className="font-poppins font-semibold text-[12px]">
                        {vid.creator}
                      </h1>
                      <p className="font-poppins font-medium text-[#838383] text-[11px]">
                        {vid.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
          <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center">
            <img
              data-aos="fade-right"
              src={community}
              className="lg:w-135 md:w-95 w-full h-auto object-contain"
              alt=""
            />
            <div
              data-aos="fade-left"
              className="flex flex-col lg:w-105 md:w-75 w-full gap-3 lg:mt-0 md:mt-0 mt-7"
            >
              <div className="flex flex-row py-2 px-3 bg-purple-primary rounded-[7.5px] items-center gap-2 w-fit">
                <img
                  src={communityIcon}
                  className="w-4 h-auto object-contain"
                  alt=""
                />
                <h1 className="font-poppins font-medium text-white lg:text-[11px] md:text-[10px] text-[11px]">
                  Komunitas Kami
                </h1>
              </div>
              <h1 className="font-poppins font-semibold text-white lg:text-[35px] md:text-[25px] text-[25px] leading-[130%]">
                Bergabung{" "}
                <span className="text-gradient">Komunitas Peduli Otak</span>
              </h1>
              <p className="font-poppins font-normal text-white lg:text-[13px] md:text-[11px] text-[11px]">
                Kami percaya bahwa edukasi adalah kunci untuk menjaga kesehatan
                otak. Bersama komunitas kami, kamu bisa belajar, berbagi, dan
                bertumbuh lewat berbagai konten dan diskusi seputar otak serta
                kesehatan mental.
              </p>
              <div className="flex flex-row mt-4 items-center gap-4">
                <Link
                  to={"/community"}
                  className="font-poppins font-semibold text-white lg:text-[15px] md:text-[13px] text-[12px] bg-purple-primary py-3 px-5 rounded-[50px]"
                >
                  Gabung Sekarang
                </Link>
                <div className="flex flex-row items-center gap-3">
                  <p className="font-poppins font-semibold text-[#0368FF] lg:text-[16px] md:text-[12px]">
                    Dukung Kami
                  </p>
                  <img
                    src={rightArrowBlue}
                    className="lg:w-7 md:w-5 w-5 h-auto object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-15 md:pt-15 pt-15 lg:pb-20 md:pb-20 pb-15 justify-center">
          <div className="container flex lg:flex-row flex-col md:flex-row justify-between lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 items-end">
            <div
              data-aos="fade-right"
              className="flex flex-col lg:w-135 md:w-85 w-full gap-5"
            >
              <h1 className="font-poppins font-bold text-white lg:text-[35px] md:text-[20px] text-[20px]">
                Masalah yang Sering Terjadi,{" "}
                <span className="text-gradient">Tapi Sering Diabaikan</span>
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row items-center lg:gap-4 md:gap-4 gap-3">
                  <h1 className="font-poppins font-bold text-blue-primary lg:text-[40px] md:text-[35px] text-[25px]">
                    01.
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[18px] md:text-[12px] text-[13px] lg:ml-2 md:ml-2 ml-1">
                    Cepat lupa dan sulit fokus sering dianggap wajar, padahal
                    bisa jadi tanda otak mulai menurun.
                  </p>
                </div>
                <div className="flex flex-row items-center lg:gap-4 md:gap-4 gap-3">
                  <h1 className="font-poppins font-bold text-blue-primary lg:text-[40px] md:text-[35px] text-[25px]">
                    02.
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[18px] md:text-[12px] text-[13px]">
                    Stres, kurang tidur, dan terlalu sering multitasking bikin
                    otak lelah tanpa disadari.
                  </p>
                </div>
                <div className="flex flex-row items-center lg:gap-4 md:gap-4 gap-3">
                  <h1 className="font-poppins font-bold text-blue-primary lg:text-[40px] md:text-[35px] text-[25px]">
                    03.
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[18px] md:text-[12px] text-[13px]">
                    Kesehatan otak sering terlupakan, sampai akhirnya muncul
                    masalah serius.
                  </p>
                </div>
              </div>
            </div>
            <img
              data-aos="fade-left"
              src={problem}
              className="lg:w-105 md:w-85 w-full h-auto object-contain lg:mt-0 md:mt-0 mt-7"
              alt=""
            />
          </div>
        </section>

        <section className="bg-purple-primary flex w-full justify-center lg:py-20 md:py-20 py-15">
          <div className="flex lg:flex-row md:flex-col flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-9 px-5 justify-between">
            <div
              data-aos="fade-right"
              className="flex flex-col lg:w-110 md:w-full gap-2"
            >
              <h1 className="font-poppins font-semibold text-white rounded-[50px] bg-[#34007D] lg:text-[12px] md:text-[15px] text-[11px] px-5 py-2 w-fit">
                Solusi dari kami
              </h1>
              <h1 className="font-poppins font-semibold text-white lg:text-[35px] md:text-[35px] text-[27px] leading-[130%] mt-1">
                Solusi Nyata untuk Jaga Kesehatan Otak
              </h1>
              <p className="font-poppins font-normal text-white lg:text-[14px] md:text-[18px] text-[14px] lg:mt-0 md:mt-2 mt-1">
                Setelah memahami masalah, berikut langkah-langkah yang bisa
                membantumu menjaga dan meningkatkan fungsi otak:
              </p>
              <img
                src={solutions}
                className="w-full h-auto object-contain lg:mt-auto md:mt-5 mt-3"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col lg:w-125 md:w-full lg:mt-13.5 md:mt-11.5 mt-8"
            >
              <div className="flex flex-row gap-5">
                <img
                  src={solution1}
                  className="lg:w-16 md:w-20 w-18.5 h-auto object-contain"
                  alt=""
                />
                <div className="flex flex-col lg:-mt-1.5 md:-mt-1 mt-0">
                  <h1 className="font-poppins font-semibold text-white lg:text-[21px] md:text-[25px] text-[15px]">
                    Sadar Akan Risiko
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[12.5px] md:text-[16px] text-[12px]">
                    Kenali tanda-tanda gangguan otak dan dampak dari gaya hidup
                    modern seperti stres dan overthinking.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <img
                  src={solution2}
                  className="lg:w-16 md:w-20 w-18.5 h-auto object-contain"
                  alt=""
                />
                <div className="flex flex-col lg:-mt-1.5 md:-mt-1 mt-0">
                  <h1 className="font-poppins font-semibold text-white lg:text-[21px] md:text-[25px] text-[15px]">
                    Kurangi Beban Otak Sehari-hari
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[12.5px] md:text-[16px] text-[12px]">
                    Mulai dari mengatur waktu layar, istirahat cukup, hingga
                    menghindari multitasking berlebihan.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <img
                  src={solution3}
                  className="lg:w-16 md:w-20 w-18.5 h-auto object-contain"
                  alt=""
                />
                <div className="flex flex-col lg:-mt-1.5 md:-mt-1 mt-0">
                  <h1 className="font-poppins font-semibold text-white lg:text-[21px] md:text-[25px] text-[15px]">
                    Latih Otakmu Secara Berkala
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[12.5px] md:text-[16px] text-[12px]">
                    Gunakan tools sederhana seperti kuis otak dan latihan
                    kognitif untuk mengetahui kondisi mentalmu.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <img
                  src={solution4}
                  className="lg:w-16 md:w-20 w-18.5 h-auto object-contain"
                  alt=""
                />
                <div className="flex flex-col lg:-mt-1.5 md:-mt-1 mt-0">
                  <h1 className="font-poppins font-semibold text-white lg:text-[21px] md:text-[25px] text-[15px]">
                    Ambil Aksi dan Mulai Hari Ini
                  </h1>
                  <p className="font-poppins font-normal text-white lg:text-[12.5px] md:text-[16px] text-[12px]">
                    Ingat, menjaga otak bukan tugas sekali, tapi perjalanan
                    konsisten. Ayo mulai langkah pertamamu sekarang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center">
          <div className="container flex flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 lg:items-center md:items-center items-start gap-2">
            <h1
              data-aos="fade-down"
              className="font-poppins font-semibold text-white lg:text-[40px] md:text-[35px] text-[27px]"
            >
              Tips Menjaga <span className="text-gradient">Kesehatan Otak</span>
            </h1>
            <p
              data-aos="fade-down"
              className="font-poppins font-medium text-white lg:text-[14px] md:text-[13px] text-[12px] lg:text-center md:text-center text-start lg:w-180 md:w-full"
            >
              Kumpulan Strategi Sederhana dan Efektif untuk Menjaga,
              Meningkatkan, dan Memaksimalkan Fungsi Otak dalam Aktivitas
              Sehari-hari agar Tetap Fokus, Tajam, dan Seimbang secara Mental.
            </p>
            <div className="flex flex-col w-full gap-5 lg:mt-8 md:mt-8 mt-5">
              <div className="flex lg:flex-row md:flex-col flex-col w-full justify-between lg:gap-7 md:gap-5 gap-5">
                <div
                  data-aos="zoom-in"
                  className="relative flex flex-col w-full rounded-[12.5px] bg-purple-primary/25 px-5 py-5 gap-5"
                >
                  <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-3">
                    <img
                      src={num1}
                      className="lg:w-9 md:w-10 w-8 h-auto object-center"
                      alt=""
                    />
                    <h1 className="font-poppins font-semibold text-white lg:text-[22px] md:text-[30px] text-[20px]">
                      Cukupi Kebutuhan Tidur
                    </h1>
                  </div>
                  <p className="font-poppins font-medium text-white lg:text-[13px] md:text-[16px] text-[12px] lg:w-72 md:w-125 w-full">
                    Tidur yang cukup membantu otak memperbaiki sel-sel dan
                    memperkuat daya ingat. Usahakan tidur 7–9 jam setiap malam
                    agar otak tetap segar dan fokus.
                  </p>
                  <img
                    src={tips1}
                    className="lg:flex md:flex hidden absolute right-0 bottom-0 lg:w-35 md:w-40 h-auto object-contain mr-5 mb-4"
                    alt=""
                  />
                </div>
                <div
                  data-aos="zoom-in"
                  className="relative flex flex-col w-full rounded-[12.5px] bg-purple-primary/25 px-5 py-5 gap-5"
                >
                  <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-3">
                    <img
                      src={num2}
                      className="lg:w-9 md:w-10 w-8 h-auto object-center"
                      alt=""
                    />
                    <h1 className="font-poppins font-semibold text-white lg:text-[22px] md:text-[30px] text-[20px]">
                      Konsumsi Makanan Bergizi
                    </h1>
                  </div>
                  <p className="font-poppins font-medium text-white lg:text-[13px] md:text-[16px] text-[12px] lg:w-72 md:w-130 w-full">
                    Makanan kaya omega-3, antioksidan, dan vitamin B baik untuk
                    kesehatan otak. Contohnya seperti ikan, kacang-kacangan,
                    blueberry, dan sayuran hijau.
                  </p>
                  <img
                    src={tips2}
                    className="lg:flex md:flex hidden absolute right-0 bottom-0 lg:w-30 md:w-35 h-auto object-contain mr-5 mb-4"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col w-full justify-between lg:gap-7 md:gap-5 gap-5">
                <div
                  data-aos="zoom-in"
                  className="relative flex flex-col w-full rounded-[12.5px] bg-purple-primary/25 px-5 py-5 gap-5"
                >
                  <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-3">
                    <img
                      src={num3}
                      className="lg:w-9 md:w-10 w-8 h-auto object-center"
                      alt=""
                    />
                    <h1 className="font-poppins font-semibold text-white lg:text-[22px] md:text-[30px] text-[20px]">
                      Latih Otak Secara Rutin
                    </h1>
                  </div>
                  <p className="font-poppins font-medium text-white lg:text-[13px] md:text-[16px] text-[12px] lg:w-80 md:w-135 w-full">
                    Lakukan aktivitas yang menantang otak seperti teka-teki,
                    sudoku, atau belajar hal baru. Hal ini membantu menjaga daya
                    ingat dan mencegah penurunan kognitif.
                  </p>
                  <img
                    src={tips3}
                    className="lg:flex md:flex hidden absolute right-0 bottom-0 lg:w-30 md:w-30 h-auto object-contain mr-5 mb-4"
                    alt=""
                  />
                </div>
                <div
                  data-aos="zoom-in"
                  className="relative flex flex-col w-full rounded-[12.5px] bg-purple-primary/25 px-5 py-5 gap-5"
                >
                  <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-3">
                    <img
                      src={num4}
                      className="lg:w-9 md:w-10 w-8 h-auto object-center"
                      alt=""
                    />
                    <h1 className="font-poppins font-semibold text-white lg:text-[22px] md:text-[30px] text-[20px]">
                      Rutin Berolahraga
                    </h1>
                  </div>
                  <p className="font-poppins font-medium text-white lg:text-[13px] md:text-[16px] text-[12px] lg:w-75 md:w-130 w-full">
                    Aktivitas fisik meningkatkan aliran darah ke otak dan
                    memperkuat koneksi neuron. Lakukan olahraga ringan minimal
                    30 menit per hari.
                  </p>
                  <img
                    src={tips4}
                    className="lg:flex md:flex hidden absolute right-0 bottom-0 w-33 h-auto object-contain mr-5 mb-4"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col w-full justify-between lg:gap-7 md:gap-5 gap-5">
                <div
                  data-aos="zoom-in"
                  className="relative flex flex-col w-full rounded-[12.5px] bg-purple-primary/25 px-5 py-5 gap-5"
                >
                  <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-3">
                    <img
                      src={num5}
                      className="lg:w-9 md:w-10 w-8 h-auto object-center"
                      alt=""
                    />
                    <h1 className="font-poppins font-semibold text-white lg:text-[22px] md:text-[30px] text-[20px]">
                      Hindari Stres Berlebihan
                    </h1>
                  </div>
                  <p className="font-poppins font-medium text-white lg:text-[13px] md:text-[16px] text-[12px] lg:w-85 md:w-145 w-full">
                    Stres kronis bisa merusak struktur otak dan memengaruhi
                    konsentrasi. Coba teknik relaksasi seperti meditasi atau
                    pernapasan dalam hingga membuat kita tidak stress.
                  </p>
                  <img
                    src={tips5}
                    className="lg:flex md:flex hidden absolute right-0 bottom-0 w-20 h-auto object-contain mr-5 mb-4"
                    alt=""
                  />
                </div>
                <div
                  data-aos="zoom-in"
                  className="relative flex flex-col w-full rounded-[12.5px] bg-purple-primary/25 px-5 py-5 gap-5"
                >
                  <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-3">
                    <img
                      src={num6}
                      className="lg:w-9 md:w-10 w-8 h-auto object-center"
                      alt=""
                    />
                    <h1 className="font-poppins font-semibold text-white lg:text-[22px] md:text-[30px] text-[20px]">
                      Bangun Interaksi Sosial
                    </h1>
                  </div>
                  <p className="font-poppins font-medium text-white lg:text-[13px] md:text-[16px] text-[12px] lg:w-85 md:w-140 w-full">
                    Berinteraksi dengan orang lain dapat menjaga fungsi kognitif
                    dan suasana hati. Luangkan waktu untuk berbicara, bercanda,
                    atau diskusi ringan setiap hari.
                  </p>
                  <img
                    src={tips6}
                    className="lg:flex md:flex hidden absolute right-0 bottom-0 lg:w-25 md:w-25 h-auto object-contain mr-5 mb-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="location"
          className="flex w-full lg:pt-20 md:pt-20 pt-15 justify-center"
        >
          <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between">
            <div
              data-aos="fade-right"
              className="flex flex-col lg:w-120 md:w-80 w-full gap-5"
            >
              <div className="flex flex-row bg-purple-primary items-center gap-2 rounded-[7px] py-2 px-4 w-fit">
                <img
                  src={location_icon}
                  className="lg:w-2.5 md:w-2.5 w-2
                   h-auto object-contain"
                  alt=""
                />
                <p className="font-poppins font-medium text-white lg:text-[11px] md:text-[11px] text-[10px]">
                  Lokasi Kami
                </p>
              </div>
              <h1 className="font-poppins font-semibold text-white lg:text-[35px] md:text-[24px] text-[23px] lg:leading-[130%]">
                Temukan Klinik <span className="text-gradient">BrainWest</span>{" "}
                di Berbagai Kota
              </h1>
              <p className="font-poppins font-normal text-white tracking-wider lg:text-[14.5px] md:text-[10px] text-[11px]">
                Kami hadir lebih dekat dengan Anda melalui berbagai lokasi
                strategis di Indonesia. Baik untuk konsultasi rutin, terapi
                neurologis, atau penanganan gangguan otak tertentu, tim ahli
                kami siap memberikan layanan yang aman, nyaman, dan terpercaya.
              </p>
              <div className="flex flex-row w-full gap-7">
                <div className="flex flex-col w-full gap-2">
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("serpong")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "serpong" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Serpong
                  </p>
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("bali")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "bali" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Bali
                  </p>
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("jaktim")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "jaktim" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Jakarta Timur
                  </p>
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("bogor")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "bogor" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Bogor
                  </p>
                  <hr className="border-white boder-[1px]" />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("depok")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "depok" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Depok
                  </p>
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("cikarang")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "cikarang" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Cikarang
                  </p>
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("sumedang")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "sumedang" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Sumedang
                  </p>
                  <hr className="border-white boder-[1px]" />
                  <p
                    onClick={() => setLocation("yogja")}
                    className={`font-poppins text-white lg:text-[16px] md:text-[14px] text-[13px] cursor-pointer w-fit ${
                      location == "yogja" ? "font-semibold" : "font-medium"
                    }`}
                  >
                    Yogjakarta
                  </p>
                  <hr className="border-white boder-[1px]" />
                </div>
              </div>
              <a
                href=""
                className="font-poppins font-semibold text-white bg-gradient rounded-[50px] lg:text-[13px] md:text-[12px] text-[12px] px-5 py-2 mt-2 w-fit"
              >
                Lihat semua lokasi
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="relative flex justify-center lg:w-120 md:w-95 w-full lg:mt-0 md:mt-0 mt-7"
            >
              <img
                src={locationData[location]?.image}
                className="w-full h-auto object-contain"
                alt=""
              />
              <div className="absolute lg:w-110 md:w-85 w-80 bottom-0 lg:mb-5 md:mb-7 mb-3 px-4 py-3 flex flex-col mx-5 bg-white/60 rounded-[12.5px] backdrop-blur-[60px] lg:gap-1 md:gap-1 gap-1">
                <h1 className="font-poppins font-semibold text-black lg:text-[20px] md:text-[20px]">
                  {locationData[location]?.name}
                </h1>
                <h1 className="font-poppins font-semibold text-[15px] mt-4">
                  Lokasi
                </h1>
                <p className="font-poppins font-medium text-[#595959] text-[11px]">
                  {locationData[location]?.address}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="flex w-full justify-center lg:pt-20 md:pt-20 pt-15"
        >
          <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between">
            <div
              data-aos="fade-right"
              className="flex flex-col lg:gap-4 md:gap-4 gap-3 lg:w-110 md:w-80"
            >
              <h1 className="font-poppins font-medium text-white bg-purple-primary py-2 px-2.5 rounded-[7px] lg:text-[11px] md:text-[11px] text-[10px] w-fit">
                Pesan Sekarang
              </h1>
              <h1 className="font-poppins font-semibold text-white lg:text-[35.5px] md:text-[25px] text-[23px] lg:leading-[130%] mt-2">
                Pesan Sekarang & Amankan{" "}
                <span className="text-gradient">Jadwal Anda</span>
              </h1>
              <p className="font-poppins font-medium text-white lg:text-[11px] md:text-[10px] text-[11px]">
                Siap untuk hidup yang lebih sehat dan bahagia? Jadwalkan
                kunjungan Anda sekarang juga! Baik untuk konsultasi rutin,
                terapi otak, atau penanganan khusus lainnya — tim ahli kami siap
                membantu Anda dengan sepenuh hati.
              </p>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row gap-2">
                  <img
                    src={location_gradient}
                    className="w-3 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-medium text-white lg:text-[12px] md:text-[12px] text-[11px]">
                    Ruko Pisa Grande B no 7, Banten 15810
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <img
                    src={message}
                    className="w-3 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-medium text-white lg:text-[12px] md:text-[12px] text-[11px]">
                    brainwest@gmail.com
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <img
                    src={call_gradient}
                    className="w-3 h-auto object-contain"
                    alt=""
                  />
                  <p className="font-poppins font-medium text-white lg:text-[12px] md:text-[12px] text-[11px]">
                    +62 1297786651
                  </p>
                </div>
              </div>
              <img
                src={book}
                className="lg:w-95 md:w-full h-auto object-contain mt-5"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col bg-white rounded-[17px] lg:w-120 md:w-95 w-full justify-center lg:px-7 md:px-5 py-6 px-5 lg:gap-5 md:gap-3 gap-3 lg:mt-0 md:mt-0 mt-8"
            >
              <div className="flex flex-row w-full justify-center gap-5">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row items-center gap-1">
                    <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[15px] text-[14px]">
                      Nama Kamu
                    </h1>
                    <img
                      src={circle_blue}
                      className="w-2 h-auto object-contain"
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(x) => setName(x.target.value)}
                    className={`${
                      name == "" ? "text-[#AEAEAE]" : "text-black"
                    } font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-purple-primary focus:border-[2px]`}
                    placeholder="Masukan Namamu"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row items-center gap-1">
                    <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[15px] text-[14px]">
                      Telepon
                    </h1>
                    <img
                      src={circle_blue}
                      className="w-2 h-auto object-contain"
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    value={calls}
                    onChange={(x) => setCalls(x.target.value)}
                    className={`${
                      calls == "" ? "text-[#AEAEAE]" : "text-black"
                    } font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-purple-primary focus:border-[2px]`}
                    placeholder="Masukan Teleponmu"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-center gap-5">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row items-center gap-1">
                    <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[15px] text-[14px]">
                      Alamat email
                    </h1>
                    <img
                      src={circle_blue}
                      className="w-2 h-auto object-contain"
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={(x) => setEmail(x.target.value)}
                    className={`${
                      email == "" ? "text-[#AEAEAE]" : "text-black"
                    } font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-purple-primary focus:border-[2px]`}
                    placeholder="Masukan Emailmu"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row items-center gap-1">
                    <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[15px] text-[14px]">
                      Tanggal
                    </h1>
                    <img
                      src={circle_blue}
                      className="w-2 h-auto object-contain"
                      alt=""
                    />
                  </div>
                  <input
                    type="date"
                    value={date}
                    onChange={(x) => setDate(x.target.value)}
                    className={`${
                      date == "" ? "text-[#AEAEAE]" : "text-black"
                    } font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-purple-primary focus:border-[2px]`}
                    placeholder="Masukan Tanggal"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-row items-center gap-1">
                  <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[15px] text-[14px]">
                    Pilih Layanan
                  </h1>
                  <img
                    src={circle_blue}
                    className="w-2 h-auto object-contain"
                    alt=""
                  />
                </div>
                <select
                  type="text"
                  className="font-poppins font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full text-black focus:border-purple-primary focus:border-[2px] focus:text-gray"
                >
                  <option value="" disabled selected>
                    Pilih Layananmu
                  </option>
                  <option value="Konsultasi Neurologi">
                    Konsultasi Neurologi
                  </option>
                  <option value="Deteksi Dini Gangguan Otak">
                    Deteksi Dini Gangguan Otak
                  </option>
                  <option value="Pemeriksaan Fungsi Otak">
                    Pemeriksaan Fungsi Otak
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-row items-center gap-1">
                  <h1 className="font-poppins font-semibold lg:text-[15px] md:text-[15px] text-[14px]">
                    Pertanyaan
                  </h1>
                  <img
                    src={circle_blue}
                    className="w-2 h-auto object-contain"
                    alt=""
                  />
                </div>
                <textarea
                  type="text"
                  value={question}
                  onChange={(x) => setQuestion(x.target.value)}
                  className={`${
                    question == "" ? "text-[#AEAEAE]" : "text-black"
                  } font-poppins h-35 font-semibold lg:text-[13px] md:text-[13px] text-[12px] border-[1.5px] border-[#CBCBCB] rounded-[7px] outline-none py-3 px-3 w-full focus:border-purple-primary focus:border-[2px] resize-none`}
                  placeholder="Masukan Pertanyaanmu"
                />
              </div>
              <button
                onClick={sendToWa}
                className="cursor-pointer font-poppins font-semibold text-white bg-gradient rounded-[5px] lg:text-[15px] md:text-[15px] text-[14px] px-5 py-3 mt-2 w-fit"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </section>

        <section className="flex w-full justify-center lg:py-20 md:py-20 py-15">
          <div className="container flex lg:flex-row md:flex-row flex-col lg:w-250 md:w-fullxw-full lg:px-0 md:px-5 px-5 justify-between items-center">
            <div
              data-aos="fade-right"
              className="flex flex-col lg:w-110 md:w-80 gap-4"
            >
              <h1 className="font-poppins font-medium text-white bg-purple-primary py-2 px-2.5 rounded-[7px] lg:text-[11px] md:text-[11px] text-[10px] w-fit">
                Frequently asked question
              </h1>
              <h1 className="font-poppins font-semibold text-white lg:text-[35px] md:text-[25px] text-[27px] lg:leading-[130%]">
                Pertanyaan yang Sering{" "}
                <span className="text-gradient">Diajukan</span>
              </h1>
              <p className="font-poppins font-medium text-white text-[11px]">
                Punya pertanyaan - Pertanyaan tentang seputar otak? Kami siap
                membantu anda untuk menjawab rasa penasaran Anda dengan
                penjelasan ilmiah yang mudah dipahami oleh semua orang.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col lg:w-120 md:w-95 w-full gap-6 lg:mt-0 md:mt-0 my-6"
            >
              <div className="flex flex-col bg-white rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
                <div className="flex flex-row w-full justify-between items-center">
                  <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px]">
                    Apa itu Brainwest?
                  </h1>
                  <img
                    src={arrow_bottom}
                    onClick={() => toggleFaq(1)}
                    className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                      isOpenFaq1 ? "rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpenFaq1 ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                    Brainwest adalah platform digital berbentuk web yang
                    menyediakan edukasi seputar otak, layanan pemindaian tumor
                    otak, serta konsultasi dengan dokter spesialis neurologi dan
                    bedah saraf.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
                <div className="flex flex-row w-full justify-between items-center">
                  <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] mr-5">
                    Apakah data saya aman?
                  </h1>
                  <img
                    src={arrow_bottom}
                    onClick={() => toggleFaq(2)}
                    className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                      isOpenFaq2 ? "rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpenFaq2 ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                    Ya, data Anda dijamin aman. Brainwest menerapkan sistem
                    keamanan data yang ketat dan mengikuti standar enkripsi
                    untuk menjaga privasi serta kerahasiaan informasi pengguna.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
                <div className="flex flex-row w-full justify-between items-center">
                  <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] mr-5">
                    Apakah artikel edukasi di sini bisa dipercaya?
                  </h1>
                  <img
                    src={arrow_bottom}
                    onClick={() => toggleFaq(3)}
                    className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                      isOpenFaq3 ? "rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpenFaq3 ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                    Tentu. Artikel edukasi yang tersedia di Brainwest ditulis
                    dan ditinjau oleh tenaga medis profesional serta tim ahli di
                    bidang neurologi. Kami memastikan bahwa semua informasi
                    bersumber dari referensi terpercaya dan diperbarui secara
                    berkala.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-[17px] px-5 py-4 transition-all duration-300 ease-in-out">
                <div className="flex flex-row w-full justify-between items-center">
                  <h1 className="font-poppins font-semibold lg:text-[20px] md:text-[18px] mr-5">
                    Bisakah saya konsultasi tanpa hasil scan otak?
                  </h1>
                  <img
                    src={arrow_bottom}
                    onClick={() => toggleFaq(4)}
                    className={`lg:w-7 md:w-6 w-8 h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer ${
                      isOpenFaq4 ? "rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpenFaq4 ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <p className="font-poppins font-medium text-[12.5px] text-[#404040]">
                    Ya, Anda tetap bisa melakukan konsultasi meskipun belum
                    memiliki hasil scan otak. Dokter akan melakukan asesmen awal
                    berdasarkan keluhan yang Anda sampaikan dan dapat
                    merekomendasikan tindakan lanjutan bila diperlukan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
