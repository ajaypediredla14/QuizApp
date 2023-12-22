import logo from './logo.svg';
import './App.css';
import header from "./assets/header.png";
import Home from "./assets/home.jpg";
import { useState } from 'react';

function App() {
  const [Questions, setQuestions] = useState({
    0: [
      { question: "1. what is present in toothpaste?", answer: "", correct_answer: "salt", status: "" },
      { question: "2. what is present in toothpaste?", answer: "", correct_answer: "salt1", status: "" }
    ],
    1: [
      { question: "1. what is present in toothpaste?2", answer: "", correct_answer: "salt2", status: "" },
      { question: "2. what is present in toothpaste?2", answer: "", correct_answer: "salt3", status: "" }
    ],
    2: [
      { question: "1. what is present in toothpaste?3", answer: "", correct_answer: "salt4", status: "" },
      { question: "2. what is present in toothpaste?3", answer: "", correct_answer: "salt5", status: "" }
    ]
  }
  )

  const [currentPage, setCurrentPage] = useState(0);
  const [showHints, setShowHints] = useState(false)
  const [canMove, setCanMove] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [home, setHome] = useState(true);

  const [answers, setAnswers] = useState({ 0: ["salt", "salt1"], 1: ["salt2", "salt3"], 2: ["salt4", "salt5"] })

  const onChangeAnswer = (value, index) => {
    // console.log("checking", value, index)
    const question = { ...Questions };
    question[currentPage][index].answer = value;
    // console.log("checking", question)
    setQuestions(question)
  }

  const onValidate = () => {
    if (canMove) {
      if (currentPage === Object.keys(Questions).length - 1) {
        setSubmit(true)
      } else {

        setCurrentPage(prev => prev + 1)
        setShowHints(false)
        setCanMove(false)
      }
    } else {

      const question = { ...Questions };
      let flag = false;
      for (let i = 0; i < question[currentPage].length; i++) {
        // console.log("checkin", question[currentPage][i])
        if (question[currentPage][i].answer === question[currentPage][i].correct_answer) {
          question[currentPage][i].status = "1";
        } else {
          flag = true;
          question[currentPage][i].status = "0";
        }
      }

      setQuestions(question)
      if (!flag) {
        setCanMove(true)
      }
    }
  }

  function shuffleArray(array) {
    const shuffledArray = [...array]; // Create a new array to avoid modifying the original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  return (
    <>
      {submit ?
        // {last page submit page}
        <div className="flex flex-col relative  w-full items-center justify-center">
          <img src={Home} alt="home" title="h" />
          <p className="absolute">Submitted</p>
        </div>
        :

        <>
          {home ?
            // {home page}
            <div className="flex flex-col relative  w-full items-center justify-center">
              <img src={Home} alt="home" title="h" />
              <div className="absolute mt-20 ">
                <button
                  onClick={() => setHome(false)}
                  className={` text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg 
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 text-center font-['nunito'] cursor-pointer  `}
                >
                  Start Quiz
                </button>
                <p>sxsfdsgdf</p>
              </div>
            </div>
            :
            <div className=" p-10 px-20">
              <div className="flex flex-col relative  w-full items-center justify-center">
                <img src={header} alt="home" title="h" />
                <button
                  onClick={() => setHome(false)}
                  className={`absolute text-[100px] bg-black text-white rounded-lg px-2`}
                >
                  Pro Tradition
                </button>
              </div>
              <div className="flex flex-col">
                <p className='text-xl shadow-md py-2 px-3 bg-cyan-300'>Quiz 1</p>
                {console.log("chjeckkc", Questions["0"])}
                {
                  Questions[currentPage].map((q, index) =>
                    <div className='pl-3 pb-3'>
                      <div className="flex items-center">

                        <p className="text-lg py-2 font-['Poppins']">{q.question}</p>
                        {q.status === "0" ? <span className="text-red-500 px-3">*Wrong answer</span> : null}
                        {q.status === "1" ? <span className="text-green-500 px-3">*Correct answer</span> : null}
                      </div>
                      <input
                        className="border-2 border-gray-300 block px-2.5 pb-2 pt-2 w-full text-sm  bg-transparent rounded appearance-none focus:outline-none focus:ring-0 peer"
                        id="q1"
                        name="q1"
                        value={q.answer}
                        onChange={(e) => onChangeAnswer(e.target.value, index)}
                        type="text"
                        placeholder="Answer here..."
                      />
                    </div>
                  )
                }
              </div>
              <div className="flex gap-x-3">

                <button
                  onClick={() => setShowHints(prev => !prev)}
                  className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg 
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 text-center font-['nunito'] cursor-pointer  `}
                >
                  {showHints ? "Hide hints" : "Show hints"}
                </button>
                <button
                  onClick={() => onValidate()}
                  className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg 
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 text-center font-['nunito'] cursor-pointer  `}
                >
                  {canMove ? "Next Page" : "Check Your answer"}
                </button>
                {currentPage > 0 ??
                  <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage <= 0}
                    className={`text-[#001437]  bg-[#BCFB46] hover:bg-[#001437] hover:text-[#a0db32]  rounded-lg 
              md:text-[16px] font-bold md:px-6 text-sm  text-md px-6 py-2 text-center font-['nunito'] cursor-pointer  `}
                  >
                    Prev page
                  </button>}
              </div>
              {
                showHints ? <div className='flex px-2 py-1 m-2 gap-2 border border-slate-300 rounded-lg'>
                  {shuffleArray(answers[currentPage]).map((answer, index) =>
                    <span className="py-0.5 px-2 bg-green-600 rounded-lg text-lg">{answer}</span>
                  )}
                </div> : null
              }
            </div>
          }
        </>

      }
    </>
  );
}

export default App;
