import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Consultation from "../pages/Consultation";
import Quiz from "../pages/Quiz";
import ResultQuiz from "../pages/ResultQuiz";
import ChatBot from "../pages/ChatBot";
import Detection from "../pages/Detection";
import ResultDetection from "../pages/ResultDetection";
import Community from "../pages/Community";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/chatbot" element={<ChatBot/>}/>
                <Route path="/consultation" element={<Consultation/>}/>
                <Route path="/diagnosis" element={<Quiz/>}/>
                <Route path="/diagnosis/result" element={<ResultQuiz/>}/>
                <Route path="/detection" element={<Detection/>}/>
                <Route path="/detection/result" element={<ResultDetection/>}/>
                <Route path="/community" element={<Community/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default Router